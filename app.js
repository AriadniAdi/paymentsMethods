const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const paymentValidator = require("./validators/paymentValidator.js");
const BoletoProvider = require("./src/boletoProvider.js");
const port = 3000;

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.post('/pay/credit', function (req, res) {
  const messages = paymentValidator.validateCredit(req.body);
  console.log(messages);
  if(messages.length > 0) {
    res.send(404, { message: messages.join(",")});
    return;
  }
  res.send('Got a POST request  ' + req.body.buyer.name)
})

app.post('/pay/boleto', function (req, res) {
  const messages = paymentValidator.validateBoleto(req.body);
  if(messages.length > 0) {
    res.send(404, { message: messages.join(",")});
    return;
  }
  res.send({ "boleto": new BoletoProvider().generateBoleto(req.body.amount)});
})