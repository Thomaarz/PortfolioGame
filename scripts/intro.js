var percent = 0;
var loading = false;

$("#load-btn").click(function() {
    if (!loading) {
        $(this).css("top", "-200px");
        loading = true;
        start();
    }
});


function start() {
    for(var i = 0; i < 100; i += 1) {
        setTimeout(function() {
            percent++;
            $("#load-percent").html(percent + " - 100");
            if (percent >= 100) {
                end();
            }
        }, 50 * i);
    }
}

function end() {
    $("#intro").css("opacity", "0");
    $("#main").css("opacity", "1");
}