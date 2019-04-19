const BalanceController = require('@controllers/BalanceController');
const TransactionController = require('@controllers/TransactionController');

let bodyChecker = require('@middlwares/bodyChecker');


module.exports = (router) => {

  //balance
  router.get('/balance', BalanceController.index)

  //transactions
  router.get('/transactions', bodyChecker, TransactionController.getTransactions)
  router.post('/transaction/credit', bodyChecker, TransactionController.credit)
  router.post('/transaction/debit', bodyChecker, TransactionController.debit)

}