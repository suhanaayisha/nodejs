const express = require('express')

const app = new express()

app.listen(4000,() => {
    console.log("listening on port 4000")
})