const express= require('express');
//rec de router
const router =express.Router(); 
//rec de model
const Blogpost=require('../model/blogpost');


//
router.get('/ping',(req,res)=> {res.status(200).json({msg:'Bonjour Chadi_baghdadi',date:new Date()});});



// POST: instance de  model Blogpost pour faire post
router.post('/blog-posts',(req,res)=>{console.log('req.body',req.body);const blogpost= new Blogpost(req.body);blogpost.save((err,blogpost)=>{if(err){return res.status(500).json(err);}res.status(201).json(blogpost);});});

// GET : model  Blogpost  pour  recup les donnees
router.get('/blog-posts',(req,res)=>{Blogpost.find().sort({'createdOn':-1}).exec().then(blogPosts=>res.status(200).json(blogPosts)
).catch(err=>res.status(500).json({message:'blog posts not found :(',erro:err}));});

//rec by id 
router.get('/blog-posts/:id',(req,res)=>{const id=req.params.id; Blogpost.findById(id).then(blogPosts=>res.status(200).json(blogPosts)
).catch(err=>res.status(500).json({message:`blog post with id ${id} not found`,erro:err}));});


//delete by id

router.delete('/blog-posts/:id',(req,res)=>{const id=req.params.id;Blogpost.findByIdAndDelete(id,(err,blogpost)=>{if(err){return res.status(500).json(err);
}
res.status(202).json({msg:`blog post with id ${blogpost._id} deleted`});});});

//export pour faire l import
module.exports=router;