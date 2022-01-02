const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Schema = mongoose.Schema;

const postSchame = new Schema({
    namenews: { type: String, required: true },
    linkimg: { type: String, required: true },
    linknews: { type: String, required: true },
    category: { type: String, required: true },
    slug: { type: String, slug: "category" },
    date: {type:String, default: Date.now}
}, {
    timestamps:true,
});

module.exports = mongoose.model('posts', postSchame.index({'$**': 'text'}));