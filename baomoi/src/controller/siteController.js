const { mutipleMongooseToObject } = require('../ulti/mongoose');
const { mongooseToObject } = require('../ulti/mongoose');
const News = require('./model/posts')

class SiteController{

    index(req, res, next){
        const title = 'Trang Chủ';
        News.find({})
        .sort({date: -1})
        .skip(0)
        .limit(8)
        .then(newsupdate => {
            News.find({})
            .sort({date: -1})
            .skip(8)
            .limit(3)
            .then(newright => {
                News.find({})
                .sort({date: -1})
                .skip(12)
                .limit(4)
                .then(newleft => {
                    News.countDocuments()
                    .then(num => {
                        var randomnews = Math.floor(Math.random()*num);
                        News.find({})
                        .sort({date: -1})
                        .skip(randomnews)
                        .limit(1)
                        .then(newsfirst => {
                            res.render('home', {title,
                            newsupdate: mutipleMongooseToObject(newsupdate),
                            newright: mutipleMongooseToObject(newright),
                            newleft: mutipleMongooseToObject(newleft),
                            newsfirst: mutipleMongooseToObject(newsfirst),
                            });
                        });
                    });
                })
            }) 
        }) 
    }

    theloai(req, res){
        News.find({slug: req.params.theloai})
        .then(data => {
            News.countDocuments({slug: req.params.theloai})
            .then(num => {
                if (num >  0) {
                    var title = data[0].category;
                }
                else {
                    var title = 'Chưa có nội dung cho mục nào';
                }
                res.render('theloai', {title, num, data: mutipleMongooseToObject(data)})
            })
        })
    }

    timkiem(req, res){
        const tukhoa = req.query.key;
        News.find({ $text: { $search: "\""+tukhoa+"\""}})
        .then(data => {
            News.countDocuments({$text: { $search: "\""+tukhoa+"\""}})
            .then(num => {
                if (num >  0) {
                    var title = `${num} kết quả với từ khóa: "${tukhoa}" `;
                }
                else {
                    var title = 'Không tìm thấy nội dung yêu cầu';
                }
                res.render('theloai', {title, num, data: mutipleMongooseToObject(data)})
            })
        })
    }  

    logout(req, res){
        res.clearCookie('admin');
        res.redirect('/');
    }     
}

module.exports = new SiteController();