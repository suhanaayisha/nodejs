const path = require('path')
const express = require('express')
const { config, engine } = require('express-edge'); //for templating

const app = new express()


app.use(express.static('public')) // use helps us add functionality to express
app.use(engine);

app.set('views', `${__dirname}/views`);


app.get('/', (request, response) => {
    response.render('index')
    // response.sendFile(path.resolve(__dirname, 'pages/index.html'))
})

app.get('/index.html', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'pages/index.html'))
})

app.get('/about.html', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'pages/about.html'))
})

app.get('/contact.html', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'pages/contact.html'))
})

app.get('/post.html', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'pages/contact.html'))
})

app.listen(4000,() => {
    console.log("listening on port 4000")
})