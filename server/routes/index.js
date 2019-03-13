const { demo: demoController } = require('../controllers');

module.exports = (app) => {
    // Define API routes here
    app.get('/api/hello', demoController.hello);
};