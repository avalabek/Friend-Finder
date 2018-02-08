var express = require ("express");
var bodyParser = require ("body-parser");

var app = express();
var PORT = process.env.PORT || 8080;

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({extended:false});

// app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json({type: "application/*+json"}))
app.use(bodyParser.raw({type: "application/vnd.custom-type"}))
app.use(bodyParser.text({type: "text/html"}))

//does this belong here or separate file under routes?
require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);
// require("./app/public/style.css")(app);
// require("/routing/apiRoutes.js")(app);
//can I just write it like below?
// require("apiRoutes");
// require("htmlRoutes");
//  require("/routing/htmlRoutes.js")(app);

 app.listen(PORT,function(){
     console.log("App listening on PORT: " + PORT);
 });