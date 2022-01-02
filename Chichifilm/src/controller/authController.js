const Post = require('./model/posts');
class AuthController{

    login(req, res){
        const title = 'Đăng nhập'
        res.render('auth/login', {title}) 
    }

    login_post(req, res){
    const name1 = req.body.name1;
    const pass = req.body.pass
        if (name1 ===''||pass===''){
            const msg ='Vui lòng nhập đầy đủ!';
            res.render('auth/login',{msg, erro_up: true});
            return;
        }else {
            Post.findOne({name1: name1,pass: pass})
            .then(data=>{
                if(data){
                    res.cookie('userId', data._id,{
                        signed: true
                    });
                    res.cookie('username', data.name1);
                    res.cookie('user_i', data._id);
                    res.redirect('/');
                }else{
                    const msg ='Tài khoản hoặc mật khẩu không chính xác!';
                    res.render('auth/login', {msg, erro_up: true});
                }
            });
        }
    }

    signup(req, res){
        const title = 'Đăng ký'
        res.render('auth/signup', {title}) 
    }

    signup_post(req, res){
        const title = 'Đăng ký';
        const { name_user, name1, pass, pass2} = req.body;
        if (name1 === ''|| name_user === ''||pass=== ''){
            const msg = 'Vui lòng nhập đầy đủ thông tin!';
            res.render('auth/signup',{msg, title , name_user, name1, erro_up: true});
            return;
        }
        if (name1.includes(" ")){
            const msg = 'Tên đăng nhập phải viết liền';
            res.render('auth/signup',{msg, title , name_user, erro_up: true});
            return;
        }
        if (name1.length < 4){
            const msg = 'Tên đăng nhập từ 4 kí tự trở lên';
            res.render('auth/signup',{msg, title , name_user, erro_up: true});
            return;
        }
        if (pass.length < 5 || pass.length >20 ){
            const msg = 'Mật khẩu gồm 5-20 kí tự';
            res.render('auth/signup',{msg, title , name_user, name1, erro_up: true});
            return;
       }
        if(pass == pass2){
            Post.findOne({name1: name1})
            .then(data=>{
            if(data){
                const msg = 'Tài khoản đã tồn tại!';
                res.render('auth/signup',{msg, title , name_user, erro_up: true});
                return;

            }else{
                let errors = [];
                if(!name1){
                    errors.push({ msg: 'Nhập tên tài khoản!' });
                }else{
                    const newPost = new Post({name1: name1, name_user: name_user, pass: pass});
                    newPost.save();
                    res.render('auth/signup',{success: true});
                    }
                    }
                });
        }
        else{
            const msg = 'Mật khẩu không trùng khớp!';
            res.render('auth/signup',{msg, name_user, name1, erro_up: true});
        }
    }
     
}

module.exports = new AuthController();