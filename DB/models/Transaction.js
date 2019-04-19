const mongoose = require('mongoose');
const {
  Schema
} = mongoose;

const transactionSchema = new Schema({
  user_id: {
    type: Number,
    default: 1
  },
  type: {
    type: String,
    enum: ['credit', 'debit'],
  },
  canceled: {
    type: Boolean,
    default: false,
  },
  amount: Number,
  createdAt: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('Transaction', transactionSchema, 'Transaction');