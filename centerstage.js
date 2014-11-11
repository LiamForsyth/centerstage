jQuery.fn.centerStage = function (options) {

    var settings = $.extend({
        backStage: '#backstage',
        closeablebackStage: true,
        close: '.panelclose',
        delayElement: '#' + $(this).data("stage") + 'stage',
        delayTime: false
    }, options);

    function closeStage() {
        $('body').css('overflow', '').find(settings.backStage).add('#' + stage + 'stage').removeClass("centerstage").delay(delay).hide(0);
    }
    if (settings.closeablebackStage === true) {
        $(settings.backStage).on( "click", function () {
            closeStage();
        });
    }
    $(settings.close).on( "click", function () {
        closeStage();
    });

    $(this).on( "click", function () {
        stage = $(this).data("stage");
        if (settings.delayTime === false) {
            delay = (($(settings.delayElement).css('transition').split(' ')[1]).split('s')[0]) * 1000;
        } else {
            delay = settings.delayTime;
        }
        $('body').css('overflow', 'hidden').find(settings.backStage).add('#' + stage + 'stage').show(0, function () {
            $(this).addClass("centerstage");
        });

    });
};
