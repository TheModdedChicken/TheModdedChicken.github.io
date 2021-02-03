/* Home page events */

function changePage(name) {
    elem = document.getElementById(name);

    if (name === 'profile-panel-text') {
        hideAllInfoElements('Home');
    }

    if (name === 'Tint-home-text') {
        hideAllInfoElements('Tint');
    }

    if (name === 'Clocks-home-text') {
        hideAllInfoElements('Clocks');
    }

}

document.addEventListener ("keydown", function (zEvent) {
    if (zEvent.altKey  &&  zEvent.shiftKey  &&  zEvent.key === "S") {
        console.log('Yay')
    }
});

function hideAllInfoElements(section) {
    /* Home Elements */
    

    /* Tint Elements */
    document.getElementById('Tint-panel').style.visibility = 'hidden';

    /* Clocks Elements */
    document.getElementById('Clocks-panel').style.visibility = 'hidden';

    showSelectedInfoElements(section);
}

function showSelectedInfoElements(section) {

    if (section === 'Home') {
        
    }

    if (section === 'Tint') {
        document.getElementById('Tint-panel').style.visibility = 'visible';
    }

    if (section === 'Clocks') {
        document.getElementById('Clocks-panel').style.visibility = 'visible';
    }

}

function moveTintChangelog (direction) {
    if (direction == 'down') {
        var changelog = document.getElementById('Tint-panel-changelog-panel');

        changelog.style.height = '335px';
    } else if (direction == 'up') {
        var changelog = document.getElementById('Tint-panel-changelog-panel');

        changelog.style.height = '395px';
    }
}