/**
 * Created by Administrator on 2016/11/16.
 */
$(function () {
    //木鱼品牌进行动画操作
    $(".works-brand li").mouseenter(function () {

        $(this).find(".just img").stop().animate({
            "left": "177.5px",
            "z-index": 1,
            "width": "0"
        });
        $(this).find(".against img").stop().animate({
            "left": "0px",
            "z-index": 2,
            "width": "355px"
        });

    }).mouseleave(function () {
        $(this).find(".against img").stop().animate({
            "left": "177.5px",
            "z-index": 1,
            "width": "0"
        });
        $(this).find(".just img").stop().animate({
            "left": "0px",
            "z-index": 2,
            "width": "355px"
        });
    });
    //点击下拉箭头按钮，滚动到下一个指定的位置
    $(".top-ico3").eq(0).click(function () {
        $("html,body").animate({scrollTop: $(".section2").offset().top}, 1000);
    });
    $(".top-ico3").eq(1).click(function () {
        $("html,body").animate({scrollTop: $(".section3").offset().top}, 1000);
    });
    //.scroll-btn鼠标滚动滑出按钮
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $(".scroll-btn").animate({"right": "0px"});
        } else {
            $(".scroll-btn").animate({"right": "-255px"});
        }
    });
    $(".scroll-btn").mouseenter(function () {
        $(this).find("a").eq(0).css({
            "background": "#141414",
        }).html("MENU");
        $(this).find("a").eq(1).css({
            "background": "#141414",
        }).html("咨询");
    }).mouseleave(function () {
        $(this).find("a").eq(0).animate({
            "background": "url(images/menu.png) no-repeat"
        }).html("");
        $(this).find("a").eq(1).animate({
            "background": "url(images/menu2-hover.png) no-repeat"
        }).html("");
    });
    ;

});

