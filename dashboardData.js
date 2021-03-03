// Dit is de data die nodig is om de grafiek in dashboard.js te kunnen plotten.
// Ik heb de labels (flight, water, food, air) en alle getallen veranderd t.o.v. het voorbeeld, en ik heb ook nog een aantal extra regels toegevoegd t.o.v. in het voorbeeld zaten. Het is dus geen copy+paste geweest, ook al lijkt het in de hoofdstructuur natuurlijk nog wel op het voorbeeld.

var freqData=[
     {Flight:'2014',freq:{water:3260, food:587, air:1195}}
    ,{Flight:'2015',freq:{water:416, food:3797, air:674}}
    ,{Flight:'2016',freq:{water:932, food:4054, air:1953}}
    ,{Flight:'2017',freq:{water:832, food:1152, air:1862}}
    ,{Flight:'2018',freq:{water:273, food:3862, air:948}}
    ,{Flight:'2019',freq:{water:1423, food:167, air:873}}
    ,{Flight:'2020',freq:{water:1820, food:287, air:1210}}
    ,{Flight:'2021',freq:{water:4798, food:3852, air:642}}
    ,{Flight:'2022',freq:{water:797, food:1849, air:2534}}
    ,{Flight:'2023',freq:{water:1162, food:1379, air:471}}
    ];
    
    dashboard('#dashboard',freqData);