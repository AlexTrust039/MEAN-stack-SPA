var Auto = require('../models/auto');


module.exports = function(router){

	router.post('/auto', function(req, res){

		var car = new Auto;

		car.model = req.body.model;
		car.year = req.body.year;
		car.gearbox = req.body.gearbox;
		car.size = req.body.es;
		car.price = req.body.price;
		car.about = req.body.about;
		
		if (req.body.model == null || req.body.model == '' || req.body.year == null || req.body.year == '' || 
			req.body.gearbox == null || req.body.gearbox == '' || req.body.es == null || req.body.es == '' || 
			req.body.price == null || req.body.price == '' || req.body.about == null || req.body.about == ''){
				res.json({ success: false, message: 'ОШИБКА! Не все поля заполнены!'});
			} else {
				car.save(function(err){
				if(err){
					res.send(err);
				} else {
					res.json({ success: true, message: 'Автомобиль успешно добавлен в каталог'});
			    }
			});
		}
	});

	router.get('/get', function(req, res){
		
		Auto.find(null, function(err, cars){
			if (err) {
				res.send(err);
			} else {
				res.json(cars);
			}
		});
	});
	return router;
}