const userControllers = require('../controllers/userControllers');
const UserController = require('../controllers/userControllers');

module.exports = (app) => {
    app.get('/api/users/getAll', UserController.getAll)
    app.post('/api/users/create',userControllers.register)
};
