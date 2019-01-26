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

        var currentDate = new Date().getFullYear()

        if(data.card.expiryYear < currentDate) {
            return 'Year has passed'
        }

        var currentMonth = new Date().getMonth()

        if(data.card.expiryMonth < currentMonth) {
            return 'month has passed'
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
    }
}

module.exports = CreditValidate;