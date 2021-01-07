/* Home page events */

function loadLine() {
    var profileCanvasObject = document.getElementById('profile-space');
    var profileCanvas = profileCanvasObject.getContext("2d");

    profileCanvas.strokeStyle = "#ffffff";
    profileCanvas.beginPath();
    profileCanvas.moveTo(20, 20);
    profileCanvas.lineTo(20, 100);
    profileCanvas.lineTo(70, 100);
    profileCanvas.stroke();
}

function arrowHoverOffEvent(name) {
    var arrow = document.getElementById(name);

    arrow.style.position = "absolute";
    arrow.style.left = "0px";
}

function arrowHoverEvent(name) {
    var arrow = document.getElementById(name);

    arrow.style.position = "absolute";
    arrow.style.left = "100px";
}