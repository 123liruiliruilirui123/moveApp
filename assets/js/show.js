$(function() {
    //滚动导航贴到顶部
    var top = $('.menu').offset().top;
    $(window).scroll(function() {
        var sTop = $(window).scrollTop();
        if (sTop >= top) {
            $('.menu').addClass('active');
        } else {
            $('.menu').removeClass('active');
        }
    })
    //瀑布流
    var pubu = document.querySelector('.pubu');
    $('.anniu').click(function() {
        console.log(111);
        $.get('assets/php/show.php', function(msg) {
            var str = '';
            msg.forEach(function(v, k) {
                str += '<div class="info">';
                str += '<div class="image"><img src="' + v.img + '"></div>';
                str += '<div class="list-content">';
                str += '<p>' + v.title + '</p>';
                str += '<h3><span>' + v.size + '</span><strong>' + v.price + '</strong></h3>';
                str += '<h4>' + v.address + '</h4>';
                str += '<div class="tag">';
                str += '<span>' + v.time + '</span>';
                str += '<span>' + v.talk + '</span>';
                str += '</div>';
                str += '</div>';
                str += '</div>';
            })
            pubu.innerHtml += str;
        }, 'json')
    })
})