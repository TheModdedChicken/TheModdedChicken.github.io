/* Home page events */

function arrowHoverOffEvent(name) {
    var arrow = document.getElementById(name);
    var pos = arrow.getBoundingClientRect();

    var curPos = pos.left;

    hover = false

    var id = setInterval(frame, 10);
    function frame() {
        if (curPos == 260) {
            clearInterval(id);
        } else if (hover == true) {

        } else {
            curPos--;
            arrow.style.left = curPos + 'px';
        }
    }
}

function arrowHoverEvent(name) {
    var arrow = document.getElementById(name);
    var pos = arrow.getBoundingClientRect();

    var curPos = pos.left;

    hover = true;

    var id = setInterval(frame, 10);
    function frame() {
        if (curPos == 275) {
            clearInterval(id);
        } else if (hover == false) {
            return;
        } else {
            curPos++;
            arrow.style.left = curPos + 'px';
        }
    }
}