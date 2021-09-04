const Account = require('../database/models/account')

module.exports = {
    register(req, res) {
        const newAcc = new Account({
            username: 'Piotrek222',
            password: '222',
            email: 'jdjd'
        })
        
        newAcc.save().then(() => {
            console.log('Zarejestrowano')
        })
        
    }
}