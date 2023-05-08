const express = require('express');
const app = express();


const testDate = require('./middleware')


app.set('view engine', 'ejs');

app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

app.use(testDate)


app.get('/', (req, res) => {
    res.render('home');
  });
 
app.get('/services', (req, res) => {
    res.render('services');
  });

app.get('/contact', (req, res) => {
    res.render('contact');
  });


  app.listen(3000,()=>console.log('Server listening on port 3000'))