const routes = require('express').Router();
const controller = require('../controller/controller');


routes.route('/api/categories')
    .post(controller.create_categories)
    .get(controller.get_categories)



module.exports = routes;