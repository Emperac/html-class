var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Test5");
});

app.listen(4000);
