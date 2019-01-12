var style = [
    {
        "featureType": "all",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "weight": "2.00"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#9c9c9c"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#eeeeee"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#7b7b7b"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#46bcec"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#e1e1e1"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#070707"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    }
]

function initMap() {
    initMapLocation();
    initMapPeople();
}

// Initialize and add the map
function initMapLocation() {
    // The location of PTL
    var ptl = {lat: 49.5064768, lng: 5.9471731};
    // The map, centered on PTL
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 11.00,
            center: ptl,
            disableDefaultUI: true,
            styles: style
        });

    var contentString =
        '<div style="color: black"  id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1  id="firstHeading" class="firstHeading">Pictet Technologies</h1>'+
        '<div class="font" id="bodyContent">'+
        '<p>Pictet Technologies SA (Bloc D, level 4) ' +
        '3, Avenue de la Fonte ' +
        'L-4364 Esch-sur-Alzette</p>' +
        '</div></div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var marker = new google.maps.Marker({
        position: ptl,
        map: map,
        title: 'Pictet Technologies'
    });
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    }
    );

}

// Initialize and add the map
function initMapPeople() {
    // The location of PTL
    var center = {lat: 49.5064768, lng: 5.9471731};
    var bounds = new google.maps.LatLngBounds();


    // The map, centered on PTL
    var mapPeople = new google.maps.Map(
        document.getElementById('map-people'), {
            zoom: 3,
            center: center,
            disableDefaultUI: true,
            styles: style
        });


    var markers = [
        [51.503454,-0.119562],
        [48.866667,2.333333],
        [41.902784,12.496366],
        [38.736946,-9.142685],
        [-15.7797200,-47.9297200],
        [-30.5595,22.9375],
        [-1.9437057, 29.8805778],
        [33.5883100, -7.6113800],
        [36.8189700, 10.1657900],
        [16.566233, 121.262634],
        [35.6895000, 139.6917100],
        [50.0343700, 19.2103700],
        [46.9803875, 28.3896969],
        [20.595164, 78.963606]
    ];

    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(markers[i][0], markers[i][1]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: mapPeople
        });

    }

}
