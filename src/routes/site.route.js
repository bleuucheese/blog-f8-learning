const express = require('express');
const router = express.Router();

// Khi la constructor function hoac class moi viet hoa chu cai dau
const siteController = require('../app/controllers/SiteController');

router.use('/search', siteController.search);

// The root route should be placed at the bottom because JS reads from top to bottom
router.use('/', siteController.index);

module.exports = router;
