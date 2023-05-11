var express = require('express');
var router = express.Router();
const {getListOfBooks, createBook, updateBook, getBook} = require('../controller/bookController')

router.route('/').get(getListOfBooks);
router.route('/').get(getBook);
router.route('/').post(createBook);
router.route('/').put(createBook);

module.exports = router;