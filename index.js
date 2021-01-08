/* Home page events */

function arrowHoverOffEvent(name) {
    var text = document.getElementById(name);

    var pos = text.getBoundingClientRect();

        var curPos = pos.left;

        var id = setInterval(frame, 10);
        function frame() {
            if (curPos == 260) {
                clearInterval(id);
            } else {
                curPos--;
                text.style.left = curPos + 'px';
            }
        }
}

function arrowHoverEvent(name) {
    var text = document.getElementById(name);

    var pos = text.getBoundingClientRect();

        var curPos = pos.left;

        var id = setInterval(frame, 10);
        function frame() {
            if (curPos == 275) {
                clearInterval(id);
            } else {
                curPos++;
                text.style.left = curPos + 'px';
            }
        }
}

function changePage(name) {
    elem = document.getElementById(name);

    if (name == 'IFELSE-home-text') {
        hideAllInfoElements('IFELSE');
    }

    if (name == 'Clocks-home-text') {
        hideAllInfoElements('Clocks');
    }
}

function hideAllInfoElements(section) {
    /* If Else Elements */
    document.getElementById('IFELSE-panel-image').style.visibility = 'hidden';
    document.getElementById('IFELSE-team-space').style.visibility = 'hidden';
    document.getElementById('IFELSE-team-text').style.visibility = 'hidden';
    document.getElementById('IFELSE-team-JosephGeis-image').style.visibility = 'hidden';
    document.getElementById('IFELSE-team-lleyton-image').style.visibility = 'hidden';
    document.getElementById('IFELSE-team-idkwuu-image').style.visibility = 'hidden';
    document.getElementById('IFELSE-team-niilas-image').style.visibility = 'hidden';
    document.getElementById('IFELSE-team-Grify-image').style.visibility = 'hidden';
    document.getElementById('IFELSE-team-Edaz-image').style.visibility = 'hidden';
    document.getElementById('IFELSE-team-TheModdedChicken-image').style.visibility = 'hidden';
    document.getElementById('IFELSE-links-space').style.visibility = 'hidden';
    document.getElementById('IFELSE-links-text').style.visibility = 'hidden';
    document.getElementById('IFELSE-GitHub-image-link').style.visibility = 'hidden';
    document.getElementById('IFELSE-Twitter-image-link').style.visibility = 'hidden';

    /* Clocks Elements */
    document.getElementById('Clocks-text').style.visibility = 'hidden';

    showSelectedInfoElements(section);
}

function showSelectedInfoElements(section) {
    if (section == 'IFELSE') {
        document.getElementById('IFELSE-panel-image').style.visibility = 'visible';
        document.getElementById('IFELSE-team-space').style.visibility = 'visible';
        document.getElementById('IFELSE-team-text').style.visibility = 'visible';
        document.getElementById('IFELSE-team-JosephGeis-image').style.visibility = 'visible';
        document.getElementById('IFELSE-team-lleyton-image').style.visibility = 'visible';
        document.getElementById('IFELSE-team-idkwuu-image').style.visibility = 'visible';
        document.getElementById('IFELSE-team-niilas-image').style.visibility = 'visible';
        document.getElementById('IFELSE-team-Grify-image').style.visibility = 'visible';
        document.getElementById('IFELSE-team-Edaz-image').style.visibility = 'visible';
        document.getElementById('IFELSE-team-TheModdedChicken-image').style.visibility = 'visible';
        document.getElementById('IFELSE-links-space').style.visibility = 'visible';
        document.getElementById('IFELSE-links-text').style.visibility = 'visible';
        document.getElementById('IFELSE-GitHub-image-link').style.visibility = 'visible';
        document.getElementById('IFELSE-Twitter-image-link').style.visibility = 'visible';
    }

    if (section == 'Clocks') {
        document.getElementById('Clocks-text').style.visibility = 'visible';
    }
}