var express = require('express')
var app = express()
var path = require('path');

app.set('port', (process.env.PORT))

app.set('views', path.join(__dirname, '/gh-pages'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '/gh-pages')));

app.get('/', function (req, res) {

  res.render('index', { title: 'Gitbook' });
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))

})