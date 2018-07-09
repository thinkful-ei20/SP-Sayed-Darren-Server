'use strict'; 

const mongoose = require ('mongoose');

const userSchema = mongoose.Schema({

  username: {type: String, required:true},
  password: {type: String, required: true},
  list: Array

});

userSchema.set('toObject', {
  transform: function (doc,ret) {
    ret.id = red._id;
    delete ret._id;
    delete ret._v;
    delete ret.password;
  }
});

// userSchema.methods.validatePassword = function (password) {
//   return bcrypt.compare(password, this.password);
// };

// userSchema.statics.hashPassword = function (password) {
//   return bcrypt.hash(password, 10);
// };

module.exports = mongoose.model('User', userSchema);