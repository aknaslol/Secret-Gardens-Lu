
//Metodo que utiliza la api de google maps para mostrar el mapa y la ubicacion de la tienda.
function iniciarMap(){
    var coord = {lat:9.9879326 ,lng: -84.2447956};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 15,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });

        // Obtiene el servicio de direcciones de Google Maps
        var directionsService = new google.maps.DirectionsService();
        var directionsRenderer = new google.maps.DirectionsRenderer();
        directionsRenderer.setMap(map);
    
        // Define la ubicación de la tienda
        var tiendaLocation = new google.maps.LatLng(10.016177, -84.214103);
    
        // Define la solicitud de ruta
        var request = {
            origin: coord, // Ubicación actual
            destination: tiendaLocation, // Ubicación de la tienda
            travelMode: 'DRIVING' // Modo de viaje (puedes cambiarlo a 'WALKING' o 'BICYCLING' según sea necesario)
        };
    
        // Calcula la ruta
        directionsService.route(request, function(result, status) {
            if (status == 'OK') {
                // Muestra la ruta en el mapa
                directionsRenderer.setDirections(result);
            } else {
                window.alert('No se pudo calcular la ruta: ' + status);
            }
        });
    }

window.onload = iniciarMap;
