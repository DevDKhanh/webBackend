module.exports.requireadmin = function(req, res, next){
    if (!req.signedCookies.admin){
        res.redirect('/login/admin');
        return;
    }
    next();
};

module.exports.requireadminlogin = function(req, res, next){
    if (req.signedCookies.admin){
        res.redirect('/panel/admin');
        return;
    }
    next();
};

module.exports.adminpanel = function(req, res, next){
        res.locals.admin = true;
    next();
};

