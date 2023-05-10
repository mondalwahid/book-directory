var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
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
});

module.exports = router;