

// var path = require("path");
var friends = require("../data/friends.js");
//Don't understand, but the below doesn't work

module.exports = function(app){
    app.get("/api/friends", function(req,res) {
    res.json(friends);
    //create a json object called friends? as param?
    //we need a json to go here, not a page so I don't know
    // create a new page to display the json?
    //  res.sendFile(path.join(__dirname, "data/friends.js"))
     //need to render the js file as html
});
}
// app.post("/api/friends", function(req,res){
//     var newFriend = req.body;
//     newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
//     //handle incoming survey results

// //also handles the compatibility logic
// //or does that go in friends.js?
// console.log(newFriend);
// friends.push(newFriend);
// res.json(newFriend);
// });
// }
//is this syntax right?
// module.exports = apiRoutes;