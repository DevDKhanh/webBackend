const Admin = require('./model/admin');
const Posts = require('./model/posts')
const { mutipleMongooseToObject } = require('../ulti/mongoose');
const { mongooseToObject } = require('../ulti/mongoose');

class PanelController{
    index (req, res ,next) {
        const title = 'Trang quản lí';
        var page = req.query.page || 1;
        var perpage = 8;
        Posts.find({})
        .sort({date: -1})
        .skip((perpage*page)-perpage)
        .limit(perpage)
        .then(data => {
            Posts.countDocuments({})
            .then(num => {
            res.render('admin/panel', {title, data: mutipleMongooseToObject(data), num, perpage, page});
            })
        })
        
    }

    postnews (req, res ,next) {
        const title = 'Đăng bài mới';
        res.render('admin/post', {title});
    }

    postnews_post(req, res ,next) {
        const newPost = new Posts(req.body);
        newPost.save()
        res.redirect('/panel/admin')
    }

    updatenews (req, res ,next) {
        const title = 'Chỉnh sửa';
        Posts.findOne({_id: req.params.id})
        .then(data=> {
           res.render('admin/update', {title, data: mongooseToObject(data)}); 
        }) 
    }

    updatenews_post (req, res ,next) {
        Posts.updateOne({_id: req.params.id}, req.body)
        .then()
        res.redirect('/panel/admin');
    }

    deletenews (req, res ,next) {
        Posts.deleteOne({_id: req.params.id})
        .then() 
        res.redirect('/panel/admin');
    }
}

module.exports = new PanelController();