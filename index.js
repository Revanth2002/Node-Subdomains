/*------------use lvh.me instead of localhost and C:\Windows\System32\drivers\etc\hosts for hosts in windows ----------------*/
var subdomain = require('express-subdomain');
var express = require('express');
var app = express();
var router = express.Router();
var v1Router = express.Router();
var v2Router = express.Router();

app.get('/', function(req, res) {
    res.send('Hello World from express local!');
})

app.get('/settings',function(req, res) {
    res.send('Hello World from express local settings!');
})

router.get('/', function (req, res) {
    res.send('Hello World!');
})

v1Router.get('/', function(req, res) {
  res.send("<h1>This is the endpoints in subdomain v1</h1>");
})

v2Router.get('/', function(req, res) {
    res.send("<h1>This is the endpoints in subdomain v2</h1>");
    })

app.use(subdomain('sub1', v1Router));
app.use(subdomain('sub2', v2Router));

app.use(subdomain('api', router));
app.listen(3000);