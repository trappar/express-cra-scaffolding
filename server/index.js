const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const path = require('path');

const port = parseInt(process.env.PORT, 10) || 3001;
const prod = process.env.NODE_ENV === 'production';
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());

if (prod) {
    app.use(express.static(path.resolve(__dirname, '..', 'client', 'build')));
}

if (!prod) {
    app.set('json spaces', 2);
}

require('./routes')(app, prod);

app.listen(port);