var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
// It department Schema 
var ITSchema =mongoose.Schema({
	userName:{
		type:String,
		required:true,
	  unique:true
	},
	password:{
		type:String,
		required:true
	},
  userType: {type: String, default: "A"},
});
//before save data
ITSchema.pre('save', function (next) {
  var itUser = this; 
   if (!this.isModified('password')) {
      return next();
    }  
  bcrypt.hash(itUser.password, 10, function (err, hash){
    if (err) {
      return next(err);
    }
    itUser.password = hash;
    next();
  })
});
//compare password methods
ITSchema.methods.comparePassword = function(password, fun) {
  bcrypt.compare(password, this.password, function(err, isMatch) {
    if (err) {
      fun(err)
    }       
      fun(null, isMatch);
    });
};
var ItDepartments =mongoose.model('ITDepartments',ITSchema);

module.exports = ItDepartments;