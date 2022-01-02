const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;
mongoose.plugin(slug);
const admins = new Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    date2: {type: String, default: Date.now}
}, 
{
    timestamps:true,
});
module.exports = mongoose.model('admins', admins);