const compression = require('compression');
const bodyParser = require('body-parser');

// These are applied to all requests
module.exports = (app) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(compression());
};