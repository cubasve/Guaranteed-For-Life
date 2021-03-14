const express = require('express');
const path = require('path');
const favicon = require('favicon');
const logger = require('logger');

const app = express();

app.use(logger('dev'));
app.use(express.json());

//Configure both server-favicon & static middlewares
//to server from production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

//Catch all route:
//* is needed for SPA's client-side routing to work properly
//route matches every GET request 
app.get('/*', function(req, res) {
    res.sendFiler(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, function() {
    console.log(`Express app running on port ${port}`);
});