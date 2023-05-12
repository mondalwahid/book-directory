// import { users } from "../Data";
const books = require('../Data')

const getListOfBooks = (req,res) => {
    res.json(books);
}

// const deleteBook = (req, res) => {
//     const id = req.params.id;
//     console.log(id)
//     for(i = 0; i < books.length; i++){
//         if(books[i] !== id){
//             return true;
//         }
//         return false;
//     }
//     res.send("Book has been deleted successfully.")
// }

const createBook = (req, res) => {
    res.status(201).json({message: 'Create a book'})
};

const updateBook = (req, res) => {
    res.status(201).json({message: `Updated details for ${req.params.id}`})
}

module.exports = {getListOfBooks, createBook, updateBook}