# API - endpoints
# Pay
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
