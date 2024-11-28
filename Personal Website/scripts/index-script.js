const coverVid = document.getElementById("the-archives");
const vidSource1 = document.getElementById("vidmp4");
const femalePlayer = document.getElementById("female");
const malePlayer = document.getElementById("male");
const arrowPlayer = document.getElementById("arrow");
const maxScreenW = 600;

let screenWidth = window.innerWidth;
let change = true;

if (screenWidth <= maxScreenW) {
    coverVid.pause();
    vidSource1.setAttribute("src", "vid/the-archives-m.mp4");
    coverVid.load();
    coverVid.play();
}

coverVid.ontimeupdate = function() {
    if (coverVid.currentTime > 6) {
        coverVid.currentTime = 2.7;
    }
}

function showChristian() {
    document.getElementById("person").src = "img/christian.png";
    document.getElementById("male").style.filter = "brightness(100%)"
    document.getElementById("female").style.filter = "brightness(50%)"
    document.getElementById("name").innerHTML = "Christian";
}

function showMarnie() {
    document.getElementById("person").src = "img/marnie.png";
    document.getElementById("male").style.filter = "brightness(50%)"
    document.getElementById("female").style.filter = "brightness(100%)"
    document.getElementById("name").innerHTML = "Marnie";
}

function changePlayer() {
    if (change) {
        femalePlayer.style.display = "none";
        malePlayer.style.display = "block";
        arrowPlayer.src = "img/icons/signs/left-arrow.png";
    } else {
        femalePlayer.style.display = "block";
        malePlayer.style.display = "none";
        arrowPlayer.src = "img/icons/signs/right-arrow.png";
    }

    change = !change;
}

window.addEventListener('resize', function(event) {
    var screenWidth = window.innerWidth;

    coverVid.pause();
    if (screenWidth <= maxScreenW) {
        vidSource1.setAttribute("src", "vid/the-archives-m.mp4");
    } else {
        vidSource1.setAttribute("src", "vid/the-archives.mp4");
    }

    coverVid.load();
    coverVid.play();
});