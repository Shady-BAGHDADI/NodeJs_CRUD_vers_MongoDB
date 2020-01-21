//pour crer un model : on a besoin de mongoose et Schema
const mongoose = require('mongoose'); //yet3emel m3a base

//Schema == constructor
const blogpostSchema = new mongoose.Schema({
	title: String,
	subTitle: String,
	image: String,
	content: String,
	createdOn: { type: Date, default: Date.now } //date de creation de type date
});
//export 5ater bech ne5dem bih fi router : index.js w nadilou bil isem 'Blogpost' !!!!
module.exports = mongoose.model('Blogpost', blogpostSchema);


//MODEL--ROUTER()-CONTROLLEUR , view fil angular