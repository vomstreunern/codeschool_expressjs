$(document).ready(function() {

  var appendToList = function(data) {
    console.log(data);
    var list = [];
    for(var i in data) {
      list.push($("<li>", { text: data[i] }));
    }
    $(".block-list").append(list);
  };

  $.ajax({
    url: "/blocks",
    method: "GET",
    success: appendToList
  });

});
