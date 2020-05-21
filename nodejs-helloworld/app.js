var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.listen(3333, function () {
  console.log('Example app listening on port 8080!');
});

