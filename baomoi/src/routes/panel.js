const express = require('express');
const router = express.Router();
const authMiddlewares = require('../middlewares/authmiddlewares');
const panelController = require('../controller/panelController');

router.get('/', panelController.index);
router.get('/post', panelController.postnews);
router.post('/post', panelController.postnews_post);
router.get('/delete/:id', panelController.deletenews);
router.get('/update/:id', panelController.updatenews);
router.post('/update/:id', panelController.updatenews_post);

module.exports = router;