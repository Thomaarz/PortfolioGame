
function progressBar(client_y, client_site_height, client_progress) {

    let bar = document.getElementById('progress-bar');
    let bar_top = document.getElementById('progress-bar-top');
    let bar_bottom = document.getElementById('progress-bar-bottom');

    let percent_bar_top = client_progress + 10;
    let percent_bar_bottom = 100 - client_progress - 10;

    bar_top.style.height = percent_bar_top + '%';
    bar_bottom.style.height = percent_bar_bottom + '%';
}