var assert = require('assert');
const Test = require('../validators/parseData.js');
const CreditValidate = require('../validators/creditValidator');

describe('ParseData', function() {

  describe('#jsonValidator', function() {
    context('when an invalid json is provided', function() {
     it('Check for data json', function() {
        const InvalidRepository = new Test('../test/resources/invalidData.json');
        assert.equal(InvalidRepository.jsonValidator().length, 0)
        });
    });
  });
});


describe('CreditValidate', function() {

  describe('#validateCreditCard', function() {
    context('when an invalid credit datas', function() {
      it('when not passed cardType', function() {
        var data = {
          clientId: "Ariadni",
          amount: 200,
          buyer: {
              name: "ariadni",
              cpf: "02842054008",
              email: "ww@www.com"
          },
        card : { 
            cardType : "" , 
            number : "4640209505041587" , 
            expiryMonth : "09" , 
            expiryYear : "2020" , 
            cvv : "126" 
        }
      }
        let message = CreditValidate.validateCreditCard(data);
        assert.notEqual(message, null, message)
      });
      it('when number card is not passed', function() {
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
            number : "" , 
            expiryMonth : "09" , 
            expiryYear : "2020" , 
            cvv : "126" 
        }
      }
        let message = CreditValidate.validateCreditCard(data);
        assert.notEqual(message, null, message)
      });
      it('when expiry month is not passed', function() {
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
            number : "4640209505041587" , 
            expiryMonth : "" , 
            expiryYear : "2020" , 
            cvv : "126" 
        }
      }
        let message = CreditValidate.validateCreditCard(data);
        assert.notEqual(message, null, message)
      });
      it('when not expiry year is not passed', function() {
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
            number : "4640209505041587" , 
            expiryMonth : "09" , 
            expiryYear : "" , 
            cvv : "126" 
        }
      }
        let message = CreditValidate.validateCreditCard(data);
        assert.notEqual(message, null, message)
      });
      it('when cvv is not passed', function() {
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
            number : "4640209505041587" , 
            expiryMonth : "09" , 
            expiryYear : "2020" , 
            cvv : "" 
        }
      }
        let message = CreditValidate.validateCreditCard(data);
        assert.notEqual(message, null, message)
      });
      it('error message from credit type', function() {
        var data = {
          clientId: "Ariadni",
          amount: 200,
          buyer: {
              name: "ariadni",
              cpf: "02842054008",
              email: "ww@www.com"
          },
        card : { 
            cardType : "Cartão inválido" , 
            number : "4640209505041587" , 
            expiryMonth : "09" , 
            expiryYear : "2020" , 
            cvv : "126" 
        }
      }
        let message = CreditValidate.validateCreditCard(data);
        assert.notEqual(message, null, message)
      });
      it('error message from invalid card number', function() {
        var yearExpired = new Date().getFullYear() -1
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
            number : "8888" , 
            expiryMonth : "09" , 
            expiryYear : yearExpired , 
            cvv : "126" 
        }
      }
      let message = CreditValidate.validateCreditCard(data);
      assert.notEqual(message, null, message)
      });
        var yearExpire = new Date().getFullYear() -1
      it('error message from year passed', function() {
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
            number : "4556759381887927" , 
            expiryMonth : '10' , 
            expiryYear : yearExpire , 
            cvv : "859" 
        }
      }
      let message = CreditValidate.validateCreditCard(data);
      assert.notEqual(message, null, message)
      });
      function validateMonthExpire() {
        var monthExpire = new Date().getMonth() -1
        if(monthExpire === -1) {
          monthExpire = 0
        }
        return monthExpire
      }
      it('error message from month passed', function() {
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
            number : "4556759381887927" , 
            expiryMonth :  validateMonthExpire(), 
            expiryYear : "2019" , 
            cvv : "859" 
        }
      }
      let message = CreditValidate.validateCreditCard(data);
      assert.notEqual(message, null, message)
      });
      it('error message from invalid cvv', function() {
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
            number : "4556759381887927" , 
            expiryMonth :  "02", 
            expiryYear : "2019" , 
            cvv : "8591" 
        }
      }
      let message = CreditValidate.validateCreditCard(data);
      assert.notEqual(message, null, message)
      });
      context('Validate corretly credit datas ', function() {
        it('when all data is valid', function() {
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
              number : "4556759381887927" , 
              expiryMonth :  "02", 
              expiryYear : "2019" , 
              cvv : "859" 
          }
        }
        let message = CreditValidate.validateCreditCard(data);
        assert.equal(message, null, message)
        });
      });
    });
  });
});