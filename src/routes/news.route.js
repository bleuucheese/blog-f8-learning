const express = require('express');
const router = express.Router();

// Khi la constructor function hoac class moi viet hoa chu cai dau
const newsController = require('../app/controllers/NewsController');
router.use('/:slug', newsController.show);

// The root route should be placed at the bottom because JS reads from top to bottom
router.use('/', newsController.index);

module.exports = router;
