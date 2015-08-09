var express = require("express");
var app = express();

var logger = require("./logger");
app.use(logger);

app.use(express.static("public"));

app.get("/blocks", function(request, response) {
  var blocks = ["fixed", "movable", "rotating"];

  if (request.query.limit >= 0) {
    response.json(blocks.slice(0, request.query.limit));
  } else {
    response.json(blocks);
  }
});

app.get("/parts", function(request, response) {
  response.redirect(301, "/blocks");
});

app.listen(3000, function() {
  console.log("listening on port 3000");
});
