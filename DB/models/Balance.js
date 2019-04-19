const mongoose = require('mongoose');
const {
  Schema
} = mongoose;

const balanceSchema = new Schema({
  user_id: Number,
  balance: Number,
});

module.exports = mongoose.model('Balance', balanceSchema, 'Balance');