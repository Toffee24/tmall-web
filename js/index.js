$(function() {
    $('#nav-ul li').hover(function() {
        $(this).children('.hover-pic').animate({ top: '-50px' })
    }, function() {
        $(this).children('.hover-pic').animate({ top: '-36px' })
    });

    $('.sn-menu').hover(function() {
        $(this).children('.menu-bd').show();
    }, function() {
        $(this).children('.menu-bd').hide()
    });

    // 轮换大区
    var ali = $('#lunbonum li');
    var aPage = $('#lunhuanback p');
    var aslide_img = $('.lunhuancenter b');
    var iNow = 0;
    var arrBackground = ['#12D3CD', '#E8E8E8', '#6FB3E2', '#F5C15C', '#F2D4BC'];
    $('#lunhuanback').css({ 'background': arrBackground[0] });
    ali.each(function(index) {
        $(this).mouseover(function() {
            slide(index);
        })
    });

    function slide(index) {
        iNow = index;
        $('#lunhuanback').css({ 'background': arrBackground[index] });
        ali.eq(index).addClass('lunboone').siblings().removeClass();
        aPage.eq(index).siblings().stop().animate({ opacity: 0 }, 600);
        aPage.eq(index).stop().animate({ opacity: 1 }, 600);
        aslide_img.eq(index).stop().animate({ opacity: 1, top: -10 }, 600).siblings('b').stop().animate({ opacity: 0, top: -40 }, 600);
    }

    function autoRun() {
        iNow++;
        if (iNow == ali.length) {
            iNow = 0;
        }
        slide(iNow);
    }

    var timer = setInterval(autoRun, 4000);

    ali.hover(function() {
        clearInterval(timer);
    }, function() {
        timer = setInterval(autoRun, 4000);
    });

    // 左侧导航
    var contentCon = $('.content-con');
    for (var i = 1; i < contentCon.length; i++) {
        contentCon.eq(i).css({
            top: contentCon.eq(i).offset().top - 26.3 * i + 'px'
        });
    }
    $('.side-nav').find('li').hover(function() {
        $(this).children('.content-con').show()
    }, function() {
        $(this).children('.content-con').hide()
    });


    // brandlist
    var brandItemLength = $('.brand-item').length;
    for (var i = 0; i < brandItemLength; i++) {
        $('.brand-item').eq(i).hover(function() {
            $(this).children('.brand-mask').fadeIn(100);
        }, function() {
            $(this).children('.brand-mask').fadeOut(100);
        });
    }

    $('.img-con').hover(function() {
        $(this).children('img').animate({ width: '105%' }, 200);
    }, function() {
        $(this).children('img').animate({ width: '95%' }, 200);
    });

    // 左侧悬浮导航
    function scrollChangeColor() {
        var height = $(window).scrollTop();
        var item = $('.navbar-item');
        if (height < 1260) {
            $('.navbar-item:first').css('backgroundColor', 'rgba(0,0,0,.6)');
        }
        if (height > 1260 && height <= 1760) {
            item.eq(0).css('backgroundColor', '#F15453');
            item.not(item.eq(0)).css('backgroundColor', 'rgba(0,0,0,.6)');
        }
        if (height <= 2260 && height > 1760) {
            item.eq(1).css('backgroundColor', '#0AA6E8');
            item.not(item.eq(1)).css('backgroundColor', 'rgba(0,0,0,.6)');
        }
        if (height <= 2760 && height > 2260) {
            item.eq(2).css('backgroundColor', '#64C333');
            item.not(item.eq(2)).css('backgroundColor', 'rgba(0,0,0,.6)');
        }
        if (height <= 3260 && height > 2760) {
            item.eq(3).css('backgroundColor', '#19C8A9');
            item.not(item.eq(3)).css('backgroundColor', 'rgba(0,0,0,.6)');
        }
        if (height <= 3760 && height > 3260) {
            item.eq(4).css('backgroundColor', '#19C8A9');
            item.not(item.eq(4)).css('backgroundColor', 'rgba(0,0,0,.6)');
        }
        if (height <= 4160 && height > 3760) {
            item.eq(5).css('backgroundColor', '#EA5F8D');
            item.not(item.eq(5)).css('backgroundColor', 'rgba(0,0,0,.6)');
        }
        if (height > 4160) {
            item.css('backgroundColor', 'rgba(0,0,0,.6)');
        }
    }


    if ($(window).scrollTop() > 350) {
        $('.side-navbar').show()
    };

    $(window).scroll(function() {
        scrollChangeColor();
        if ($(window).scrollTop() > 350) {
            $('.side-navbar').show()
        } else $('.side-navbar').hide();
        if ($(window).scrollTop() > 550) {
            $('.top-search').show()
        } else $('.top-search').hide();

    });

    // 点击导航跳转
    $("a[id]").click(function() {
        $("html, body").animate({
            scrollTop: ($($(this).attr("href")).offset().top - 60) + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });

    // 两种方法滚动 第二种滚动的更平滑点

    /*var doscroll = function(){
        var $parent = $('.big-banner-title');
        var $first = $parent.find('div:first');
        var height = $first.height();
        $first.animate({
            height: 0   //或者改成： marginTop: -height + 'px'
            }, 500, function() {// 动画结束后，把它插到最后，形成无缝
            $first.css('height', height).appendTo($parent);
           // $first.css('marginTop', 0).appendTo($parent);
        });
    };
    setInterval(function(){doscroll()}, 1800);*/
    setInterval(function() {
        $('.side-item:first').animate({ marginTop: (-30) + 'px' }, 500,
            function() {
                $(this).css('marginTop', 0 + 'px').appendTo($('.big-banner-title'));
            })
    }, 1800)
    for (var i = 0; i < $('.center-wrap-item').length; i++) {
        var arr = ['#F15453', '#0AA6E8', '#64C333', '#19C8A9', '#EA5F8D', '#F7A945'];
        $('.center-wrap-item').eq(i).find('.grid-sub-title').css({ 'color': arr[i] })
    }
})
