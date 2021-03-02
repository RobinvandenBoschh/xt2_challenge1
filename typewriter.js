
//Main title typewriter function
var i = 0;
var titleTxt = 'Welcome to the Interplanetary Transport System Interface!';
var speedTitle = 40;

function typeWriterTitle() {
    if(i < titleTxt.length) {
        document.getElementById('mainTitle').innerHTML += titleTxt.charAt(i);
        i++;
        setTimeout(typeWriterTitle, speedTitle);
    } else {typeWriterIntro();}
}

var j = 0;
var introTxt = 'SpaceX is working on a next generation of fully reusable launch vehicles that will be the most powerful ever built, capable of carrying humans to Mars and other destinations in the solar system. On this dashboard you can learn all about this mission, whether you are a passenger on the Starship or just interested in the mission.';
var speedIntro = 20;

function typeWriterIntro() {
    if(j < introTxt.length) {
        document.getElementById('introText').innerHTML += introTxt.charAt(j);
        j++;
        setTimeout(typeWriterIntro, speedIntro);
    } else {document.getElementById('arrowDown').style.display = 'block';}
}

window.onload = function() {typeWriterTitle()};

// Typewriter section 1
/*var k = 0;
var sectionOneTxt = 'Section 1';
var speedSectionOne = 40;

function typeWriterSectionOne() {
    if(k < sectionOneTxt.length) {
        document.getElementById('sectionOne').innerHTML += sectionOneTxt.charAt(k);
        k++;
        setTimeout(typeWriterSectionOne, speedSectionOne);
    }
}

document.getElementById('sectionOne').onshow = function() {typeWriterSectionOne()};*/