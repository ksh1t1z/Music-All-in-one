function mainUpdate(type) {
    if (type == "music") {
        document.getElementById('artwork').src = "/var/mobile/Documents/Artwork.jpg?" + (new Date()).getTime();
        document.getElementById('title').innerHTML = title;
        document.getElementById('artist').innerHTML = artist;

        if (isplaying) {
            document.getElementById('player').style.visibility = "visible";
            document.getElementById('artwork').style.visibility = "visible";
            document.getElementById('previous').style.visibility = "visible";
            document.getElementById('next').style.visibility = "visible";
            document.getElementById('pP').src = "img/pause.png";
        } else {
            document.getElementById('player').style.visibility = "hidden";
            document.getElementById('artwork').style.visibility = "hidden";
            document.getElementById('previous').style.visibility = "hidden";
            document.getElementById('next').style.visibility = "hidden";
            document.getElementById('pP').src = "img/play.png";
        }
    }
}

document.getElementById('previous').addEventListener("click", previous);
document.getElementById('next').addEventListener("click", next);
document.getElementById('pP').addEventListener("click", pP);

function previous() {
    window.location = 'xeninfo:prevtrack'
}
function pP() {
    window.location = 'xeninfo:playpause'
}
function next() {
    window.location = 'xeninfo:nexttrack'
}

