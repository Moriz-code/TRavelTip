var gLocations = [], gId = 1;
var markers = [];

function saveLocation(name, pos) {
    var newLocation = {
        id: gId++,
        name,
        pos,
        weather: 'sunny'
    }
    gLocations.push(newLocation)
}

function getLocationToRender() {
    // var locations = loadFromStorage('gPlaces', gPlaces)
    return gLocations
}
