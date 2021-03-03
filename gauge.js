// Deze grafiek is gemaakt via Google Charts.

google.charts.load('current', {'packages':['gauge']});
google.charts.setOnLoadCallback(drawGauge);

var gaugeOptions = {min: 0, max: 4000, yellowFrom: 3000, yellowTo: 3500, redFrom: 3500, redTo: 4000, minorTicks: 6};    // Ik heb hierin alle getallen aangepast
var gauge;

function drawGauge() {
    gaugeData = new google.visualization.DataTable();
    gaugeData.addColumn('number', 'Speed');                                         // Ik heb hier het label in de gauge veranderd naar Speed
    gaugeData.addColumn('number', 'Engine temp.');                                  // Ik heb hier het label in de gauge veranderd naar Engine temp.
    gaugeData.addRows(2);
    gaugeData.setCell(0, 0, 1150);                                                  // Ik heb hier het getal voor de snelheid veranderd naar 1150
    gaugeData.setCell(0, 1, 2000);                                                  // Ik heb hier het getal voor de temperatuur veranderd naar 2000

    gauge = new google.visualization.Gauge(document.getElementById('gauge_div'));   // div#gauge_div is de plek waar de grafiek in komt te staan.
    gauge.draw(gaugeData, gaugeOptions);                                            // Deze regel zorgt dat de grafiek daadwerkelijk getekend wordt.
}

function changeTemp(dir) {                                                          // 'dir' staat voor 'direction' (richting) en de waarde kan 1 (toename) of -1 (afname) zijn.
    gaugeData.setValue(0, 0, gaugeData.getValue(0, 0) + dir * 53);                  // Ik heb hier het vermenigvuldigingsgetal (ofwel stapgrootte) veranderd naar 53
    gaugeData.setValue(0, 1, gaugeData.getValue(0, 1) + dir * 78);                  // Ik heb hier het vermenigvuldigingsgetal (ofwel stapgrootte) veranderd naar 78
    gauge.draw(gaugeData, gaugeOptions);                                            // Ik heb de getallen 53 en 78 gekozen omdat het priemgetallen zijn en er hierdoor steeds andere getallen te zien zijn (anders dan bij veelvouden van 10 zeg maar)
}                                                                                   // De functie hierboven zorgt dat de waarde van beide grafieken omhoog of omlaag gaat (ligt eraan of dir 1 of -1 is). De laatste regel tekent de grafiek opnieuw met de nieuwe waarden.