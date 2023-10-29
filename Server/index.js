const express = require('express')
const mongoose = require('mongoose')
const app = express()
const router = require('./routes/book-routes')
const cors = require('cors')

//Middleware
app.use(cors())
app.use(express.json())
app.use('/books',router) //http://localhost:3000/books

mongoose.connect(
  "mongodb+srv://admin:zN3hOFiVMlWPWzlR@cluster0.qyh9n2k.mongodb.net/bookStore?retryWrites=true&w=majority"
).then(()=>{
    console.log("connected to database")
}).then(()=>{
    app.listen(3000)
    console.log('server is running on port 3000')
}).catch((err)=>{
    console.log(err.message)
});



//mongodb pass zN3hOFiVMlWPWzlR