var assert = require('assert');
var EmailValidate = require('../validators/emailValidator.js');

describe('EmailValidate', function() {

    describe('#validateEmail', function() {
        it('when email is not passed', function() {
            var data = {
                clientId: "Ariadni",
                amount: 200,
                buyer: {
                    name: "ariadni",
                    cpf: "01934232009",
                    email: ""
                },
              card : { 
                  cardType : "VISA" , 
                  number : "4640209505041587" , 
                  expiryMonth : "09" , 
                  expiryYear : "2020" , 
                  cvv : "126" 
              }
            }
              let message = EmailValidate.validateEmail(data);
              assert.notEqual(message, null, message)
        });
        it('when as invalid email is provided', function() {
            var data = {
                clientId: "Ariadni",
                amount: 200,
                buyer: {
                    name: "ariadni",
                    cpf: "01934232009",
                    email: "1111"
                },
              card : { 
                  cardType : "VISA" , 
                  number : "4640209505041587" , 
                  expiryMonth : "09" , 
                  expiryYear : "2020" , 
                  cvv : "126" 
              }
            }
              let message = EmailValidate.validateEmail(data);
              assert.notEqual(message, null, message)
        });
        it('when as valid email is provided', function() {
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
              let message = EmailValidate.validateEmail(data);
              assert.equal(message, null, message)
        }); 
    });

});