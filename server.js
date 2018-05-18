var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = express.Router();
var appRoutes = require('./app/routes/routes')(router);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));
app.use(express.static(__dirname + '/public'))
app.use('/catalog', appRoutes);

mongoose.connect('mongodb://root:root@ds137089.mlab.com:37089/userstory', function(err){
	if (err) {
		console.log('DB unavailable')
	} else {
		console.log('Connected to the database')
	};
});

app.get('*', function(req, res){
	res.sendFile(__dirname + '/public/app/views/index.html')
})


app.listen(port, function(){
	console.log('sever started on port '+ port);
});