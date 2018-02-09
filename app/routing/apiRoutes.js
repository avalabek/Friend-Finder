var path = require("path");
var friends = require("../data/friends.js");
// var app = express();

module.exports = function(app){
    app.get("/api/friends", function(req,res) {
    res.json(friends);
    });

    app.post("/api/friends",function(req,res){
        var userData = req.body;
        console.log(userData);
        var userScores = userData.scores;
        var matchName = "";
        var matchImage = "";
        var differenceBetweenFriends = 100;

        for(var i=0;i<friend.length; i++){
            var difference = 0;
            for (var j =0; j<userScores.length; j++){
                difference += Math.abs(friend[i].scores[j]-userScores[j]);

            }
            if (difference<differenceBetweenFriends){
                differenceBetweenFriends = difference;
                matchName = friend[i].name;
                matchImage = friend[i].photo;
            }
        }
        friend.push(userData);
        res.json({status: "ok", matchName:matchName, matchImage: matchImage});

    });
};