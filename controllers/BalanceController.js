const Balance = require('@models/Balance');

class BalanceController {

    async index(req, res) {
        const result = await Balance.findOne({
            "user_id": 1
        })

        res.send({
            result
        })
    }
}

module.exports = new BalanceController();