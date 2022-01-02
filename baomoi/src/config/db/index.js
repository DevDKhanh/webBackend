const mongoose = require('mongoose');
async function connect() {
	try {
		await mongoose.connect('mongodb://localhost:27017/baomoi', {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log('Connect successfully!!!');
	} catch (error) {
		if (error) {
			console.log(error);
		}
		console.log('Connect failure!!!');
	}
}
module.exports = { connect };
