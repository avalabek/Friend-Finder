var path = require("path");
var friends = require("../data/friends.js");

// var app = express();

//so can be used in other files
module.exports = function(app){
    //display the friends of json 
    app.get("/api/friends", function(req,res) {
    res.json(friends);
    });

    app.post("/api/friends",function(req,res){
        var userData = req.body;
        //this is not console.loggging why? skip this step
        // and just do req.body.scores = userScores?
        console.log(userData);
        var userScores = userData.scores;
        var scoresArray = [];
        var friendCount = 0;
        var bestMatch = 0;

        for(var i=0;i<friends.length; i++){
            var difference = 0;
            for (var j =0; j<userScores.length; j++){
                difference += (Math.abs(parseInt(friends[i].scores[j])-parseInt(userScores[j])));

            }
            scoresArray.push(difference);
        }
        for (var i=0; i<scoresArray.length; i++){
            if(scoresArray[i]<= scoresArray[bestMatch]){
                bestMatch = i;
            }
        }
        var match = friends.bestMatch;
        res.json(match);
        friends.push(req.body);
    });
};


            // if (difference<differenceBetweenFriends){
            //     differenceBetweenFriends = difference;
            //     matchName = friend[i].name;
            //     matchImage = friend[i].photo;
            // }
        // friend.push(userData);
        // res.json({status: "ok", matchName:matchName, matchImage: matchImage});

 