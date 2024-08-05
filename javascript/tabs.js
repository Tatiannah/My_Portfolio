var setPostHeights = function() {
    var maxHeight = -1,
        post = $('.posts .post');

    $(post).height('auto');

    $(post).each(function() {
        maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
    });
    $(post).height(maxHeight);
}

$(document).ready(function () {
    setPostHeights();
});

var timer;
$(window).bind('resize', function() {
    clearTimeout(timer);
    timer = setTimeout(function(){
        setPostHeights();
    }, 100);
});