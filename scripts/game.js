
let player_rotate = 0;
let player_can_move = true;
let animated_link = false;

function plateformeScroll(client_y, client_site_height, client_progress) {

    let player = document.getElementById('player');
    let plateforme1 = document.getElementById('plateforme-1');

    const plateformeElements = document.querySelectorAll('.game');
    Array.from(plateformeElements).forEach((element, index) => {
        let default_y = element.id === 'player' ? 690 : (element.id === 'plateforme-1' ? 750 : 670);
        element.style.top = (default_y - client_y) + 'px';

        if (default_y - client_y < 100) {
            player.style.display = 'none';
            plateforme1.style.display = 'none';
            element.style.top = '100px';
        } else if (window.innerWidth < 2900) {
            if (window.innerWidth > 1600) player.style.display = null;
            plateforme1.style.display = null;
        }
    });

    if (player.getBoundingClientRect().y < 0) {
        player.style.top = '690px';
        setPlayerTransitionAfter();
    }
}

function playerKeyPress(key, client_window_width, client_window_height) {
    let player = document.getElementById('player');
    let rect = player.getBoundingClientRect();
    let x = rect.x;
    let y = rect.y;

    let top = document.getElementById('top');
    let presentation = document.getElementById('presentation');
    let experience = document.getElementById('experience');
    let projets = document.getElementById('projets');
    let contact = document.getElementById('contact');

    if (key === 'Enter' || key === 'e') {
        if (883 - 90 <= x && x <= 883 + 90) window.scrollTo(0, presentation.getBoundingClientRect().y)
        else if (1066 - 90 <= x && x <= 1066 + 90) window.scrollTo(0, experience.getBoundingClientRect().y)
        else if (1249 - 90 <= x && x <= 1249 + 90) window.scrollTo(0, projets.getBoundingClientRect().y)
        else if (1432 - 90 <= x && x <= 1432 + 90) window.scrollTo(0, contact.getBoundingClientRect().y)
        else window.scrollTo(0, top.getBoundingClientRect().y)
        return;
    }

    if (player_can_move && y > 100) {

        if (key === 'q' || key === 'ArrowLeft') {
            if (x <= 0) player.style.left = '0px';
            else player.style.left = (x - 60) + 'px';
            player_rotate -= 90;

            player.style.transform = 'rotate(' + player_rotate + 'deg)';
        } else if (key === 'd' || key === 'ArrowRight') {
            if (x >= client_window_width - rect.width) player.style.left = (client_window_width - rect.width) + 'px';
            else player.style.left = (x + 60) + 'px';
            player_rotate += 90;

            player.style.transform = 'rotate(' + player_rotate + 'deg)';
        }

        player_can_move = false;
        setTimeout(function() {
            player_can_move = true;
        }, 100);

        showTextWithPlayer();
    }

    // Plateforme 1
    if (y < 750) {
        if (!(490 <= x && x <= 1560) && rect.y > 0) {
            player.style.top = (690 - pageYOffset) + 'px';
            player.style.left = '700px';
        }
    }
}

function setPlayerTransitionAfter() {
    let player = document.getElementById('player');
    const interval = setInterval(function() {
        player.style.transition = '.1s';
        clearInterval(interval);
    }, 100);
}

function showTextWithPlayer() {

    let player = document.getElementById('player');
    let rect = player.getBoundingClientRect();
    let x = rect.x;
    let y = rect.y;

    if (883 - 90 <= x && x <= 883 + 90) {
        hideAll();
        show_text('link-presentation')
    }
    else if (1066 - 90 <= x && x <= 1066 + 90) {
        hideAll();
        show_text('link-experience')
    }
    else if (1249 - 90 <= x && x <= 1249 + 90) {
        hideAll();
        show_text('link-projets')
    }
    else if (1432 - 90 <= x && x <= 1432 + 90) {
        hideAll();
        show_text('link-contact')
    }
    else hideAll()
}

function hideAll() {
    hide_text('link-presentation');
    hide_text('link-experience');
    hide_text('link-projets');
    hide_text('link-contact');
}