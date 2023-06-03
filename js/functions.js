window.onload = function () {
    var map;
    function initialize() {
        var mapProp = {
            center: new google.maps.LatLng(-23.403212386823512, -46.46457335077987),
            scrollwheel: false,
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        map = new google.maps.Map(document.getElementById("map"), mapProp);
    }

    function addMarker(lat, long, icon, content, click) {
        var latLng = { 'lat': lat, 'lng': long };

        var marker = new google.maps.Marker({
            position: latLng,
            map: map,
            icon: icon
        });

        var infoWindow = new google.maps.InfoWindow({
            content: content,
            maxWidth: 200,
            pixelOffset: new google.maps.Size(0, 20)
        });

        if (click == true) {
            google.maps.event.addListener(marker, 'click', function () {
                infoWindow.open(map, marker);
            });
        } else if (click == false) {
            infoWindow.open(map, marker);
        } else {
            infoWindow.open(map, marker);
        }

    }

    initialize();

    var conteudo = '<p style="color: black; font-size: 13px; padding: 10px 2%; text-align: center;' +
        'border-bottom:1px solid black;">Meu Endereço!</p>'
    addMarker(-23.403212386823512, -46.46457335077987, "http://maps.google.com/mapfiles/ms/icons/red-dot.png", conteudo, true);

    setTimeout(function () {
        map.panTo({ 'lat': -23.454338, 'lng': -46.533669 });
        map.setZoom(15);
    }, 4000);
}