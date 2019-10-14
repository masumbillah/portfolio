/****************************************
 START GOOGLE MAP
****************************************/
// Map options
function initialize() {
    var mapOptions = {
    zoom: 12,
    scrollwheel: false,
            styles: [{
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
            "color": "#e8e8e8"
        }, {
            "lightness": 15
        }]
    }, {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [{
            "color": "#f5f5f5"
        }, {
            "lightness": 20
        }]
    }, {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#ffffff"
        }, {
            "lightness": 15
        }]
    }, {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [{
            "color": "#ffffff"
        }, {
            "lightness": 30
        }, {
            "weight": 0.2
        }]
    }, {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [{
            "color": "#ffffff"
        }, {
            "lightness": 20
        }]
    }, {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [{
            "color": "#ffffff"
        }, {
            "lightness": 15
        }]
    }, {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [{
            "color": "#f5f5f5"
        }, {
            "lightness": 20
        }]
    }, {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [{
            "color": "#dedede"
        }, {
            "lightness": 20
        }]
    }, {
        "elementType": "labels.text.stroke",
        "stylers": [{
            "visibility": "on"
        }, {
            "color": "#ffffff"
        }, {
            "lightness": 16
        }]
    }, {
        "elementType": "labels.text.fill",
        "stylers": [{
            "saturation": 36
        }, {
            "color": "#333333"
        }, {
            "lightness": 40
        }]
    }, {
        "elementType": "labels.icon",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [{
            "color": "#f2f2f2"
        }, {
            "lightness": 20
        }]
    }, {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#fefefe"
        }, {
            "lightness": 20
        }]
    }],
    center: new google.maps.LatLng(23.8225865,90.3639197)
    };

    // Get map element from context page
    let map = new google.maps.Map(document.getElementById('ms-js-map'), mapOptions);

    //Set marker icon
    let marker = new google.maps.Marker({
            position: map.getCenter(),
            icon: './imgs/system/marker-icon.svg',
            map: map
        });
}

google.maps.event.addDomListener(window, 'load', initialize);
/****************************************
 END GOOGLE MAP
****************************************/