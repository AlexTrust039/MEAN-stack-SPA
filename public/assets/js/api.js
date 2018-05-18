        ymaps.ready(init);
        var myMap, 
            myPlacemark;

        function init(){ 
            myMap = new ymaps.Map("map", {
                center: [54.7052,20.4981],
                zoom: 17
            }); 
             myPlacemark = new ymaps.Placemark([54.7052,20.4981], {
                hintContent: '<img src="assets/css/img/koleso.jpg" height="20" width="120">',
                balloonContent: 'Центр продажи автомобилей'
            });
              myMap.geoObjects.add(myPlacemark);
        }