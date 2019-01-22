const cpf = require('cpf');

class CpfValidator {
    static validateCpf(data) {
        if(!data.buyer.cpf) {
            return 'Missing cpf';
        }

        var isValidCpf = cpf.isValid(data.buyer.cpf);

        if(isValidCpf === false) {
            return 'Invalid cpf';
        } 
    }
}

module.exports = CpfValidator;