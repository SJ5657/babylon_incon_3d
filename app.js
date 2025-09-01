const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, './client/views'));

app.use('/', (req, res) => res.render('index'));

app.listen(3233, () => console.log('app is running on 3233 port'));