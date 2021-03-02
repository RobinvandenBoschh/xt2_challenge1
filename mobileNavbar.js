// JavaScript voor de animatie trigger in het mobiele navigatiemenu
function toggleIcon(x) {
    x.classList.toggle('change');
}

function openNav(x) {
    if(x.classList.contains('change')) {
        document.getElementById('mobileNavbar').style.width = '100%';
    } else {
        document.getElementById('mobileNavbar').style.width = '0px';
    }
}

function closeNav() {
    document.getElementById('mobileNavbar').style.width = '0px';
    document.getElementsByClassName('iconContainer').classList.toggle('change');
}