// Ik heb hier gebruik gemaakt van Google Charts.

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Continents', 'amount'],                                           // Ik heb de labels aangepast.
        ['North America', 11],                                              // Ik heb bij elke regel van de data het label (het continent) en het getal aangepast.
        ['South America',  2],
        ['Europe',  5],
        ['Asia',  4],
        ['Africa',  1],
        ['Oceania', 1],
        ['Antarctica', 0]
        ]);
        
    var options = {                                                         // Alle regels binnen options heb ik zelf toegevoegd of aangepast.
        title: 'Humans curently on Mars (by continent)',
        titlePosition: 'middle',
        titleTextStyle: {
            color: 'white',
            fontName: "'Monserrat', sans-serif",
            fontSize: 17,
            bold: true,
        },
        colors: ['#c35530',  '#dd9279', '#75331d', '#9c4427', '#f1d1c7', '#75331d', '#faf1ee'],
        textStyle: {
            color: 'white',
            fontName: "'Montserrat', sans-serif",
            fontSize: 20
        },

        legend: {
            textStyle: {
                color: 'white',
                fontName: "'Montserrat', sans-serif",
                fontSize: 15
            }
        }
        };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
      }