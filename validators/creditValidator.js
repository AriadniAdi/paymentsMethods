var CreditCard = require('credit-card');

class CreditValidate {
    static validateCreditCard(data) {

        if(!data.card.cardType) {
            return 'Missing card type';
        }
        if(!data.card.number) {
            return 'Missing card number';
        }
        if(!data.card.expiryMonth) {
            return 'Missing expiry month';
        }
        if(!data.card.expiryYear) {
            return 'Missing expiry year';
        }

        data.card["cardType"] = data.card["cardType"].toUpperCase();

        if(!['MASTERCARD', 'VISA', 'AMERICANEXPRESS', 'JBC', 'DINERSCLUB'].includes(data.card.cardType)) {
            return 'invalid card type'
        }

        var validation = CreditCard.validate(data.card)

        if(!validation.validCvv) {
            return 'invalid ccv';
        }
        if(!validation.validCardNumber) {
            return 'invalid card number'
        }
        if(!validation.validExpiryMonth) {
            return 'invalid expiry month'
        }
        if(!validation.validExpiryYear) {
            return 'invalid expiry year'
        }
    }
}

module.exports = CreditValidate;