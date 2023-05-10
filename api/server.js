const express = require("express");
const app = express();
// Api Routes
booksRoutesRouter = require("./Routes/booksRoutes");
app.use('/books-list', booksRoutesRouter)
app.listen(8000, () => {
  console.log("Server started on port 8000.");
});
