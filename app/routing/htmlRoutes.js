var path = require("path");

module.exports = function(app){
// Send user to the homepage
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/../public/home.html"));
});
// Send user to the survey page
app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "/../public/survey.html"));
});
};