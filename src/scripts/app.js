$(document).ready(function() {
    var seocnd = 60;
    setInterval(function() {
        seocnd--;
        $('#second').html(seocnd);
        seocnd = (seocnd == 0) ? 60 : seocnd;
    }, 1000);
});