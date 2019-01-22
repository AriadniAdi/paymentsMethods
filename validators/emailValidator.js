var email = require("email-validator");

class EmailValidator {
    static validateEmail(data) {
        if(!data.buyer.email) {
            return 'Missing buyer email';
        }
        var emailValidator = email.validate(data.buyer.email);
        if(emailValidator === false) {
            return 'invalid email';
        }
        return;
    }
}

module.exports = EmailValidator;