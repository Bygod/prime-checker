const express = require("express")
const path = require("path")
const server = express()


server.use(express.static(path.join(__dirname, 'build')))


server.get("/", function(req, res) {
    return path.join(__dirname, 'build', 'index.html')
})


server.listen(3000, function(){
    console.log("server init")
})
