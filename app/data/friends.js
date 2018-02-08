//imagining what this should look like
// var friend = module.export(friends);

var friends =[
    {
        name: "Josh",
        photo: "/images/Josh.jpg",
        scores:[5,4,3,4,5,2,1,2,3,5,5],
        total:39
    },
    {
        name: "Eddie",
        photo: "/images/eddie.jpg",
        scores: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
        total: 50
},
{
        name: "Matt",
        photo: "/images/matt.jpg",
        scores:[4,4,4,4,4,4,4,4,4,4,4],
        total: 40
    },
    {
        name: "Beyonce",
        photo: "/images/bey.jpg",
        scores:[3,4,3,2,1,1,1,2,3,1,1],
        total: 22
    },

    {   
        name: "Daniel",
        photo: "/images/daniel.jpg",
        scores: [1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3],
        total: 30
},
    {
        name: "Claire",
        photo: "/images/claire.jpg",
        scores: [3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1],
        total: 26
    },
    {
        name: "Daveed",
        photo: "/images/david.jpg",
        scores: [5, 5, 4, 5, 1, 2, 4, 4, 3, 4, 4],
        total: 41
    },

    {
        name: "Lin",
        photo: "/images/Lin.jpg",
        scores: [5, 4, 3, 5, 1, 3, 1, 2, 1, 2, 5],
        total: 32
    },
    {
        name: "Elizabeth",
        photo: "/images/Elizabeth.jpg",
        scores: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        total: 10
    },
    {
        name: "Octavia",
        photo: "/images/octavia.jpg",
        scores: [2, 2, 2, 3, 3, 2, 2, 2, 2, 2, 2],
        total: 20
    },
    {
        name: "Javier",
        photo: "/images/javier.jpg",
        scores: [2, 1, 3, 2, 1, 1, 1, 1, 1, 2, 1],
        total: 16
}];
    module.exports = friends;
//     app.get("/routing/apiRoutes/:friends?", function(req,res){
//         // var bestMatch = req.params.friends;
//         // bestMatch is where you add all the scores and subtract
//         // from the users score, so we need to take in user
//         // score and why not just add up the scores for the totals
//         //because that will be the same as subtractint each one
//         //so then assign javier 25 and say I score 50 our
//         // difference is 25 where as Matt would be 40 and
//         //that would only be a 10 difference
//         var userTotal; //grab with jquery
//         var bestMatch;
//         var difference;
//         var leastDifference;
//         for (var i = 0; i<friends.length; i++){
//                if (userTotal === friends.total){
//                    //send out the modal with the image
// //return res.json(false);
// //return res.json(friends);
//                    alert("We have a match! It's " + this.friends.name "!")
//                }else{
//                    for (var j=0; j<friends.length; j++){
//                        //need a calculation for finding least difference
//                        if (this.friends.total-userTotal) < (that.friends.total - userTotal){
//                            alert("Your closest match is " + this.friends.name)
//                        } 
                
//                    }
//                }
//            } 
//         }
//     });