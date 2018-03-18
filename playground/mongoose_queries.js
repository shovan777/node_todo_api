const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = "5aacf904d1c77e266232cb93";
//
// if(!ObjectID.isValid(id)) {
//   console.log('id not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log("Todos", todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log("Todo", todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('id not found');
//   }
//   console.log("Todobyid: ", todo);
// }).catch((e) => console.log(e));
var id_user = '5aa91574a2e32f073a4a7cdd';
User.findById(id_user).then((todo) => {
  if (!todo) {
    return console.log('id not found');
  }
  console.log("Todobyid: ", todo);
}).catch((e) => console.log(e));
