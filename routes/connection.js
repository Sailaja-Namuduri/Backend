const res = require('express/lib/response');
var mongo=require('mongodb')

function getConnection(res,cb){
 var url='mongodb://localhost:27017';
 var mongoClient=mongo.MongoClient;
 mongoClient.connect(url,function(err,server){
    if(err){
        res.send('db con error')
    }else{
       var db=  server.db('school')
       cb(db)
    }
 })
}

module.exports=getConnection