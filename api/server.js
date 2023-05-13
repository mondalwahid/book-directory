const { PrismaClient } = require("@prisma/client");
const express = require("express");
const app = express();
const prisma = new PrismaClient();
app.use(express.json());

// Api Routes
booksRoutesRouter = require("./Routes/booksRoutes");

// Create Function
app.post("/book", async function (req, res) {
  const { BookName } = req.body;
  const createdBook = await prisma.BOOKS.create({
    data: {
      BookName: BookName,
    },
  });
  res.json(createdBook);
});

// List of books function
app.get("/books-list", async (req, res) => {
  const books = await prisma.BOOKS.findMany();
  res.json(books);
});

// book details function
app.get(`/book/:id`, async function (req, res) {
  const id = parseInt(req.params.id);
  if (id) {
    const book = await prisma.BOOKS.findUnique({
      where: {
        id: id,
      },
    });
    if (book) {
      res.status(200).send(book);
    } else res.status(404).send("Not found");
  } else res.status(403).send("forbidden");
});

// Update Function
app.put("/book/:id", async function (req, res) {
  const id = parseInt(req.params.id);
  const newBook = req.body.BookName;
  if(id && newBook){
    const findId = await prisma.BOOKS.findUnique({
        where: { id: id },
    });
    if(findId){
        const updatedBook = await prisma.BOOKS.update({
            where: { id: id },
            data: { BookName: newBook },
        });
        res.status(200).send(updatedBook);   
    } else res.status(404).send("Id not found")
  } else res.status(403).send("Forbidden")
});

// Delete function
app.delete(`/book/:id`, async function (req, res) {
  const id = parseInt(req.params.id);
  if (id) {
    const book = await prisma.BOOKS.findUnique({
      where: {
        id: id,
      },
    });
    if (book) {
      await prisma.BOOKS.delete({
        where: {
          id: id,
        },
      });
      res.status(202).send("Deleted");
    } else res.status(404).send("Not found");
  } else res.status(403).send("forbidden");
});

app.listen(8000, () => {
  console.log("Server started on port 8000.");
});
