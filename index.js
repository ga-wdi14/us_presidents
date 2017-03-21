//Dependencies
var express = require("express");
var parser  = require("body-parser");
var hbs     = require("express-handlebars");

//Database
var mongoose= require("./db/connection");

//App
var app     = express();

//Model
var President = mongoose.model("President");

//Setting hbs and body-parser
app.set("port", process.env.PORT || 3001);
app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout-main"
}));
app.use("/assets", express.static("public"));
app.use(parser.json({extended: true}));

//Server
app.listen(app.get("port"), function(){
  console.log("It's aliiive!");
});

//Routes
