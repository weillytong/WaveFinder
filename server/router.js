const router = require('express').Router();
const controller = require('./controller.js');

router
  .route('/surf')
  .get(controller.getSurf)


module.exports = router;