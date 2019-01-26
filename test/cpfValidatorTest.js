var assert = require('assert');
var CpfValidator = require('../validators/cpfValidator.js');

describe('CpfValidate', function() {

    describe('#validateCpf', function() {
        it('when cpf is not passed', function() {
            var data = {
                clientId: "Ariadni",
                amount: 200,
                buyer: {
                    name: "ariadni",
                    cpf: "",
                    email: "ww@www.com"
                },
              card : { 
                  cardType : "VISA" , 
                  number : "4640209505041587" , 
                  expiryMonth : "09" , 
                  expiryYear : "2020" , 
                  cvv : "126" 
              }
            }
              let message = CpfValidator.validateCpf(data);
              assert.notEqual(message, null, message)
        });
        it('when as invalid cpf is provided', function() {
            var data = {
                clientId: "Ariadni",
                amount: 200,
                buyer: {
                    name: "ariadni",
                    cpf: "11111",
                    email: "ww@www.com"
                },
              card : { 
                  cardType : "VISA" , 
                  number : "4640209505041587" , 
                  expiryMonth : "09" , 
                  expiryYear : "2020" , 
                  cvv : "126" 
              }
            }
              let message = CpfValidator.validateCpf(data);
              assert.notEqual(message, null, message)
        });
        it('when as valid cpf is provided', function() {
            var data = {
                clientId: "Ariadni",
                amount: 200,
                buyer: {
                    name: "ariadni",
                    cpf: "01934232009",
                    email: "ww@www.com"
                },
              card : { 
                  cardType : "VISA" , 
                  number : "4640209505041587" , 
                  expiryMonth : "09" , 
                  expiryYear : "2020" , 
                  cvv : "126" 
              }
            }
              let message = CpfValidator.validateCpf(data);
              assert.equal(message, null, message)
        }); 
    });

});