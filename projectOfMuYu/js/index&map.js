/**
 * Created by Administrator on 2016/11/17.
 */
//荣誉展示  头部之上
//$(function () {
//    $(".honour").slideDown(1000, function () {
//        $(".replay").css("display", "none");
//        $(".close").css("display", "block");
//    });
//    setTimeout(function () {
//        $(".honour").slideUp(1000, function () {
//            $(".replay").css("display", "block");
//            $(".close").css("display", "none");
//        });
//    }, 6000);
//    $(".replay").click(function () {
//        $(".honour").slideDown(1000, function () {
//            $(".replay").css("display", "none");
//            $(".close").css("display", "block");
//        });
//        setTimeout(function () {
//            $(".honour").slideUp(1000, function () {
//                $(".replay").css("display", "block");
//                $(".close").css("display", "none");
//            });
//        }, 6000);
//    })
//    $(".close").click(function () {
//        $(".honour").slideUp(1000, function () {
//            $(".replay").css("display", "block");
//            $(".close").css("display", "none");
//        });
//    })
//
//})

// head 轮播图 开关按钮以及初始加载图片
$(function () {
    $(".li1 img").addClass("animated bounceInDown");
    $(".li2 img:eq(0)").addClass("bounceInLeft animated");
    $(".li2 img:eq(1)").addClass("bounceInRight animated");
    $(".li3 a:eq(0)").addClass("fadeInLeft animated");
    $(".li3 a:eq(1)").addClass("fadeInRight animated");
    $(".li4 .one").addClass("fadeInLeft animated");
    $(".li4 .two").addClass("bounceInUp animated");
    $(".li4 .three").addClass("bounceInUp animated");
    $(".li4 .four").addClass("bounceInUp animated");
    $(".li5 .one").addClass("fadeInRight animated");
    $(".li5 .two").addClass("bounceInUp animated");
    $(".li5 .three").addClass("fadeInLeft animated");
    $(".li5 .four").addClass("fadeInRight animated");
    $(".li6 .one").addClass("fadeInRight animated");
    $(".li6 .two").addClass("fadeInLeft animated");
    $(".close").click(function () {
        $(".honour").slideUp();
        $(this).prev().show();
        $(this).hide();
    });
    $(".replay").click(function () {
        clearInterval(timerId);
        $(".honour").slideDown();
        $(this).hide().next().show();
        //设置定时
        dingshi();
        setTimeout(function () {
            $(".honour").slideUp();
            $(".close").hide().prev().show();
        }, 8000);
    });
    //加载后延时1秒以动画形式加载honour图片
    setTimeout(function () {
        $(".honour").slideDown();
        $(".close").show().prev().hide();
    }, 1000);
    //延时若干秒后自动隐藏honour图片
    setTimeout(function () {
        $(".honour").slideUp();
        $(".close").hide().prev().show();
    }, 8000);
    var $spans = $(".anniu").children();
    var $lis = $(".headphoto>ul>li");
    //轮播位置，用于按钮与当前li标签的同步
    var temp = 0;
    //接收定时函数里的定时器编号
    var timerId = null;

//定义定时函数
    function dingshi() {
        timerId = setInterval(function () {
            temp++;
            if (temp >= $lis.length) {
                temp = 0;
            }
            for(var i=0;i<$lis.length;i++){
                animateSlow($lis[i],{"opacity":0});
                $lis.slideUp(400);
            }
            //留下我自己，将当前图片显现出来
            animateSlow($lis[temp],{"opacity":1});
            $lis[temp].style.display = "block";
            //$(".headphoto>ul>li").eq(temp).fadeIn(2000).siblings().hide();
            $spans.eq(temp).addClass("current").siblings().removeClass("current");
        }, 5000);
    }
//轮播按钮功能实现
    $spans.mouseenter(function () {
        $(this).css("borderColor", "#2ca6d2").siblings().css("borderColor", "");
    });
    $spans.mouseleave(function () {
        $(this).css("borderColor", "").siblings().css("borderColor", "");
    });
//定时轮播
    dingshi();
    $spans.click(function () {
        clearInterval(timerId);
        $(this).addClass("current").siblings().removeClass("current");
        temp = $(this).index();
        for(var i=0;i<$lis.length;i++){
            animateSlow($lis[i],{"opacity":0});
            $lis.slideUp(400);
        }
        //留下我自己，将当前图片显现出来
        animateSlow($lis[temp],{"opacity":1});
        $lis[temp].style.display = "block";

    });
})

