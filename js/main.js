'use strict'

var gMap, markers = [];

init();

function init() {
    renderMap();
}

function onMyLocation() {
    navigator.geolocation.getCurrentPosition(showLocation);
}

function renderMap(lat = 29.579811, lng = 34.940733) {
    gMap = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat,
            lng
        },
        zoom: 5
    });

    gMap.addListener('click', function (ev) {
        console.log(ev)
        var place = prompt("Please enter your name", "New Place");
        if (place != null) {
            saveLocation(place, {lat: ev.latLng.lat() ,lng: ev.latLng.lng()})
            //add.lat() , .lan()
            placeMarker(ev.latLng, place)
            // gLocations.push(place, event.latLng)  
        }

        renderListLocation()
    });
}


function showLocation(position) {
    initMap(position.coords.latitude, position.coords.longitude);
    gMap.setZoom(15);
}



function placeMarker(latLng, title = 'New Place') {
    var marker = new google.maps.Marker({
        position: latLng,
        map: gMap,
        title: title,
    });
    markers.push(marker)
    return marker
}


function renderListLocation() {
    var locationsToRender = getLocationToRender();

    console.log(locationsToRender);
    
    var $elTable = $('.locations-list-container')
    $elTable.empty();

    for (var i = 0; i < locationsToRender.length; i++) {
        let LocationPreview = new LocationPreview(locationsToRender[i])
        const elTR = LocationPreview.render();
        $elTable.append(elTR)
    }
}





