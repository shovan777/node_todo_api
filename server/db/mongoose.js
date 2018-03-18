var mongoose = require('mongoose');
// why did he make a mongoose variable here and not a constant

mongoose.Promise = global.Promise;
var connectPath, options;
//Check if we are on Heroku
if(process.env.PORT){
 connectPath = 'mongodb://raj778:<dbpassword>@ds117719.mlab.com:17719/todoapp';
 options= {
     auth: {
         user: 'raj778',
         password: 'r@j777'
     }
 }
}else{
 connectPath = "mongodb://localhost:27017/TodoApp";
 options = {}
}
mongoose.connect(connectPath, options);
module.exports = {mongoose};
