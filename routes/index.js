var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('index');
});

router.get('/:page', function (req, res) {
    res.render(req.params.page);
});

module.exports = router;
