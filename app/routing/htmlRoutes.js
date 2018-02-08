var path = require("path");
var htmlRoutes = module.exports(app);

//so other files have access to the route

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "home.html")); 
});
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "survey.html"));
    });

    //not sure here
app.use("/", function(req, res){
    res.sendFile(path.join(__dirname, "home.html"));
})
module.exports = htmlRoutes;