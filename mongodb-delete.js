const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=> {
    if (err) {
        return console.log('unable to connect mongodb server ');
    }
    console.log(' connected to mongodb server ');

// delete many
// db.collection('todos').deleteMany({completed:false}).then((result)=>{
//     console.log(result);
//     });
// delete one

    // db.collection('todos').deleteOne({completed:true}).then((result)=>{
    //     console.log(result);
    // });

//find and delete

    db.collection('todos').findOneAndDelete({completed:true}).then((result)=>{
        console.log(result);
    });
    // db.close();
});