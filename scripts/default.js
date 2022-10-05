
window.onscroll = function (event) {
    const client_y = pageYOffset;
    const client_site_height = document.body.clientHeight;
    const client_window_height = window.innerHeight;
    const client_progress = (client_y * 100) / client_site_height;

    progressBar(client_y, client_site_height, client_progress);
    plateformeScroll(client_y, client_site_height, client_progress);
    scrollElements(client_y, client_site_height, client_window_height, client_progress);
}

window.onmousemove = function (event) {
    const mouse_x = event.clientX;
    const mouse_y = event.clientY;

    moveableElements(mouse_x, mouse_y);
}

window.onkeydown = function(event) {
    const key = event.key;
    const client_window_height = window.innerHeight;
    const client_window_width = window.innerWidth;

    playerKeyPress(key, client_window_width, client_window_height);
}