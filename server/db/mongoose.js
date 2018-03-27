var mongoose = require('mongoose');
// why did he make a mongoose variable here and not a constant

mongoose.Promise = global.Promise;
var username = 'raj778';
var encoded_user = encodeURIComponent(username);
var password = 'r@j777';
var encoded_pass = encodeURIComponent(password);
var connectPath = `mongodb://${encoded_user}:${encoded_pass}@ds117719.mlab.com:17719/todoapp`;
connectPath = encodeURIComponent(connectPath);

// mongoose.connect(connectPath || 'mongodb://localhost:27017/TodoApp');
// mongoose.connect(connectPath || process.env.MONGODB_URI);

var connectPath, options;
//Check if we are on Heroku
if(process.env.NODE_ENV !== 'test' && process.env.NODE_ENV !== 'development'){
 connectPath = "mongodb://ds117719.mlab.com:17719/todoapp";
 options= {
     auth: {
         user: username,
         password: password
     }
 }
}else{
 // connectPath = "mongodb://localhost:27017/TodoApp";
 connectPath = process.env.MONGODB_URI;
 options = {}
}

mongoose.connect(connectPath, options).then(() => console.log('sucessfully connected'),
(e) => {
  console.log('authentication error');
});

module.exports = {mongoose};
