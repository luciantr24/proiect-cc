var express = require('express');
var path = require('path');

const port = 5000;

var app = express();

const public = path.join(__dirname, '..', 'public');

var app = express();

app.use(express.static(public));

app.get('*', (req, res) =>{
    res.sendFile(path.join(public), 'index.html');
});

var server = app.listen(port, () =>{
    console.log("Server is up and running");
});
