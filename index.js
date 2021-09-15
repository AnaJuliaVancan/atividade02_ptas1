const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.set ('view engine' , 'ejs');
app.engine ('html', require('ejs').renderFile);

app.get('/', (req, res) => {
  res.send("Minha primeira página");
});

app.get('/contatos', (req, res) => {
  res.send("Meu contato é anajuliavancan@gmail.com");
});

app.listen(port, () => {
  console.log('O servidor está funcionado xuxu beleza');
});