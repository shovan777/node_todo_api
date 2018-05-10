const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcryptjs');

var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true, //removes leading and trailing spaces
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: `{VALUE} is not a valid email`
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  tokens: [{
    access: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  }]
});

UserSchema.methods.toJSON = function () {
  var user = this;
  var userObject = user.toObject();

  return _.pick(userObject, ['_id', 'email']);
};

UserSchema.methods.generateAuthToken = function () {
  var user = this;
  var access = 'auth';
  var token = jwt.sign({_id: user._id.toHexString(), access}, '123').toString();
  user.tokens = user.tokens.concat([{access, token}]);

  return user.save().then(() => {
    return token;
  });
};

UserSchema.statics.findByToken = function (token) {
   var User = this;
   var decoded;

   try {
     decoded = jwt.verify(token, '123');
   } catch (e) {
     // return new Promise((resolve, reject) => reject());
     // below code is same as above
     return Promise.reject();
   }

   return User.findOne({
     // below quotes are required because there are dots in properties
     '_id': decoded._id,
     'tokens.token': token,
     'tokens.access': 'auth'
   });
};

UserSchema.pre('save', function (next) {
  var user = this;
  if (user.isModified('password')) {
    // user.password =
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, (err, hash) => {
        user.password = hash;
        next();
      });
    });
    // next();
  } else {
    next();
  }
});

var User = mongoose.model('User', UserSchema);

module.exports = {User};
