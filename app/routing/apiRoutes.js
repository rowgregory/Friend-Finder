
const friendList = require('../data/friends.js');
//const server    = require('../../server.js');
const log = console.log;
const chalk = require('chalk');


const routes = (app) => {

    // total list of friends
    app.get('/api/friends', (req, res) => {
        res.json(friendList);
        

    });
    // user sumits a form and it submits data to the server
    app.post("/api/friends", (req, res) => {

        // user response
        let newFriend = req.body.scores;
        //log(newFriend);

        let differences = [];
        let bestMatch = 0;

        // total difference starts off at 0
        let totalDifference = 0;

        for (let i = 0; i < friendList.length; i++) {

            log(friendList[i].name);
            log(friendList[i].scores);
            log(newFriend);

            totalDifference = 0;

            //loops through all question values and subtracts total difference
            for (let j = 0; j < newFriend.length; j++) {

                // x+=10; x = x+10
                // compare the friend with existing friends
                totalDifference += Math.abs(parseInt(friendList[i].scores[j]) - parseInt(newFriend[j]));

            }
            log(chalk.green.bold(`Total Difference: ${totalDifference}`));
            differences.push(totalDifference);
        }
        // find best match after comnparison with all friends
        for (let k = 0; k < differences.length; k++) {
            if (differences[k] <= differences[bestMatch]) {
                bestMatch = k;
            }
        }
        // return data
        let yourMatch = friendList[bestMatch];
        log(yourMatch);
        res.json(yourMatch);
        friendList.push(req.body);



    })
}
module.exports = routes;








