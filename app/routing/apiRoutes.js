
const friends   = require('../data/friends.js');
const server    = require('../../server.js');
const log       = console.log;


module.exports = (app) => {
    let user;
    // total list of friends
    app.get('/api/friends', (req, res) => {
        res.json(friends);
        log(friends[0]);
        
    });

    app.post("/api/friends", (req, res) => {

        module.exports.user = req.body;


        friends.push(req,body);
        log(`${req.body.name} has been added!`);
        res.json({});

        
    })

    
}