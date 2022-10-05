
function moveableElements(mouse_x, mouse_y) {

    const moveableElements = document.querySelectorAll('.moveable');
    Array.from(moveableElements).forEach((element, index) => {
        const rect = element.getBoundingClientRect();

        const mid_x = rect.x + (element.clientWidth / 2);
        const mid_y = rect.y + (element.clientHeight / 2);

        let translate_x = mid_x - mouse_x;
        let translate_y = mid_y - mouse_y;

        let divisor = element.classList.contains('speed-0') ? 100 : element.classList.contains('speed-2') ? 25 : (element.classList.contains('speed-3') ? 20 : 50);
        translate_x = translate_x / divisor;
        translate_y = translate_y / divisor;

        if (translate_x < -100) translate_x = -100;
        if (translate_y < -100) translate_y = -100;
        if (translate_x > 100) translate_x = 100;
        if (translate_y > 100) translate_y = 100;

        element.style.transform = 'translate(' + translate_x + 'px, ' + translate_y + 'px)';
    });
}

function scrollElements(client_y, client_site_height, client_window_height, client_progress) {
    const revealElements = document.querySelectorAll('.reveal');

    Array.from(revealElements).forEach((element, index) => {

        let reveal_top = element.getBoundingClientRect().top;
        let reveal_point = 200;

        if (reveal_top < client_window_height - reveal_point) element.classList.add('active');
        else element.classList.remove('active');

    });
}

printLetterByLetter('title-1', 'Hey,_Je suis Thomaarz,_Développeur Web/Java.', 40);
coloredLetter('title-1', '#FFF', 1500, 40);

setTimeout(function() {
    let moveInfos = document.getElementById('deplacement-infos');
    moveInfos.style.transform = "translateX(0px)";
    moveInfos.style.opacity = "1";

}, 1000);