const siteRouter = require('./site');
const adminRouter = require('./admin');
const panelRouter = require('./panel');
const authMiddlewares = require('../middlewares/authmiddlewares');
function route(app){
    app.use('/', siteRouter);

    app.use('/login/admin', authMiddlewares.adminpanel,
                            authMiddlewares.requireadminlogin, 
                            adminRouter
    );
    app.use('/panel/admin', authMiddlewares.adminpanel,
                            authMiddlewares.requireadmin, 
                            panelRouter
    );
}

module.exports = route;