/* Home page events */

function changePage(name) {
    elem = document.getElementById(name);

    if (name === 'profile-panel-text') {
        hideAllInfoElements('Home');
    }

    if (name === 'IFELSE-home-text') {
        hideAllInfoElements('IFELSE');
    }

    if (name === 'Clocks-home-text') {
        hideAllInfoElements('Clocks');
    }
}

document.addEventListener ("keydown", function (zEvent) {
    if (zEvent.altKey  &&  zEvent.shiftKey  &&  zEvent.key === "S") {
        console.log('Yay')
    }
} );

function hideAllInfoElements(section) {
    /* Home Elements */
    

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
    document.getElementById('IFELSE-about-paragraph').style.visibility = 'hidden';

    /* Clocks Elements */
    document.getElementById('Clocks-text').style.visibility = 'hidden';

    showSelectedInfoElements(section);
}

function showSelectedInfoElements(section) {

    if (section === 'Home') {
        
    }

    if (section === 'IFELSE') {
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
        document.getElementById('IFELSE-about-paragraph').style.visibility = 'visible';
    }

    if (section === 'Clocks') {
        document.getElementById('Clocks-text').style.visibility = 'visible';
    }
}