var express = require('express'),
	app		= express();
	
app.get('/internal',function(req, res){  
      res.sendFile(__dirname + '/client/views/internal/index.html');
});

app.get('/external',function(req, res){   
      res.sendFile(__dirname + '/client/views/external/index.html');
});

app.use(express.static(__dirname + '/client/static'));
app.use('/dependency', express.static(__dirname + '/bower_components'));




app.listen(3000, function(){
	console.log('Listening...');
})