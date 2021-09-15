const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.get('/listagem', (req, res) => {
  res.render('listagem/index.ejs');
});

app.get('/noticia1', (req, res) => {
  res.render('noticia1/index.ejs');
});

app.get('/noticia2', (req, res) => {
  res.render('noticia2/index.ejs');
});

app.get('/noticia3', (req, res) => {
  res.render('noticia3/index.ejs');
});

app.get('/noticia4', (req, res) => {
  res.render('noticia4/index.ejs');
});

app.get('/noticia5', (req, res) => {
  res.render('noticia5/index.ejs');
});

app.get('/noticia6', (req, res) => {
  res.render('noticia6/index.ejs');
});

app.listen(port, () => {
  console.log('O servidor está funcionado que é uma belezinha!');
});