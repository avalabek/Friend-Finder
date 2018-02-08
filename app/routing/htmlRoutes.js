var path = require("path");
// var htmlRoutes = module.exports(app);

//so other files have access to the route
module.exports = function(app){

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html")); 
});
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    //not sure here
 app.use("/", function(req, res){
     res.sendFile(path.join(__dirname, "../public/home.html"));
 })
// module.exports = htmlRoutes;
}