//conection for couchdb
var nano = require('nano')("http://localhost:5984");
var game_web = nano.use('game-web');  

module.exports = game_web;