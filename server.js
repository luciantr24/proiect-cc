var express = require('express');
const favicon = require('express-favicon');
var path = require('path');

const PORT = process.env.PORT || 5000;

var app = express();

app.use(favicon(__dirname + '/build/favicon.ico'));

app.use(express.static(__dirname));

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

var server = app.listen(PORT, () =>{
    console.log("Server is up and running...");
})