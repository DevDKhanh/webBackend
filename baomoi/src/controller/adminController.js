const Admin = require('./model/admin');
const { mutipleMongooseToObject } = require('../ulti/mongoose');
const { mongooseToObject } = require('../ulti/mongoose');

class AdminController{
    login (req, res ,next) {
        const title = 'Đăng nhập hệ thống quản lí'
        res.render('admin/login', {title})
    }

    login_post(req, res ,next) {
        const name = req.body.name;
        const pass = req.body.pass
        if (name ===''||pass===''){
            const msg ='Vui lòng nhập đầy đủ!';
            res.render('admin/login',{msg});
            return;
        }else {
            Admin.findOne({name: name, password: pass})
            .then(data=>{
                if(data){
                    res.cookie('admin', data._id,{
                        signed: true
                    });
                    res.redirect('/panel/admin');
                }else{
                    const msg ='Tài khoản hoặc mật khẩu không chính xác!';
                    res.render('admin/login', {msg});
                }
            });
        }
    }
}

module.exports = new AdminController();