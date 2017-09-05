/* Toggle expanded class when someone clicks on the team card element */
function toggleOverlay(el) {
    $el = $(el);
    $overlay = $el.find('.team-card__overlay');
    $overlay.toggleClass('expanded');
    if ($overlay.hasClass("expanded")) {
        $overlay.css("background-color", $el.find('.team-card__intro').css("backgroundColor"));
    }

}
