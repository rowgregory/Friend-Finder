const path  = reqquire('path');

module.exports = (app) => {
    app.use((req, res) => {

        // home page
        res.sendFile(path.join(__dirname, '../public/home.html'))
    });

    // survey poage
    app.get('/survey', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/survey.html'))
    });
}