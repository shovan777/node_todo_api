var mongoose = require('mongoose');
// why did he make a mongoose variable here and not a constant

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
