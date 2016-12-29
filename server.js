var express = require("express"); //This connects the express module API

//Create our app
var app = express();

app.use(express.static("public"));
//Add functionality to your app
//express.static identifies what folder it wants to serve

app.listen(3000, function(){
  console.log("Express server is up on port 3000");
});
