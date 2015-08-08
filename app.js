var express = require("express");
var app = express();

app.get("/", function(request, response) {
  response.send("hello world");
});

app.get("/blocks", function(request, response) {
  var blocks = ["fixed", "movable", "rotating"];
  response.json(blocks);
});

app.get("/parts", function(request, response) {
  response.redirect(301, "/blocks");
});

app.listen(3000, function() {
  console.log("listening on port 3000");
});
