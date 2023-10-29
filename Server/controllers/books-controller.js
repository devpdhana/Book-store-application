const Book = require('../models/Book')

const getAllbooks = async (req,res,next)=>{
    let books;
    try{
        books = await Book.find()
    }catch(err){
        console.log(err.message)
    }

    if(!books){
        res.status(404).json({message:"book not found"})
    }
    res.status(200).json({books})
}

const getBookByID = async(req,res,next)=>{
    const id = req.params.bookId
    console.log(req.params)
    let book;
    try{
        book = await Book.findById(id)
    }catch(err){
        console.log(err.message)
    }
    if(!book){
        return res.status(404).json({message:"Book not found"})
    }
    return res.status(200).json({book})
}

const addBook = async (req,res,next)=>{
    const {name,author,description,price,available,image} = req.body
     let book;
    try{
        book = new Book({
          name,
          author,
          description,
          price,
          available,
          image
        });
        await book.save();
    }catch(err){
        console.log(err.message)
    }
    
    if(!book){
        return res.status(500).json({message:"unable to add"})
    }
    return res.status(201).json({ book });
}

const updateBook = async(req,res,next)=>{
    const {name,author,description,price,available,image} = req.body
    const id = req.params.id
    let book;
    try{
        book = await Book.findByIdAndUpdate(id,{
            name,
            author,
            description,
            price,
            available,
            image
        })
        book = await book.save()
    }catch(err){
        console.log(err.message)
    }
    if (!book){
        res.status(404).json({message:"unable to update the book by ID"})
    }
    res.status(200).json({book})
}

const deleteBook = async(req,res,next)=>{
    const id = req.params.id
    let book;
    try{
        book = await Book.findByIdAndRemove(id)
    }catch(err){
        console.log(err.message)
    }
    if(!book){
        res.status(404).json({message:"unable to delete the book by ID"})
    }
    res.status(200).json({message:"Deleted successfully"})
}

exports.getAllbooks = getAllbooks
exports.addBook = addBook
exports.getBookByID = getBookByID
exports.updateBook = updateBook
exports.deleteBook = deleteBook