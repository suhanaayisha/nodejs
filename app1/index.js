const path = require('path')
const express = require('express')

//creating server with express
const app = express()

app.use(express.static('public'))

//json(), send() functions are from express
app.get('/', (request,response)=>{
    response.sendFile(path.resolve(__dirname, 'index.html')) //send file requires the full path, path.resolve helps us get it
})

app.get('/about', (request,response)=>{
    response.sendFile(path.resolve(__dirname, 'about.html')) //send file requires the full path, path.resolve helps us get it
})

app.get('/contact', (request,response)=>{
    response.sendFile(path.resolve(__dirname, 'contact.html')) //send file requires the full path, path.resolve helps us get it
})



app.listen(3000, () =>{
    console.log('App listening on port 3000')
})
// const http = require('http') //grabs http package and store it in a variable called http
// const fs = require('fs') //file system module

// const aboutPage = fs.readFileSync('about.html')
// const contactPage = fs.readFileSync('contact.html')
// const homePage = fs.readFileSync('index.html')

// //create server
// //createServer function takes in function as a parameter, that will be executed whenthe server is created
// //this function passes in request and response as its parameters
// const server= http.createServer((request,response)=>{
//     console.log(request.url)

//     if (request.url === '/about'){
//         return response.end(aboutPage)
//     } else if (request.url === '/contact'){
//         return response.end(contactPage)
//     } else if (request.url === '/'){
//         return response.end(homePage)
//     } else {
//         response.writeHead(404)
//         response.end('Not found')
//     }

// })

// //start the server so that browser can make request to it
// server.listen(3000) //when browser makes request to port 3000, function inside createServer will be executed