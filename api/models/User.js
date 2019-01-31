const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let User = new Schema({
  person_name: {
    type: String
  },
  person_email: {
    type: String
  },
  passeword: {
    type: String
  }
},{
    collection: 'user'
});

module.exports = mongoose.model('User', User);