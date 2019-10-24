var path = require("path");

module.exports = function(app){
// Send user to the homepage
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});
// Send user to the survey page
app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "survey.html"));
});
};