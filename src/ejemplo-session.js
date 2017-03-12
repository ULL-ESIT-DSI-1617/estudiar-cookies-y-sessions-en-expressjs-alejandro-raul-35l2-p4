var express = require('express'),
    app = express(),
    session = require('express-session');
app.use(session({
    secret: 'abcd1234',
    resave: true,
    saveUninitialized: true
}));

// Authentication and Authorization Middleware
var auth = function(req, res, next) {
  if (req.session && req.session.user === "peter" && req.session.admin)
    return next();
  else
    return res.sendStatus(401);
};

// Login endpoint
app.get('/login', function (req, res) {
  if (!req.query.username || !req.query.password) {
    res.send('login failed');    
  } else if(req.query.username === "peter" || req.query.password === "peter123") {
    req.session.user = "peter";
    req.session.admin = true;
    res.send("Se ha logueado con exito!");
  }
});

//Logout endpoint
app.get('/logout', function (req, res) {
  req.session.destroy();
  res.send("Se ha deslogueado con exito!");
});

//Get content endpoint
app.get('/content', auth, function (req, res) {
    res.send("Solo podrás visualizar el contenido una vez estes logueado.");
});

app.listen(8080);
console.log("Aplicación escuchando en: http://localhost:8080");