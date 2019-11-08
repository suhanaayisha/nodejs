const mongoose = require('mongoose')

//what each doc in post collection should look like
const PostSchema = new mongoose.Schema({
    title: String,
    description: String,
    content: String
})

//creating Post model, this is what is going to be communicating with db
//model represents collection
const Post = mongoose.model('Post', PostSchema)

module.exports = Post