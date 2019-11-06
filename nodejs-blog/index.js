const path = require('path')
const express = require('express')

const app = new express()

app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'pages/index.html'))
})
app.use(express.static('public'))
app.listen(4000,() => {
    console.log("listening on port 4000")
})