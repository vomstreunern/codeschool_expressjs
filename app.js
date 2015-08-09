var express = require("express");
var app = express();

var logger = require("./logger");
app.use(logger);

app.use(express.static("public"));

var blocks = {
  "fixed": "fastened securely in position",
  "movable": "capable of being moved",
  "rotating": "moving in a circle around its center"
};

app.get("/blocks", function(request, response) {
  if (request.query.limit >= 0) {
    response.json(blocks.slice(0, request.query.limit));
  } else {
    response.json(blocks);
  }
});

app.get("/parts", function(request, response) {
  response.redirect(301, "/blocks");
});

app.get("/blocks/:name", function (request, response) {
  var description = blocks[request.params.name];
  if (!description) {
    response.status(404).json("no description found for " + request.params.name);
  } else {
    response.json(description);
  }
});

app.listen(3000, function() {
  console.log("listening on port 3000");
});
