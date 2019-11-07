const mongoose = require('mongoose')

const Post = require('./database/models/Post')

mongoose.connect('mongodb://localhost/node-js-test-blog')

Post.find({
    title:"My Second Blog Post"
}, (error, post) => {
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