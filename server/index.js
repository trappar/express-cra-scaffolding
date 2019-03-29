const express = require('express');
const path = require('path');
const middleware = require('./middleware');

const port = parseInt(process.env.PORT, 10) || 3001;
const prod = process.env.NODE_ENV === 'production';
const app = express();

const server = require('http').createServer(app);

middleware.defaults(app);

if (prod) {
    app.use(express.static(path.resolve(__dirname, '..', 'client', 'build'), {
        setHeaders: (res, filePath) => {
            if (path.parse(filePath).base !== 'index.html') {
                res.header('Cache-Control', 'public, max-age=2592000');
            }
        }
    }));
} else {
    app.set('json spaces', 2);
}

require('./routes')(app);

if (prod) {
    // Handle React routing, return all requests to React app
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '..', 'client', 'build', 'index.html')));
}

server.listen(port, () => console.log(`API Backend Launched -> http://localhost:${port}`));