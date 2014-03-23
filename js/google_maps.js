// When the window has finished loading create our google map below
        google.maps.event.addDomListener(window, 'load', init);

        function init() {
            // Basic options for a simple Google Map
            // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions

            var LePinkPosition = new google.maps.LatLng(54.470364, 18.468421);
            var mapOptions = {
                // How zoomed in you want the map to start at (always required)
                zoom: 15,

                scrollwheel: false,

                // The latitude and longitude to center the map (always required)
                center: LePinkPosition, // New York

                // How you would like to style the map.
                // This is where you would paste any style found on Snazzy Maps.
                styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#a2daf2"}]},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"color":"#f7f1df"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"color":"#d0e3b4"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#bde6ab"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.medical","elementType":"geometry","stylers":[{"color":"#fbd3da"}]},{"featureType":"poi.business","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffe15f"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#efd151"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"black"}]},{"featureType":"transit.station.airport","elementType":"geometry.fill","stylers":[{"color":"#cfb2db"}]}]
            };


            // Get the HTML DOM element that will contain your map
            // We are using a div with id="map" seen below in the <body>
            var mapElement = document.getElementById('map');

            // Create the Google Map using out element and options defined above
            var map = new google.maps.Map(mapElement, mapOptions);

            var contentString = '<div id="content">'+
             '<div id="siteNotice">'+
              '</div>'+
              '<h3 id="firstHeading" class="firstHeading">LePink</h3>'+
              '<div id="bodyContent">'+
              'Dane Kontaktowe do LePink Gdynia. Wskazówki dojazdu, itp. <br>Mozna wrzucic takze zdjecie frontu (?)'
              '</div>'+
              '</div>';

            var infowindow = new google.maps.InfoWindow({
              content: contentString
            });

            // Marker dla oznaczenia miejsca na mapie - mozna pozniej dodac inna ikone, okno do wyswietlania informacji dotyczacych wskazowek dojazdu itp.
            var marker = new google.maps.Marker({
              position: LePinkPosition,
              map: map,
              title: 'LePink Gdynia'
            });

            google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map,marker);
            });

        }
