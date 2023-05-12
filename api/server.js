const express = require("express");
const app = express();
const books = require('./Data')
app.use(express.json())


// Api Routes
booksRoutesRouter = require("./Routes/booksRoutes");

// Create Function
app.post('/book', function (req, res) {
    let id = req.body.id;
    let name = req.body.name;
    if(id && name){
        books.push(req.body);
    }
    res.status(200).send(`A new Book has been added`);
    console.log(books)
  });

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

// Update Function
app.post('/book/:id', function(req, res){
    let id = req.params.id;
    const newBook = req.body;
    for (let i = 0; i < books.length; i++) {
        if (books[i].id == id) {
            books[i] = newBook;
        }
    }
    res.send('Book is edited');
});
console.log(books);

// Delete function
app.delete(`/book/:id`, function(req, res){
    const id = req.params.id;
    console.log(id);
    for(i = 0; i < books.length; i++){
        if(books[i].id == id){
            function findIndexes(e){
                return e.id == books[i].id 
            }
            let bookIndex = books.findIndex(findIndexes);
            books.splice(bookIndex,1);
            res.status(200).json({message:"Book has been deleted."})
        } else {
            return res.status(404).json({
                error:"No such id exists!"
            })
        }
    }
})

app.listen(8000, () => {
  console.log("Server started on port 8000.");
});
