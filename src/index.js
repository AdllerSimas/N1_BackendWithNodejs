const express = require('express')
const { response } = require('express')

const app = express()

app.get('/', (req, res) => {
    return res.json({message: "Hello World" })
})

const Port = 3333

app.listen(Port, () => {
    console.log(`Server is Running on Port : ${Port}`)
})