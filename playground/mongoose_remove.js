const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => console.log(result));

// Todo.findOneAndRemove({})
// Todo.findByIdAndRemove

// Todo.findByIdAndRemove('5ab49f77ca0026b9fd86e273').then((todo) => {
//   console.log(todo);
// });

Todo.findOneAndRemove({_id: '5ab4a320a5d9802369fcbca8'}).then((todo) => console.log(todo));
