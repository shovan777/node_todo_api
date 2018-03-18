var mongoose = require('mongoose');
// why did he make a mongoose variable here and not a constant

mongoose.Promise = global.Promise;

var connectPath = 'mongodb://raj778:r@j777@ds117719.mlab.com:17719/todoapp';
mongoose.connect(connectPath || 'mongodb://localhost:27017/TodoApp');
module.exports = {mongoose};
