var path = require("path");

//so other files have access to the route
//I don't really understand this syntax of making the function and passing in app 
module.exports = function(app){

    //app.use or app.get?
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html")); 
});
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    //not sure here
//  app.use("/", function(req, res){
//      res.sendFile(path.join(__dirname, "../public/home.html"));
//  })
}