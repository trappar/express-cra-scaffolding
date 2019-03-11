const path = require('path');

module.exports = (app, prod) => {
    // Define API routes here

    if (prod) {
        // Handle React routing, return all requests to React app
        app.get('*', function(req, res) {
            res.sendFile(path.resolve(__dirname, '..', '..', 'client', 'build', 'index.html'));
        });
    }
};