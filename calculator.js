// Dit bestand is uiteindelijk niet meer gebruikt.

function chooseDistance() {
    var distance = '';
    var nameDistance = '';
    // Switch 1: Keuze uit diameter van Mars, kortste afstand tot de aarde (0,557*10^8 km) en langste afstand tot de aarde (4,013*10^8 km)
    switch(clicked_id) { 
        case 'shortest':
            distance = '55700000';
            nameDistance = 'Shortest distance to Mars';
            break;
        case 'longest':
            distance = '401300000';
            nameDistance = 'Longest distance to Mars';
            break;
        default:
            distance = '6794000';
            nameDistance = 'Diameter of Mars';
    }
}

// Switch 2: Keuze uit eenheden: Jaar/reistijd, km/m, miles, afstandseenheid lengte v. Starship, afstandseenheid lengte v.e. mens
function calcDistance(clicked_id) {
    var unit = '';
    switch(clicked_id) {
        case 'kilometers':
            unit = '';
            break;
        case 'miles':
    }
}