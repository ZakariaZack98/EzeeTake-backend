const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    min: [2, 'Minimum 2 charecters required'],
    unique: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  avatar: {
    type:String,
    trim: true,
  },
  password: {
    type:String,
    trim:true,
    required:true,
    min: [8, 'minimum length of password is 8'],
    max: [24, 'maximum length of password is 24']
  }
})

module.exports = mongoose.model.User || mongoose.model('User', userSchema);