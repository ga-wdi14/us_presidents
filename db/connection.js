var mongoose  = require("mongoose");

var PresidentSchema = new mongoose.Schema(
  {
    name: String,
    year: Number
  }
);

mongoose.model("President", PresidentSchema);
mongoose.connect("mongodb://localhost/us_president");

module.exports = mongoose;
