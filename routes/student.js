
var express = require('express');
const res = require('express/lib/response');
var mongo=require('mongodb')
var router = express.Router();
var getConnection=require('./connection')

router.post('/reg-std',function(req,res,next){

    //take the data as part req 

    var data=req.body.data

    //connect with db 
    getConnection(res,function(db){
        var collection=db.collection('students')
        collection.insertOne(data,function(e,s){
           if(e){
               res.send(e)
           }else{
               res.send(s)
           }
        })
    })
   
})

router.post('/login',function(req,res,next){
   var data= req.body.data
   getConnection(res,function(db){
    var collection=db.collection('students')
    collection.find(data).toArray(function(e,s){
         if(e){
             res.send(e)
         }else{
             res.send(s)
         }
    })
   })
  
})

router.get('/get-std',function(req,res,next){
       var user= req.query.uid;
       var data={
           uid:user
       }
       getConnection(res,function(db){
           var collection=db.collection('students')
           collection.find(data).toArray(function(e,s){
            if(e){
                res.send(e)
            }else{
                res.send(s)
            }
       })
       })
})

router.put('/update-std/:uid',function(req,res,next){
      var data=req.body.data
      var user=req.params.uid 
      console.log(data)
      console.log(user)
      getConnection(res,function(db){
           var collection=db.collection('students');
           collection.updateOne({uid:user},{$set:data},function(e,s){
              if(e){
                  res.send(e)
              }else{
                  res.send(s)
              }
           })
      })
})

router.delete('/delete-std',function(req,res,next){
    var uid=req.query.uid

    getConnection(res,function(db){
        var collection=db.collection('students')
        collection.deleteOne({uid},function(e,s){
            if(e){
                res.send(e)
            }else{
                res.send(s)
            }
        })
    })
})


module.exports = router;
