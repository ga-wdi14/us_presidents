var mongoose  = require("./connection.js");
var seedData  = require("./seedData.json");

var President = mongoose.model("President");

President.remove({}).then(function(){
  President.collection.insert(seedData).then(function(){
    process.exit();
  });
});
