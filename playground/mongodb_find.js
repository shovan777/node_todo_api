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


  // db.collection('Todos').find({
  //     _id: new ObjectID("5aa7878afedadf5b12f79194")
  //   })
  //   .toArray().then((docs) => {
  //     console.log('Todos');
  //     console.log(JSON.stringify(docs, undefined, 2));
  //   }, (err) => {
  //     console.log('Unable to fetch todos', err);
  //   })

  db.collection('Users').find({name: 'Shovan'}).toArray().then((docs) => {
    console.log("Users");
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch the Users', err);
  });

  client.close();
});
