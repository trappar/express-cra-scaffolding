module.exports = {
    hello(req, res) {
        res.status(200).send(
            '<h1>Hello from the Express Server!</h1>' +
            '<a href="/">To React</a>'
        );
    }
};