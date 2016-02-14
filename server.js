var express = require('express');
var app = express();

var serve = function() {
    app.use(express.static('public'));

    app.listen(8080, function () {
        console.log('go to http://localhost:8080');
    });
};

module.exports = { serve };