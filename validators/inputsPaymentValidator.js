class InputsPaymentValidator {
    static validateBuyerInputs(data) {
        if(!data.buyer.name) {
            return 'Missing buyer name';
        }
        if(!data.amount) {
            return 'Missing amount';
        }
        if(data.amount <= 0) {
            return 'Invalid amount'
        }
    }
}

module.exports = InputsPaymentValidator;