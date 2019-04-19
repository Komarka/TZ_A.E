let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let cors = require('cors')
let router = express.Router();

let app = express();

//MIDDLEWARES

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//ROUTES

require('@routes')(app);


module.exports = app;