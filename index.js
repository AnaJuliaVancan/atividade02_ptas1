const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send("Minha primeira página");
})

app.get('/blog', (req, res) => {
  res.send("Minha primeira página do blog");
})

app.get('/contatos', (req, res) => {
  res.send("Meu contato é anajuliavancan@gmail.com");
})

app.listen(port, () => {
  console.log('O servidor está funcionado xuxu beleza');
})