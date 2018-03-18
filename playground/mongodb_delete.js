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

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((res) => {
  //   console.log(res);
  // });
  db.collection('Users').deleteMany({name: "Shovan"}).then((res) => {
    console.log(res);
  });

  // deleteOne
  // only deletes the first one that matches the criteria then stops
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((res) => {
  //   console.log(res);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((res) => {
  //   console.log(res);
  // });
  // db.collection('Users').findOneAndDelete({_id: new ObjectID("5aa8d8441bc7e1d7016fe347")}).then((res) => {
  //   console.log(res);
  // });


  client.close();
});
