/**
 * Created by KDreaming on 2016/11/17.
 */
$(function () {
    //banner 部分的向下箭头
    var bannerPd = document.getElementById("banner-pd").children[0];
    var solution = document.getElementById("solution");
    var maincases = document.getElementById("maincases");
    var techTeam = document.getElementById("tech-team");
    var foot = document.getElementById("foot");
    var solutionPd = document.getElementById("solution-pd").children[0];
    var maincasesPd = document.getElementById("maincases-pd").children[0];
    var techTeamPd = document.getElementById("tech-team-pd").children[0];
    var timer1 = null;
    var timer2 = null;
    var timer3 = null;
    var timer4 = null;

    window.onscroll = function () {
        clearInterval(timer1);
        clearInterval(timer2);
        clearInterval(timer3);
        clearInterval(timer4);
    };
    bannerPd.onmouseover = function () {
        animate(this, {"opacity": 1});
    };
    bannerPd.onmouseout = function () {
        animate(this, {"opacity": 0});
    };
    bannerPd.onclick = function () {
        clearInterval(timer1);
        timer1 = setInterval(function () {
            var leader = scroll().top;
            var target = solution.offsetTop;
            var step = (target - leader) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            leader = leader + step;
            window.scrollTo(0, leader);
            if (target === leader) {
                clearInterval(timer1);
            }
        }, 15);
    };
    //解决方案部分的向下箭头
    solutionPd.onmouseover = function () {
        animate(this, {"opacity": 1});
    };
    solutionPd.onmouseout = function () {
        animate(this, {"opacity": 0});
    };
    solutionPd.onclick = function () {
        clearInterval(timer2);
        timer2 = setInterval(function () {
            var leader = scroll().top;
            var target = maincases.offsetTop;
            var step = (target - leader) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            leader = leader + step;
            window.scrollTo(0, leader);
            if (target === leader) {
                clearInterval(timer2);
            }
        }, 15);

    };
    //主要案例部分的向下箭头
    maincasesPd.onmouseover = function () {
        animate(this, {"opacity": 1});
    };
    maincasesPd.onmouseout = function () {
        animate(this, {"opacity": 0});
    };
    maincasesPd.onclick = function () {
        clearInterval(timer3);
        timer3 = setInterval(function () {
            var leader = scroll().top;
            var target = techTeam.offsetTop;
            var step = (target - leader) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            leader = leader + step;
            window.scrollTo(0, leader);
            if (target === leader) {
                clearInterval(timer3);
            }
        }, 15);
    };
    //技术团队部分的向下箭头
    techTeamPd.onmouseover = function () {
        animate(this, {"opacity": 1});
    };
    techTeamPd.onmouseout = function () {
        animate(this, {"opacity": 0});
    };
    techTeamPd.onclick = function () {
        clearInterval(timer4);
        timer4 = setInterval(function () {
            var leader = scroll().top;
            var target = foot.offsetTop - 425;
            var step = (target - leader) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            leader = leader + step;
            window.scrollTo(0, leader);
            if (target === leader) {
                clearInterval(timer4);
            }
        }, 15);
    };
    //----------------------主要案例部分-----------------------------------
    $("#content1").mouseenter(function () {
        $("#content1>img:eq(0)").stop().slideUp(50);
    });
    $("#content1").mouseleave(function () {
        $("#content1>img:eq(0)").stop().slideDown(50);
    });
    $("#content2").mouseenter(function () {
        $("#content2>img:eq(0)").stop().slideUp(50);
    });
    $("#content2").mouseleave(function () {
        $("#content2>img:eq(0)").stop().slideDown(50);
    });
    $("#content3").mouseenter(function () {
        $("#content3>img:eq(0)").stop().slideUp(50);
    });
    $("#content3").mouseleave(function () {
        $("#content3>img:eq(0)").stop().slideDown(50);
    });
});

$(function () {


    $('span.mask').hover(
        function () {
            $(this).siblings('a img').addClass('hovering');
            $(this).parent().siblings(".portfolio-title").children("h4").stop().animate({
                top: -20
            }, 350);
        },
        function () {
            $(this).siblings('a img').removeClass('hovering');
            $(this).parent().siblings(".portfolio-title").children("h4").stop().animate({
                top: 0
            }, 350);
        }
    );


});


//缓动动画函数
function animate(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for (var k in json) {
            if (k === "opacity") {//单独处理透明度
                //var leader = parseInt(getStyle(obj, k)) || 0;
                var leader = getStyle(obj, k) * 100;//透明度没有单位的 也不用parseInt
                //没必要给默认值 也不应该给
                var target = json[k] * 100;
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader / 100;
                //之前扩大100倍 现在缩小100倍数 透明度没有单位
            } else if (k === "zIndex") {//层级也要特殊处理
                obj.style.zIndex = json[k];//层级不需要渐变 直接设置成目标值
            } else {
                var leader = parseInt(getStyle(obj, k)) || 0;
                var target = json[k];
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader + "px";
            }
            if (leader !== target) {
                flag = false;
            }
        }
        if (flag) {//最后任然是true 说明都到了
            clearInterval(obj.timer);//清理定时器
            if (fn) {//如果有才调用
                fn();//动画执行完成后 会执行传入的回调函数
            }
        }
    }, 15);
}

//获取计算后样式属性的兼容函数 能够获取任意对象的任意属性
function getStyle(obj, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj, null)[attr];
    } else {
        return obj.currentStyle[attr];
    }
}

//封装 可以获取任意浏览器中页面滚动坐标的兼容函数
function scroll() {
    return {
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    };
}
