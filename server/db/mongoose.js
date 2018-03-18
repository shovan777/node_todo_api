var mongoose = require('mongoose');
// why did he make a mongoose variable here and not a constant

mongoose.Promise = global.Promise;
var username = 'raj778';
var password = 'r@j777';

var connectPath = `mongodb://${username}:r%40j777@ds117719.mlab.com:17719/todoapp`;
// connectPath = null;
mongoose.connect(connectPath || 'mongodb://localhost:27017/TodoApp');
module.exports = {mongoose};
