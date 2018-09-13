const path      = require('path');
const friends   = require('../data/friends.js');
// const log       = console.log;

module.exports = (app) => {
    
    // total list of friends
    app.get('api/friends', (req, res) => {
        res.json(friends);
    });
    
}