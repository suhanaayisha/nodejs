const path = require('path')
const express = require('express')
const { config, engine } = require('express-edge'); //for templating
const mongoose = require('mongoose')
const bodyParser = require('body-parser') // to collect data from browser

const app = new express()

mongoose.connect('mongodb://localhost/node-js-blog')


app.use(express.static('public')) // use helps us add functionality to express
app.use(engine);

app.set('views', `${__dirname}/views`);

app.use(bodyParser.json()) 

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (request, response) => {
    response.render('index')
    // response.sendFile(path.resolve(__dirname, 'pages/index.html'))
})

app.get('/posts/new', (request, response) => {
    response.render('create')
})

app.post('/posts/store', (request, response) => {
    console.log(request.body) //body-parser has a function 'body' that contains an obj with all data coming from browser
    response.redirect('/')
})

app.get('/index', (request, response) => {
    response.render('index')
})

app.get('/about', (request, response) => {
    response.render('about')
})

app.get('/contact', (request, response) => {
    response.render('contact')
})

app.get('/post', (request, response) => {
    response.render('post')
})

app.listen(4000,() => {
    console.log("listening on port 4000")
})