
const express= require('express');
const app=express();
//routeur:recuperer le routeur 
const api =require('./router/index');
//middleware
const cors =require('cors'); 
//base
const mongoose = require('mongoose');
const connection = mongoose.connection;  


//process.env.port  : configuration par defaut ou 3000
app.set('port',(process.env.port ||3000)); 

//middleware 
app.use(cors()); 


app.use('',api);

app.use((req,res)=>{const err= new Error('404-Not found!!!');err.status=404; res.json({ msg:'404-Not found!!!',err:err});});



//base : 
mongoose.connect('mongodb://localhost:27017/whiskycms', { useNewUrlParser: true });

//connection de type Connection:gestion des event : open et error
connection.on('error', (err) => 
{
	console.error(`Connection to MongoDB Error: ${err.message}`); 
});

connection.once('open', () => 
{console.log('Connected to MongoDB'); 

	app.listen(app.get('port'), () => {console.log(`Express server listening on port ${app.get('port')}`);});
});








