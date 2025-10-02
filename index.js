// import userData from "./user";
// import carData from "./car"

// const userData = require("./user")
// const carData = require("./car")

// console.log(userData)   
// console.log(carData);
// console.log(carData.carLogger());

const http = require("http")
const fs = require("fs")
const path = require("path")

const server = http.createServer((req, res) => {

    // request - serverga so'rov
    // response - server javob

    // console.log(request.url)

    // response.write('<h1>Hello world 3</h1>')

    // response.end()


    if(req.method === "GET"){
        res.writeHead(200, {"Content-Type": "text/html"})

        if(req.url === "/"){
            fs.readFile(path.join(__dirname, "templates", "index.html"), "utf-8", (err, content) => {
                if(err) throw err
                res.end(content)
            })
        } else if(req.url === "/about"){
            fs.readFile(path.join(__dirname, "templates", "about.html"), "utf-8", (err, content) => {
                if(err) throw err
                res.end(content)
            })
        } else if(req.url === "/contact"){
            fs.readFile(path.join(__dirname, "templates", "contact.html"), "utf-8", (err, content) => {
                if(err) throw err
                res.end(content)
            })
        } else if(req.url === "/api/admin"){

            const admin = {name: "Asadbek", surname: "Khudayberdiev", job: "FrontEnd developer"}

            res.end(JSON.stringify(admin))
        }
        // res.end(`
        //     <h3>Send name</h3>
        //     <form method="post" action="/">
        //         <input name="name" placeholder="Enter your name"/>
        //         <button type="submit">Send name</button>
        //     </form>
        // `)
    } else if(req.method === "POST"){
        const body = []
        req.on('data', data => {
            body.push(Buffer.from(data))
        })

        req.on("end", () => {
            const message = body.toString().split("=")[1]

            res.end(`Name successfully added: ${message}`)
        })

        
    }


})

server.listen(3000, () => {
    console.log("Server has been started on port 3000")
})