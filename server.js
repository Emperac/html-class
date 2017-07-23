var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Test4");
});

app.listen(4000);
