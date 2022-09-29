window.onmousemove = function (event) {
    const mouse_x = event.clientX;
    const mouse_y = event.clientY;

    var cursor = document.getElementById("cursor");

    cursor.style.left = (mouse_x - 20) + 'px';
    cursor.style.top = (mouse_y - 10) + 'px';
}