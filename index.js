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

//Index
app.get("/api/presidents", function(req, res){
  President.find({}).then(function(presidents){
    res.json(presidents)
  });
});

//Show
app.get("/api/presidents/:name", function(req, res){
  President.findOne({name: req.params.name}).then(function(president){
    res.json(president)
  });
});

//New
app.post("/api/presidents", function(req, res){
  President.create(req.body).then(function(president){
    res.json(president)
  })
});

//Delete
app.delete("/api/presidents/:name", function(req, res){
  President.findOneAndRemove({name: req.params.name}).then(function(){
    res.json({ success: true })
  });
});

//Update
app.put("/api/presidents/:name", function(req, res){
  President.findOneAndUpdate({name: req.params.name}, req.body, {new: true}).then(function(president){
    res.json(president)
  });
});

app.get("/*", function(req, res){
  res.render("presidents");
});
