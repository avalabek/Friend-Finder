var path = require("path");

app.get("/api/friends", function(req,res){
    // return res.json()
    //create a json object called friends? as param?
    //we need a json to go here, not a page so I don't know
    // create a new page to display the json?
     res.sendFile(path.join(__dirname, "data/friends.js"))
})

app.post