//do I need to require all of these again or just friends
var path = require("path");
var friends = require("../data/friends.js");
var express = require("express");
var app = express();

//so can be used in other files
module.exports = function(app){
    //display the friends of json 
    app.get("/api/friends", function(req,res) {
    res.json(friends);
    });

    app.post("/api/friends",function(req,res){
        var bestMatch = {
            name: "",
            photo:"",
            friendDifference: 1000
        };
        console.log("%%%%%%%req.body%%%%%");
        console.log(req.body);
        //the above works, logs form input
        
        
        var userData = req.body;
        //this is not console.loggging why? skip this step
        // and just do req.body.scores = userScores?
        // console.log(userData);
        var userScores = userData.scores;
        
        // var scoresArray = [];
        // var friendCount = 0;
        // var bestMatch = 0;
var totalDifference=0;

        for(var i=0;i<friends.length; i++){
            totalDifference = 0;
            // for (var j =0; j<userScores.length; j++){
            for (var j=0; j<friends[i].scores;j++){

               totalDifference+=Math.abs(parseInt(userScores[j])-parseInt(friends[i]-scores[j]));
                if (totalDifference <= bestMatch.friendDifference) {
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDifference = totalDifference;

                   };
        }
                
    }
        friends.push(userData); 
})
}    
   
            // difference += (Math.abs(parseInt(friends[i].scores[j])-parseInt(userScores[j])));

//             }
//             scoresArray.push(difference);
//         }
//         for (var i=0; i<scoresArray.length; i++){
//             if(scoresArray[i]<= scoresArray[bestMatch]){
//                 bestMatch = i;
//             }
//         }
//          var match = friends.bestMatch;
//         // var match = friends[bestMatch];
//         console.log("++++++++++++++++");
//         console.log(match);
//         //below logs undefined
//         console.log(req.body);
//         res.json(match);
//         friends.push(req.body);
//         //the below logs Nan
//         console.log("----------------");
//         console.log(scoresArray[0]);
//     });
// };


            // if (difference<differenceBetweenFriends){
            //     differenceBetweenFriends = difference;
            //     matchName = friend[i].name;
            //     matchImage = friend[i].photo;
            // }
        //  friends.push(userData);
        // res.json({status: "ok", matchName:matchName, matchImage: matchImage});

 