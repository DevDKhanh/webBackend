const mongoose = require('mongoose');
async function connect(){
    try{
        await mongoose.connect('mongodb+srv://kimmchi:1234561@cluster0.tyyyq.mongodb.net/filmchichi?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
         });
        console.log("Connect successfully!!!");
    }catch (error) {
        console.log("Connect failure!!!");
    }
} 
module.exports = { connect };
