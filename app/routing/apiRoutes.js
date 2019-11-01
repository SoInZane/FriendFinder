var friendsList = require("../data/friends.js");
var path = require("path");
var fs = require("fs");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsList);
    });

    // Create new friends and post to the api friends page
    app.post("/api/friends", function (req, res) {
        var newFriend = req.body.scores;
        var scoreArray = [];
        var friendCount = 0;
        var bestMatch = 0;

        // loop through current friends
        for (var i = 0; i < friendsList.length; i++) {
            var scoreDiff = 0;
            // loop through the scores and compare the friends
            for (var j = 0; j < newFriend.length; j++) {
                scoreDiff += (Math.abs(parseInt(friendList[i].scores[j]) - parseInt(newFriendScores[j])));
            }
            // push the results into the scoreArray
            scoreArray.push(scoreDiff);
        }
        for (var i = 0; i < scoreArray.length; i++) {
            if (scoreArray[i] <= scoreArray[bestMatch]) {
                bestMatch = i;
            }
        }

        var bestFriend = friendsList[bestMatch];
        res.json(bestFriend);

        friendsList.push(req.body);

    });
};