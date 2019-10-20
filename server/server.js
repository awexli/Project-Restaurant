const express = require('express');
const app = express();
var path = require('path');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

// For React deployment
app.use(express.static(path.join(__dirname, 'build')));

// Routes for react to hit on backend.
const indexRoute = require('./routes/index');
const userRoute = require('./routes/users');
const reserveRoute = require('./routes/reserve');

const port = process.env.PORT || 5000;


app.use('/', indexRoute);
app.use('/users', userRoute);
app.use('/reserve', reserveRoute);

// For React deployment
if(process.env.NODE_ENV === 'production') {
  app.get('/*', function (req, res) {
   	res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));