var express = require("express"); //This connects the express module API

//Create our app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function (req, res, next){
  if (req.headers["x-forwarded-proto"] === "http"){
    next();
  } else {
    res.redirect("http://" + req.hostname + req.url);
  }
});

app.use(express.static("public"));
//Add functionality to your app
//express.static identifies what folder it wants to serve

app.listen(PORT, function(){
  console.log("Express server is up on port " + PORT);
});
