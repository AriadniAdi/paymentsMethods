# API - PaymentMethods
Api for payments

## Funcionalities
* Payment by bank transfer
* Payment by credit card


## Validations
Only card types (uppercase and format) are allowed:

* VISA,
* MASTERCARD,
* AMERICANEXPRESS,
* DINERSCLUB
* JCB

* Credit card type must be valid.
* Does not accept card expired.
* CVV must be valid.
* All json values (of ticket or credit card) must be filled.

## Language

* JavaScript

## Execution

## Request
 * Node.js
``npm install``

## Enviroment configuration
 
1. On the terminal open the server folder inside the project root. And run:
2. `` npm install`` for installation of tdd mocha tests.

## To run the unit tests
1. On the terminal open the server folder inside the project root. And run:<br>
2.`` npm test`` 

## To run the project
1. On the terminal open the server folder inside the project root. And run:
2. `` node app.js``

# API - endpoints

## Pay
## Url: ```http://localhost:3000/pay```
### Method: ```POST```

## CREDIT CARD:
### Url: ```http://localhost:3000/pay/card```
### Request

**body**:	

~~~json
{
	"client_id": 2,
	"amount": 200,
	"buyer": {
		"name": "ariadni",
		"email": "ariadni@gmail.com",
		"cpf": "02842054008"
	},
 	"card" : { 
    	"cardType" : "VISA" , 
    	"number" : "4111111111111111" , 
    	"expiryMonth" : "03" , 
    	"expiryYear" : "2100" , 
    	"cvv" : "123" 
	}
}
~~~

### Response success
**http status**: 200

**response body**: 

~~~json
{
	"success": true
}
~~~

### Response Fail
**http status**: 404....

**response body**: 

~~~json
{
	"message": "validation error"
}
~~~

## BOLETO:
### Url: ```http://localhost:3000/pay/boleto```
### Request
**body**:	

~~~json
{
	"client_id": 2,
	"amount": 200,
	"buyer": {
		"name": "ariadni",
		"email": "ariadni@gmail.com",
		"cpf": "02842054008"
	}
}
~~~

### Response success
**http status**: 200

**response body**: 

~~~json
{
	"barcode": "321321312.321312312.312321.321.321.321.32.13.21"
}
~~~
