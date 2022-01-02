const express = require('express');
const router = express.Router();
const authMiddlewares = require('../middlewares/authmiddlewares');
const adminController = require('../controller/adminController');

router.get('/', adminController.login);
router.post('/', adminController.login_post);

module.exports = router;