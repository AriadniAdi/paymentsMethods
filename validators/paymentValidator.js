const emailValidator = require("./emailValidator.js");
const creditValidator = require("./creditValidator.js");
const cpfValidator = require("./cpfValidator.js");
const inputsPaymentValidator = require("./inputsPaymentValidator.js")

class PaymentValidator {
    static validateCredit(data) {
        return [
            emailValidator.validateEmail(data),
            creditValidator.validateCreditCard(data),
            cpfValidator.validateCpf(data),
            inputsPaymentValidator.validateBuyerInputs(data),
        ].filter((item) => item)
        .concat(PaymentValidator.validate(data))
    }

    static validateBoleto(data) { return PaymentValidator.validate(data) }

    static validate(data) {
        return [
            data.amount ? undefined : 'amount',
            data.clientId ? undefined : 'client id',
            
        ].filter((item) => item)
    }

}

module.exports = PaymentValidator;