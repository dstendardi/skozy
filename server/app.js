var restify = require("restify");
var request = require("request");
var async   = require("async");

var server = restify.createServer();

/**
 * checks connectivity to graph database
 */
server.get('/healthchecks/rexster', function(req, res) {
  request.get({"url": "http://192.168.1.2:8182/graphs", json:true}, function(err, result) {
    res.send(err || result.body);

  });
});

/**
 * checks connectivity to elasticsearch
 */
server.get('/healthchecks/es', function(req, res) {
  request.get({"url": "http://192.168.1.3:9200", json:true}, function(err, result) {
    res.send(err || result.body);
  });
});


server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});


