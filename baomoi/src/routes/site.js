const express = require('express');
const router = express.Router();
const authMiddlewares = require('../middlewares/authmiddlewares');
const siteController = require('../controller/siteController');

router.get('/', siteController.index);
router.get('/timkiem', siteController.timkiem);
router.get('/:theloai', siteController.theloai);
router.get('/logout', siteController.logout);

module.exports = router;