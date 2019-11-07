const mongoose = require('mongoose')

const Post = require('./database/models/Post')

mongoose.connect('mongodb://localhost/node-js-test-blog')

// Post.findById("5dc3d49a840571df726e9355",(error, post) => {
//     console.log(error,post);
// })

Post.findByIdAndUpdate("5dc3d49a840571df726e9355", {
    title:"My first updated Blog Post"
},(error, post) => {
        console.log(error,post);
    })

Post.find({}, (error, post) => {
    console.log(error,post);
})

//create(), creates the passed data, then calls the callback function
// Post.create({
//     title:"My Second Blog Post",
//     description:"Second Blog Post Description",
//     content:"Second Lorem ipsum content"
// }, (error, post) => {
//     console.log(error, post)
// })