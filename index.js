// import userData from "./user";
// import carData from "./car"

// const userData = require("./user")
// const carData = require("./car")

// console.log(userData)   
// console.log(carData);
// console.log(carData.carLogger());

const http = require("http")

const server = http.createServer((request, response) => {

    // request - serverga so'rov
    // response - server javob

    console.log(request.url)

    response.write('<h1>Hello world</h1>')

    response.end()


})

server.listen(3000, () => {
    console.log("Server has been started on port 3000")
})