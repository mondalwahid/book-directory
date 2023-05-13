
const books = require('../Data')

const getListOfBooks = (req,res) => {
    res.json(books);
}

const createBook = (req, res) => {
    res.status(201).json({message: 'Create a book'})
};

const updateBook = (req, res) => {
    res.status(201).json({message: `Updated details for ${req.params.id}`})
}

module.exports = {getListOfBooks, createBook, updateBook}