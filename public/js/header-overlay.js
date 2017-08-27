/* Open when someone clicks on the span element */
function openNav() {
    var $navOverlay = $('.nav-overlay');
    $navOverlay.addClass('expanded');
    $('.menu-btn').css('z-index', 0);
    $('.menu-btn').css('opacity', 0);
    $('.close-btn').css('opacity', 1);
    $('body').css('overflowY', 'hidden');


}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    $('.menu-btn').css('opacity', 1);
    
    $('.nav-overlay').removeClass('expanded');
    wto = setTimeout(function () {
        // do stuff when user has been idle for 1 second
        $('.menu-btn').css('z-index', 1);
        $('.close-btn').css('opacity', 0);
        

    }, 1000);
    $('body').css('overflowY', 'auto');

}