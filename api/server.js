const express = require("express");
const app = express();
const books = require('./Data')
// Api Routes
booksRoutesRouter = require("./Routes/booksRoutes");


// List of books function
app.get("/books-list", booksRoutesRouter);

// book details function
app.get(`/book/:id`, function (req, res) {
    const id = req.params.id
    for (let book of books) {
        if (book.id == id) {
            res.json(book);
            return;
        }
    }
    res.status(404).send('Book not found');
});

// Delete function
app.delete(`/book/:id`, function(req, res){
    const id = req.params.id;
    for(i = 0; i < books.length; i++){
        if(books[i].id == id){
            function findIndexes(e){
                return e.id == books[i].id 
            }
            let bookIndex = books.findIndex(findIndexes);
            books.splice(bookIndex,1);
            res.json({message:"Book has been deleted."})
        } else {
            return res.status(404).json({
                error:"No such id exists!"
            })
        }
    }
})

// Create Function
app.post(`/book`, function(req, res){
    
})


app.listen(8000, () => {
  console.log("Server started on port 8000.");
});
