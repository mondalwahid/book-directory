var express = require('express');
var router = express.Router();
const {getListOfBooks, createBook, updateBook} = require('../controller/bookController')

router.route('/books-list').get(getListOfBooks);
router.route('/').post(createBook);
router.route('/').put(updateBook);

module.exports = router;