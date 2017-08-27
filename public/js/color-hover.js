colors = ['#F44336', '#E91E63', '#9C27B0', '#2196F3', '#B388FF', '#00BCD4', '#00BFA5', '#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800', '#FF5722'];
var color = '#FFFFFF';

$(document).ready(function () {
    $(".color-hover").mouseenter(function(){
        color = colors[Math.floor(Math.random() * (colors.length - 1))];
        $(this).css({
            //'transition': '.15s all 0s ease-in-',
            //'-webkit - transition': '.15s all 0s ease-in-out',
            '-moz-transition': 'color .2s ease-in',
            '-o-transition': 'color .2s ease-in',
            '-webkit-transition': 'color .2s ease-in',
            'color': color
        });
    });
    $(".color-hover").mouseleave(function () {
        if ($(this).hasClass('reset-black')) {
            var newColor = "black";
        } else {
            var newColor = "white";
        }
        $(this).css({
            "color": newColor,
            
        });
    });


});

function colorBkgHover(el) {
    bkgColor = colors[Math.floor(Math.random() * (colors.length - 1))];
    $(el).find('#team-card__intro').css({
        '-moz-transition': 'background-color .2s ease-in',
        '-o-transition': 'background-color .2s ease-in',
        '-webkit-transition': 'background-color .2s ease-in',
        'background-color': bkgColor,
        'transition-property': 'all, background-position'
    })
}

function colorBkgRemove(el) {
    $(el).find('#team-card__intro').css({
        "background-color": "white",
        '-moz-transition': 'background-color .2s ease-out',
        '-o-transition': 'background-color .2s ease-out',
        '-webkit-transition': 'background-color .2s ease-out',

    });
}