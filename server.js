const express = require("express")
const path = require("path")
const server = express()
const checker = require("./primeChecker")


server.use(express.static(path.join(__dirname, 'build')))
server.use(express.json())

server.get("/", function(req, res) {
    return path.join(__dirname, 'build', 'index.html')
})





server.post("/", function(req, res) {
    const number = req.body.value
    const div = checker.getDivisors(number)
    const pr = checker.isPrime(div)
    res.send({divisors: div, prime: pr})
})

server.listen(3000, function(){
    console.log("server init")
})
