var express = require('express'),
path=require('path'),
  app = express();

app.get('/internal', function(req, res) {
  res.sendFile(path.resolve(__dirname + '/../client/views/internal/index.html'));
});


app.use(express.static(__dirname + '/../client/static'));
app.use('/dependency', express.static(__dirname + '/../bower_components'));

app.listen(3000, function() {
  console.log('Listening...');
});
