const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// categories => field => {'type', 'color}
const categories_model = new Schema({
    type: {type: String, default: "Food"},
    color: {type: String, default: "#fcbe44"}
});

// transaction => {'name', 'type', 'amount', 'date'}
const transaction_model = new Schema({
   name: {type: String, default: "Anonymous"},
   type: {type: String, default: "Food"},
   amount: {type: Number},
   date: {type: Date, default: Date.now} 
});

const Categories = mongoose.model('categories', categories_model);
const Transaction = mongoose.model('transaction', transaction_model);

exports.default = Transaction;
module.exports = {
    Categories,
    Transaction
}