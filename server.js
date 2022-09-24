require('./models/db');
const express = require('express');
const path = require('path');
const expressHandlebars = require('express-handlebars');
const bodyParser = require('body-parser');
require('dotenv').config();
const {PORT} = process.env;
const employeeController = require('./controllers/employeeController');
const app = express();
const Handlebars = require('handlebars');
const {
  allowInsecurePrototypeAccess,
} = require('@handlebars/allow-prototype-access');

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true
  }));

app.use(express.static('public'));

app.set('views', path.join(__dirname, '/views/'));

app.engine('hbs', expressHandlebars.engine({
  defaultLayout: 'mainLayout',
  layoutsDir: __dirname + '/views/layouts/',
  extname: 'hbs',
  handlebars: allowInsecurePrototypeAccess(Handlebars)
}));

app.set('view engine', 'hbs');

app.listen(PORT, () => {
  console.log(`Express server started on port:${PORT}`)
});

app.use('/employee', employeeController);