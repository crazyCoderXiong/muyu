/**
 * Created by Byiao on 2016/11/16.
 */

$(function () {
    //滚动小三角
    $("#scr1").click(function () {
        $("body").animate({"scrollTop": 745}, 1000);
    })
    $("#scr2").click(function () {
        $("body").animate({"scrollTop": 1455}, 1000);
    })
    $("#scr3").click(function () {
        $("body").animate({"scrollTop": 2145}, 1000);
    })
    $("#scr4").click(function () {
        $("body").animate({"scrollTop": 3055}, 1000);
    })
    $("#scr5").click(function () {
        $("body").animate({"scrollTop": 3860}, 1000);
    })


    //joinus按钮
    $("#joinusa").mouseenter(function () {
        $(this).animate({"opacity": 0.7}, 100)
    })
    $("#joinusa").mouseleave(function () {
        $(this).animate({"opacity": 1}, 100)
    })

    //love部分 盒子出现隐藏
    $(".lovebtn1").mouseenter(function () {
        $("#showlbox").css("z-index",20);
        $("#showlbox").stop().animate({"left": 0}, 200, function () {

        })
    })
    $(".lovebtn1").mouseleave(function () {
        $("#showlbox").stop().animate({"left": "-340px"}, 200, function () {
            $("#showlbox").css("z-index",0);
        })
    })
    $("#lovebtn2").mouseenter(function () {
        $("#showrbox").css("z-index",22);
        $("#lovebtn2").css("z-index",220);
        $("#showrbox").stop().animate({"right": "-25px"}, 200, function () {
        })
    })
    $("#lovebtn2").mouseleave(function () {
        $("#showrbox").stop().animate({"right": "-380px"}, 200, function () {
            $("#showrbox").css("z-index",0);
            $("#lovebtn2").css("z-index",0);
        })
    })

        //TopContainer
    $(".sideMenu3 .one").click(function () {
        var currentUl = $(this).find("ul").css("display");
        if (currentUl === "block") {
            $(this).find("ul").slideUp(100);
            $(this).find("h3").slideDown(15);
        } else {
            $(this).find("h3").slideUp(15);
            $(this).find("ul").slideDown(100);
            $(this).siblings(".one").find("ul").slideUp(100);
            $(this).siblings(".one").find("h3").slideDown(15);
        }
    });


    //maps myimg放大放小效果，当页面滚动到maps顶部时，此时maps myimg放大放小效果才执行
    $(window).scroll(function () {
        if ($(window).scrollTop() > $(".maps").offset().top) {
            $(".myimg").css({
                "transform":"scale(1)"
            });
        }else{
            $(".myimg").css({
                "transform":"scale(0.5)"
            });
        };
    });
    var timerId = null;
    $(".who-main").mouseenter(function () {
        clearTimeout(timerId);
        var that = this;
        $(this).addClass("flipInX animated");
        timerId = setTimeout(function () {
            $(that).removeClass("flipInX animated");
        },8000);
    })

    $(".team-person>ul>li img").mouseenter(function () {
        $(this).addClass("zoomIn animated");
    })
    $(".team-person>ul>li .my-t1").mouseenter(function () {
        $(".team-person>ul>li img").removeClass("zoomIn animated");
    })
    window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();

})