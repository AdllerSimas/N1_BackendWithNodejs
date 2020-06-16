const express = require('express')
const { response } = require('express')

const app = express()

app.get('/projects', (req, res) => {
    return res.json([
            'Projeto 1',
            'Projeto 2'
        ])
})

app.post('/projects', (req, res) => {
    return res.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3',
    ])
})

app.put('/projects/:id', (req, res) => {
    return res.json([
        'Projeto 4',
        'Projeto 2',
        'Projeto 3',
    ])
})

app.delete('/projects/:id', (req, res) => {
    return res.json([
        'Projeto 2',
        'Projeto 3',
    ])
})




const Port = 3333

app.listen(Port, () => {
    console.log(`Server is Running on Port : ${Port}`)
})