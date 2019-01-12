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
        '<h5>Pictet Technologies SA (Bloc D, level 4) ' +
        '3, Avenue de la Fonte ' +
        'L-4364 Esch-sur-Alzette</h5>' +
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
        [51.528308,-0.3817728], // UK
        [48.866667,2.333333], // France
        [-25.7583818,27.9177642], // South Africa
        [38.7436057,-9.230243], // Portugal
        [-15.7217175,-48.0774428], // Brazil
        [36.2620359,8.8016675], // Tunisia
        [-1.8900655,30.0257272], // Rwanda
        [33.9375411,-7.0810593], // Morocco
        [36.8189700, 10.1657900], // Tunisia
        [14.5964977,120.919796], // Philippines
        [39.9385466,116.1172785], // China
        [52.2326063,20.7810203], // Poland
        [46.9997836,28.7180944], // Moldavia
        [28.5272181,77.068901], // India
        [50.8549541,4.3053506], // Belgium
        [52.5065133,13.1445581], // Germany
        [49.604116,6.1284163], // Luxemburg
        [55.9411289,-3.3454196], // Scotland
        [36.7595915,2.9964704], // Algeria
        [41.909986,12.3959161] //Italy

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
