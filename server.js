var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Test3");
});

app.listen(4000);
