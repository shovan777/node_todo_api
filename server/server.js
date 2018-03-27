require('./config/config');

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');


var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  // console.log(req.body);
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc) => {
    res.send(doc);
  },(e) => {
    res.status(400).send(e);
  });
});

app.get('/todos',(req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    req.status(400).send(e);
  });
});

// GET /todos/123456
app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  // validate id
  if(!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
  Todo.findById(id).then((todo) => {
    if(todo) {
      res.send({todo});
    } else {
      res.status(404).send('id not found');
    }
  }, (e) => {
    res.status(400).send('there was an error');
  })


    //  respond with 404 send empty body

  // findbyID
});

app.delete('/todos/:id',(req, res) => {
  // get the id
  var id = req.params.id;

  if(!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findByIdAndRemove(id).then((todo) => {
    if(todo) {
      // res.send(`${{todo}} \nwas delted`);
      res.send({todo});
    } else {
      res.status(404).send();
    }
  }, (e) => {
    res.status(404).send();
  });
});

app.patch('/todos/:id', (req, res) => {
  var id = req.params.id;
  var body = _.pick(req.body,['text', 'completed']);

  if(!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  if(_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
    // getTime gives the values in milliseconds
  } else {
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
    if(!todo) {
      return res.status(404).send();
    }

    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  })


});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};

// var newTodo = new Todo({
//   text: 'Cook dinner'
// });)
//
// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (e) => {
//   console.log('Unable to save todo');
// });
// var newTodo = new Todo({
//   text: '  eedit this vid  '
// });
//
// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (e) => {
//   console.log('Unable to save todo', e);
// });



// var newUser = new User({
//   email: ' raj.shrestha777 @gmail.com '
// });
//
// newUser.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (e) => {
//   console.log('Unable to save todo', e);
// });
