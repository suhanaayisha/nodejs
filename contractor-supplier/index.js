const path = require('path')
const express = require('express')

const app = new express()

app.use(express.static('public'))

app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'pages/index.html'))
})

app.get('/contractor', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'pages/contractor.html'))
})

app.get('/contractor/my-requests', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'pages/my-requests.html'))
})

app.get('/contractor/comp-requests', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'pages/comp-requests.html'))
})

app.get('/supplier', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'pages/supplier.html'))
})

app.get('/supplier/live-requests', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'pages/live-requests.html'))
})

app.get('/supplier/award-requests', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'pages/award-requests.html'))
})

app.listen(3000,() => {
    console.log("listening on port 3000")
})