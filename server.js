const log   = console.log;
const exp   = require('express');
const bPar  = require('body-parser');

const app   = exp();
const PORT  = process.env.PORT || 3000;

app.use(bPar.json());
app.use(bPar.urlencoded({extended: true}));
app.use(bPar.text());
// app.use(bPar.json({type:app/vnd.api+json}));

app.listen(PORT, function(){
    log(`App listening on PORT: ${PORT}`);
})
