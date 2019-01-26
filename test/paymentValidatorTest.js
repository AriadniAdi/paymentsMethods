var assert = require('assert');
const InputsPaymentValidator = require('../validators/inputsPaymentValidator.js');

describe('InputsPaymentValidator', function() {

  describe('#validateBuyerInputs', function() {
    context('When as invalid payment datas', function() {
      it('when amount is not passed', function() {
        var data = {
            clientId: "Ariadni",
            amount: "",
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
        let message = InputsPaymentValidator.validateBuyerInputs(data);
        assert.notEqual(message, null, message)
      });
      it('when invalid amount is passed', function() {
        var data = {
            clientId: "Ariadni",
            amount: 00,
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
        let message = InputsPaymentValidator.validateBuyerInputs(data);
        assert.notEqual(message, null, message)
      });
  });
  context('When as valid payment datas is provided', function() {
    it('when valid amount is passed', function() {
        var data = {
          clientId: "Ariadni",
          amount: 200,
          buyer: {
              name: "ariadni",
              cpf: "02842054008",
              email: "ww@www.com"
          },
        card : { 
            cardType : "VISA" , 
            number : "4640209505041587", 
            expiryMonth : "09" , 
            expiryYear : "2020" , 
            cvv : "126"
        }
      }
        let message = InputsPaymentValidator.validateBuyerInputs(data);
        assert.equal(message, null, message)
      });
  })
});
});