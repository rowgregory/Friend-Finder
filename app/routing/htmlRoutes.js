const path  = require('path');

const routes = (app) => {
    

        // home page
        app.get("/", (req, res) => {
            res.sendFile(path.join(__dirname, '../public/home.html'))
        })

        // survey poage
        app.get('/survey', (req, res) => {
            res.sendFile(path.join(__dirname, '../public/survey.html'))
        });

    
}
module.exports = routes;
