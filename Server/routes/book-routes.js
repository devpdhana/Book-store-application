const express = require('express')
const router = express.Router()
const book = require('../models/Book')
const booksController = require('../controllers/books-controller')


router.get('/',booksController.getAllbooks)
router.post('/',booksController.addBook)
router.get('/:bookId',booksController.getBookByID)
router.put('/:id',booksController.updateBook)
router.delete('/:id',booksController.deleteBook)

module.exports = router