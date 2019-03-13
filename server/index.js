const express = require('express');
const path = require('path');
const proxy = require('http-proxy-middleware');
const middleware = require('./middleware');

const port = parseInt(process.env.PORT, 10) || 3000;
const prod = process.env.NODE_ENV === 'production';
const app = express();

middleware.defaults(app);

if (prod) {
    app.use(express.static(path.resolve(__dirname, '..', 'client', 'build')));
} else {
    app.set('json spaces', 2);
}

require('./routes')(app);

if (prod) {
    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
    });
} else {
    // Proxy all other requests to react's dev server
    app.use(proxy('/', {
        target: 'http://localhost:3001',
        ws: true
    }));
}

app.listen(port, () => console.log(`App launched -> http://localhost:${port}`));