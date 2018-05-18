var mongoose = require('mongoose');

var autoSchema = mongoose.Schema({
	model: String,
	year: String,
	gearbox: String,
	size: String,
	price: String,
	about: String
});

module.exports = mongoose.model('auto', autoSchema);

