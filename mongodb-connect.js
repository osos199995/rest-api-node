const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if (err){
       return  console.log('unable to connect mongodb server ');
            }
    console.log(' connected to mongodb server ');
db.collection('todos').insertOne({
    'text':'hello from the other side',
    'completed':false
},(err,result)=>{
    if (err){
        return console.log('unable to inser collection')
    }else {
        console.log(JSON.stringify(result.ops,undefined,2))
    }
});

db.collection('users').insertOne({
   name:'mohamed',
   age:'26',
   location:'cairo'
},(err,res)=>{
    if (err){
        return console.log('canot insert user ');
    }else{
        console.log(JSON.stringify(res.ops,undefined,2))
    }


});

    db.close();
});