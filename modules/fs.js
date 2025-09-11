const fs = require("fs")
const path = require("path")

// fs.mkdir(path.join(__dirname, "templates"), err => {
//     // if (err) throw new Error()

//     console.log("Folder was created successfully")
// })

fs.mkdir(path.join(__dirname, "notes"), err => {
    // if (err) throw new Error()

    console.log("Folder was created successfully");
})

fs.writeFile(path.join(__dirname, "notes", "december.txt"), "Create new course NodeJs", err => {
    console.log(err);
    // if (err) throw new Error()

    console.log("File was created successfully");
})