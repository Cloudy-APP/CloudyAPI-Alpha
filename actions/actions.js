const Account = require('../database/models/account')

module.exports = {
    async register(req, res) {
        const username = req.body.username
        const password = req.body.password
        const email = req.body.email

        let account
        try {
            account = new Account({ username, password, email})
            await account.save()
        } catch (err) {
            return res.status(422).json({ message:err.message })
        }
        res.status(201).json(account)
        
    },
    async show(req, res) {
        const doc = await Account.find({})
        console.log(doc)
        res.status(200).json(doc)
    }
}