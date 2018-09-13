const path  = require('path');

module.exports = (app) => {
    

        // home page
        app.get("/", (req, res) => {
            res.sendFile(path.join(__dirname, '../public/home.html'))
        })

        // survey poage
        app.get('/survey', (req, res) => {
            res.sendFile(path.join(__dirname, '../public/survey.html'))
        });

    
}

