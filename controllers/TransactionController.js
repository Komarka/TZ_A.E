const Transaction = require('@models/Transaction');
const Balance = require('@models/Balance');


class TransactionController {

    async getTransactions(req, res) {
        const transactions = await Transaction.find({
            "user_id": 1
        })

        res.json({
            transactions
        })
    }
    async debit(req, res) {
        const {
            type,
            amount
        } = req.body;


        const debitBalance = await Balance.findOneAndUpdate({
            balance: {
                $gte: amount
            },
            "user_id": 1,
        }, {
            $inc: {
                "balance": -amount
            }
        }, {
            new: true
        })

        if (debitBalance === null) {
            await new Transaction({
                ...req.body,
                canceled: true
            }).save();
        } else {
            await new Transaction(req.body).save();
        }

        res.json({
            debitBalance
        })
    }

    async credit(req, res) {

        const {
            type,
            amount
        } = req.body;

        const creditTransaction = await new Transaction(req.body).save();

        const creditBalance = await Balance.findOneAndUpdate({
            "user_id": 1,
        }, {
            $inc: {
                "balance": amount
            }
        }, {
            new: true
        })


        res.json({
            creditBalance
        })
    }
}

module.exports = new TransactionController();