const routes = require('express').Router();
const controller = require('../controller/controller');


routes.route('/api/categories')
    .get(controller.get_categories)
    .post(controller.create_categories);
    
    routes.route('/api/transaction')
    .post(controller.create_transaction)


module.exports = routes;