const http = require('http') //grabs http package and store it in a variable called http

//create server
//createServer function takes in function as a parameter, that will be executed whenthe server is created
//this function passes in request and response as its parameters
const server= http.createServer((request,response)=>{
    console.log(request.url)

    response.end('HELLO NODE JS') //responds with hello nodejs
})

//start the server so that browser can make request to it
server.listen(3000) //when browser makes request to port 3000, function inside createServer will be executed