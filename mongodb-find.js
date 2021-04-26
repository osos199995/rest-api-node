const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if (err){
       return  console.log('unable to connect mongodb server ');
            }
    console.log(' connected to mongodb server ');
db.collection('todos').find({completed:true}).toArray().then((docs)=>{
    console.log('todos');
    console.log(JSON.stringify(docs,undefined,2));
},(err)=>{
    if (err){
        return console.log('unable to find collection')
    }
});






    // db.close();
});