//what top 部分
$(function () {
    $("#wta1").mouseenter(function () {
        $(this).find("em").css("background", "url(images/design-ico-hover.png) no-repeat center");
    })
    $("#wta1").mouseleave(function () {
        $(this).find("em").css("background", "url(images/design-ico.png) no-repeat center");
    })
    $("#wta2").mouseenter(function () {
        $(this).find("em").css("background", "url(images/move-ico-hover.png) no-repeat center");
    })
    $("#wta2").mouseleave(function () {
        $(this).find("em").css("background", "url(images/move-ico.png) no-repeat center");
    })
    $("#wta3").mouseenter(function () {
        $(this).find("em").css("background", "url(images/brand-ico-hover.png) no-repeat center");
    })
    $("#wta3").mouseleave(function () {
        $(this).find("em").css("background", "url(images/brand-ico.png) no-repeat center");
    })
    $("#wta4").mouseenter(function () {
        $(this).find("em").css("background", "url(images/ui-ico-hover.png) no-repeat center");
    })
    $("#wta4").mouseleave(function () {
        $(this).find("em").css("background", "url(images/ui-ico.png) no-repeat center");
    })
    $("#wta5").mouseenter(function () {
        $(this).find("em").css("background", "url(images/ui2-ico-hover.png) no-repeat center");
    })
    $("#wta5").mouseleave(function () {
        $(this).find("em").css("background", "url(images/ui2-ico.png) no-repeat center");
    })

    $(".whattop .main>a").mouseenter(function () {
        $(this).find("p").stop().animate({
            "top": "-70px"
        }, 200);
    })
    $(".whattop .main>a").mouseleave(function () {
        $(this).find("p").stop().animate({
            "top": "0px"
        }, 200);
    })
})

//our work 部分
$(function () {
    $(".exam").eq(0).mouseenter(function () {
        $(this).addClass("on").siblings().removeClass("on");
        $(".ul-first").show();
        $(".ul-second").hide();
    });
    $(".exam").eq(1).mouseenter(function () {
        $(this).addClass("on").siblings().removeClass("on");
        $(".ul-first").hide();
        $(".ul-second").show();
    });
});

//news 部分 拉链效果
$(function () {
    var zipper = document.getElementById("zipper");
    var news = document.getElementById("news");
    var boxesDivs = zipper.children;
    /*var percent = -50;*/
    $(window).scroll(function () {
        //当前窗口底部距文档的顶部的距离
        var nowPositionY = scroll().top + client().height-80;
        //每个横条的宽度
        var boxestHeight = boxesDivs[1].offsetHeight;
        //console.log(firstHeight);
        //大盒子距文档顶部的距离
        var zipperTop = zipper.offsetTop + news.offsetTop;
        //距离差
        var subDistan = nowPositionY - zipperTop;
        //半屏宽
        var halfWidth = document.body.offsetWidth / 2;
        if (subDistan > 0 && subDistan < (boxestHeight + 12) * 5) {
            var i = Math.floor(subDistan / (boxestHeight + 12));
            var between = boxesDivs[i].children;
            var left = between[0];
            var right = between[1];
            var boxesDivsTops = boxesDivs[i].offsetTop;
            for (var j = 0; j < i; j++) {
                var preBetween = boxesDivs[j].children;
                var preLeft = preBetween[0];
                var preRight = preBetween[1];
                preLeft.style.width = halfWidth + "px";
                preRight.style.width = halfWidth + "px";
            }
            var nowHeight = subDistan - boxesDivsTops;
            var nowWidth = nowHeight / boxestHeight * halfWidth;
            if (nowWidth > halfWidth) {
                left.style.width = halfWidth + "px";
                right.style.width = halfWidth + "px";
            } else {
                left.style.width = nowWidth + "px";
                right.style.width = nowWidth + "px";
            }
        }
        if (subDistan > (boxestHeight + 12) * 5) {
            for (var k = 0; k < boxesDivs.length; k++) {
                var allBetween = boxesDivs[k].children
                var allLeft = allBetween[0];
                var allRight = allBetween[1];
                allLeft.style.width = halfWidth + "px";
                allRight.style.width = halfWidth + "px";
            }
        }
    })
})

