const getListOfBooks = (req,res) => {
        res.json({
            users: [
              {
                id: 1,
                name: "Book 1",
              },
              {
                id: 2,
                name: "Book 2",
              },
              {
                id: 3,
                name: "Book 3",
              },
            ],
          });
}

const getBook = (req,res) => {
    res.status(201).json({message: `updated a book by id of ${req.params.id}`})
}

const createBook = (req, res) => {
    res.status(201).json({message: 'Create a book'})
};

const updateBook = (req, res) => {
    res.status(201).json({message: `Updated details for ${req.params.id}`})
}

module.exports = {getListOfBooks, createBook, updateBook, getBook}