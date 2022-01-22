var express = require('express');
var app = express();

app.get('/api/test', function (req, res) {
    res.send('This is a test API!');
});

app.listen(5050, function () {
    console.log('Backend server listening on port 5050');
});