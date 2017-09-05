/* Toggle expanded class when someone clicks on the team card element */
function expandBar() {
    $('.bar__social').toggleClass('expand');
}
function flashWhite() {
    $('.bar__expand').css({
        'transition-delay': '2s',
        'color': 'blue',
        'transition-delay': '10s',
        'color': 'green',
        'transition-delay': '50s',
        'color': 'red'
    });
}
$(document).ready(function () {
    //flashWhite();



});

