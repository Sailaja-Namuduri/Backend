var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/test-query-params',function(req,res,next){
   //take the data from req
   var n=req.query.name
   var l=req.query.loc

   res.send(`Hellow ${n} I am from ${l}`)
})

router.get('/test-path-params/:name/:loc',function(req,res,next){
   //take the data from req
   var n=req.params.name
   var l=req.params.loc

   res.send(`Hellow ${n} I am from ${l}`)
})

router.get('/test-headers',function(req,res,next){
   //take the data from req
   var n=req.headers.name
   var l=req.headers.loc

   res.send(`Hellow ${n} I am from ${l}`)
})

router.post('/test-req-body',function(req,res,next){
   //take the data from req
   var n=req.body.name
   var l=req.body.loc

   res.send(`Hellow ${n} I am from ${l}`)
})

module.exports = router;
