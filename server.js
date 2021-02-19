const express = require("express")
const app = express()


app.get('/', (req, res) =>{
    res.send("Welcome to my blog!")
})

app.listen(0914)