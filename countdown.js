// Datum tot waar er wordt afgeteld
var countDownDate = new Date("Jul 16, 2026 13:32:00").getTime(); // in 1969 werd de Apollo 11 op 16 juli om 13:32:00 gelanceerd. Dit is de lancering van het voertuig dat uiteindelijk de eerste maanlanding zou maken dus heb ik die datum en tijd gekozen als easter egg. In het jaar 2026 staat de eerste bemande vlucht van de Starship (waarmee deze ruimtereizen naar mars gemaakt gaan worden) gepland voor lancering.

// Functie dat de countdown elke seconde opnieuw update
var countdownNumber = setInterval(function() {
    var now = new Date().getTime(); // Ophalen van de huidige datum en tijd.
    
    // Verschil tussen de lanceertijd en -datum, en het nu berekenen
    var distance = countDownDate - now;
    
    // Hoeveelheid dagen, uren, minuten en seconden berekenen
    var days = Math.floor(distance / (1000 * 60 * 60 * 24)); // Bereken hoeveel hele dagen het nog aftellen is
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Ik wist bij het typen wat deze berekening doet, maar ik weet de juiste benaming er niet voor te benoemen. Het berekent iig hoeveel uren er nog over zijn als je alle hele dagen eraf rekent die er mogelijk zijn. Het getal wat eruitkomt is wat uit deze regel komt.
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)); // Zelfde type berekening als bij de vorige regel, maar dan met minuten. Alle volledige uren worden er vanaf gehaald en je houd de minuten over (ofzo, zoals ik al zei het is lastig te benoemen haha)
    var seconds = Math.floor((distance % (1000 * 60)) / 1000); // Zelfde type berekening als bij de vorige regel, maar dan met seconden.
    
    // Zet de variabelen neer in de html, binnen de paragraaf met het id 'countdown'
    document.getElementById("countdown").innerHTML = days + " days " + hours + " hrs " + minutes + " min " + seconds + " sec ";
    
    // Voor het geval dat het al 16 juli 2016 13:32:00 is geweest
    if (distance < 0) {
        clearInterval(countdownNumber);
        document.getElementById("countdown").innerHTML = "THE STARSHIP HAS ALREADY BEEN LAUNCHED";
    }
}, 1000); // Het getal 1000 is voor 1000 miliseconden (ofwel 1 seconde) en zorgt dat de countdown elke seconde wordt geüpdate