//联系我们
$(function () {
    var map = new AMap.Map('container',{
        resizeEnable: true,
        zoom: 10,
        center: [116.480983, 40.0958],
        mapStyle:"fresh"
    });
    var marker = new AMap.Marker({
        position: [116.480983, 39.989628]
    });
    marker.setMap(map);
    map.on('click',function(e){
        infowindow.open(map,[116.480983, 39.989628]);
    })
    AMap.plugin('AMap.AdvancedInfoWindow',function(){
        infowindow = new AMap.AdvancedInfoWindow({
            content: '<div class="info-title">高德地图</div><div class="info-content">'+
            '<img src="http://webapi.amap.com/images/amap.jpg">'+
            '高德是中国领先的数字地图内容、导航和位置服务解决方案提供商。<br/>'+
            '<a target="_blank" href = "http://mobile.amap.com/">点击下载高德地图</a></div>',
            offset: new AMap.Pixel(0, -30)
        });
        infowindow.open(map,[116.480983, 39.989628]);
    })
    AMap.plugin(['AMap.ToolBar','AMap.Scale'],function(){
        var toolBar = new AMap.ToolBar();
        var scale = new AMap.Scale();
        map.addControl(toolBar);
        map.addControl(scale);
    })
})
//godown 按钮效果
$(function () {
    $(".headphoto .other .top-ico1").click(function () {
        console.log(1111);
        console.log($(".headphoto .other .top-ico1"));
        var wtScrollTop = $(".whattop")[0].offsetTop + 40;
        //$(window).scrollTop(wtScrollTop);
        godown(wtScrollTop);
    })
    $(".whattop .other .godown").click(function () {
        console.log(111);
        var wtScrollTop = $(".ourwork")[0].offsetTop + 40;
        //$(window).scrollTop(wtScrollTop);
        godown(wtScrollTop);
    })
    $(".ourwork .other .godown").click(function () {
        var wtScrollTop = $(".news")[0].offsetTop + 40;
        //$(window).scrollTop(wtScrollTop);
        godown(wtScrollTop);
    })
    $(".news .other .godown").click(function () {
        var wtScrollTop = $(".contactus")[0].offsetTop + 40;
        //$(window).scrollTop(wtScrollTop);
        godown(wtScrollTop);
    })
})

//电梯导航 liftnva 效果
$(function () {
    $(".liftnav .lnli1").click(function () {
        godown(0);
    });
    $(".liftnav .lnli2").click(function () {
        $(".headphoto .other .top-ico1").click();
    });
    $(".liftnav .lnli3").click(function () {
        $(".whattop .other .godown").click();
    });
    $(".liftnav .lnli4").click(function () {
        $(".ourwork .other .godown").click();
    });
    $(".liftnav .lnli5").click(function () {
        $(".news .other .godown").click();
    });

    $(window).scroll(function () {
        if (scroll().top < $(".whattop")[0].offsetTop - 150) {
            $(".liftnav").css("display", "none");
        } else {
            $(".liftnav").css("display", "block");
            if (scroll().top > $(".whattop")[0].offsetTop - 150) {
                $(".liftnav em").css("display", "none");
                $(".lnli2 .nav-ico").css("display", "block");
            }
            if (scroll().top > $(".ourwork")[0].offsetTop - 150) {
                $(".liftnav em").css("display", "none");
                $(".lnli3 .nav-ico").css("display", "block");
            }
            if (scroll().top > $(".news")[0].offsetTop - 150) {
                $(".liftnav em").css("display", "none");
                $(".lnli4 .nav-ico").css("display", "block");
            }
            if (scroll().top > $(".contactus")[0].offsetTop - 150) {
                $(".liftnav em").css("display", "none");
                $(".lnli5 .nav-ico").css("display", "block");
            }
        }
    })
    $(".liftnav li").mouseenter(function () {
        $(this).find("em").css("display", "block");
    })
    $(".liftnav li").mouseleave(function () {
        $(this).find("em").css("display", "none");
    })

})

//封装 下拉箭头 动画效果
var timer = null;
function godown(wtScrollTop) {
    clearInterval(timer);
    timer = setInterval(function () {
        var target = wtScrollTop;
        var leader = scroll().top;
        var step = (target - leader) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        leader = leader + step;
        $(window).scrollTop(leader);
        if (leader === target) {
            clearInterval(timer);
        }
    }, 15);
}

