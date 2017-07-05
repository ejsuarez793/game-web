var express = require('express');
var router = express.Router();
var game_web = require("../couchdb.js");
//var app = require('../app').app;

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log(game_web);
  /*res.render('index', { title: 'Express' });*/
  /*var nano = require('nano')("http://localhost:5984");
  var game_web = nano.use('game-web');  */
  game_web.insert({crazy:true}, 'rabbit', function(err, body, header){
  	if(err){
  		console.log('[alice.insert]', err.message);
  		return;
  	}
  	console.log('you have inserted the rabbit');
  	console.log(body);
  });
  console.log("epale");
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ a: 1 }));
});

module.exports = router;
