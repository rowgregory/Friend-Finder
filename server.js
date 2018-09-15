// dependencies
const express   = require('express');
const bPar  = require('body-parser');
const path  = require('path');
const log   = console.log;

// configure express
const app   = express();
const PORT  = process.env.PORT || 3000;

// adding middleware for parsing incoming request bodies
app.use(bPar.json());
app.use(bPar.urlencoded({extended: true}));
app.use(bPar.text());
app.use(bPar.json({ type: 'application/vnd.api+json' }));

// add the app routes
require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);

app.use(express.static('app/public'))


app.listen(PORT, () => {log(`App listening on PORT: ${PORT}`);})
