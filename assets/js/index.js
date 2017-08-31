$(function() {
    //顶部下载APP
    $(window).scroll(function() {
        var sTop = $(window).scrollTop();
        if (sTop >= 338) {
            $('.dingbu-hide').slideDown();
        } else {
            $('.dingbu-hide').slideUp();
        }
    })
    //轮播图
    var index = 0;
    var len = $('.lunbo-body li').length;
    var timer = 0;

    function run() {
        timer = setInterval(function() {
            index++;
            var wid = $('.lunbo-body li').width();
            $('.lunbo-body').animate({
                left: -index * wid
            }, 1000, function() {
                if (index == len - 1) {
                    $(this).css('left', 0);
                    index = 0;
                }
            });
        }, 2000);
    }
    run();
})