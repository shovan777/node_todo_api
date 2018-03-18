const {
  MongoClient,
  ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('unable to connect to mongo database');
  }
  console.log('connected to mongodb server');
  const db = client.db('TodoApp');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("5aa8c8a41bc7e1d7016fe0a6")
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((res) => {
  //   console.log(res);
  // });
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5aa8d8321bc7e1d7016fe345")
  }, {
    $set: {
      name: 'Piccasso'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((res) => {
    console.log(res);
  });


  client.close();
});
