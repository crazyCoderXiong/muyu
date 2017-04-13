/**
 * Created by liuyong on 2016/11/15.
 */
window.onload = function () {
    //获取导航栏元素
    var topNav = document.getElementById("top-nav");
    //右侧咨询
    var topcontrol = document.getElementById("topcontrol");
    var aes = topcontrol.children;
    window.onscroll = function () {
        if (scroll().top > 100) {
            animate(topcontrol, {"right": 0});
            topNav.style.display = "none";
        } else{
            animate(topcontrol, {"right": -200})
            topNav.style.display = "block";
        }
    };
    aes[0].onmouseover = function () {
        this.children[0].src = "images/menu-hover.png";
    };
    aes[0].onmouseout = function () {
        this.children[0].src = "images/menu.png";
    };
    //页面右侧菜单按钮的效果
    $(function () {
        var topcontrolImg = $("#topcontrol>a:eq(0)>img")
        $(topcontrolImg).click(function () {
            console.log(1111);
            $("#top-nav").slideDown();
        })
    })
    aes[1].onmouseover = function () {
        this.children[0].src = "images/menu2-hover.png";
    };
    aes[1].onmouseout = function () {
        this.children[0].src = "images/menu2.gif";
    };

    //鼠标移入到导航右侧的图片上，文字显示
    var iconbarUl = document.getElementById("iconbar");
    var spans = iconbarUl.getElementsByTagName("span");
    var imgs = iconbarUl.getElementsByTagName("img");
    var iconbarLis = iconbarUl.children;
    var imgSrc = null;
    for (var i = 0; i < iconbarLis.length; i++) {
        iconbarLis[i].index = i;
        iconbarLis[i].onmouseover = function () {
            spans[this.index].style.display = "inline-block";
            var liWidth = spans[this.index].parentNode.offsetWidth;
            imgSrc = imgs[this.index].src
            this.className = "li-bg";
            imgs[this.index].src = imgSrc.replace(".png", "") + "o.png";
            animate(this, {"width": liWidth});

        }
        iconbarLis[i].onmouseout = function () {
            spans[this.index].style.display = "none";
            // var liWidth = spans[this.index].parentNode.offsetWidth;
            //console.log(liWidth);
            animate(this, {"width": 31});
            imgs[this.index].src = imgSrc;
            this.className = "";
        }
    }

    //鼠标移入改变导航栏文字高亮
    var navlis = document.getElementsByClassName("nav-li");
    for (var i = 0; i < navlis.length; i++) {
        navlis[i].onmouseover = function () {
            animate(this, {"marginTop": -20})
        };
    }

    //鼠标移出导航栏，文字恢复的函数
    function onmouseout(){
        for (var i = 0; i < navlis.length; i++) {
            navlis[i].onmouseout = function () {
                animate(this, {"marginTop": 0})
            };
        }
    }
    onmouseout();


    //鼠标点击导航栏的文字之后，当前文字高亮
    for (var i = 0; i < navlis.length; i++) {
        navlis[i].onclick = function () {
            for (var i = 0; i < navlis.length; i++) {
                navlis[i].style.marginTop = 0;
                onmouseout();
            }
            this.style.marginTop = "-20px";
            this.onmouseout = null;
        };
    }


    //底部电话号码的缓动//将延时定时器封装，添加了鼠标经过，停止滚动的功能
    var footTelephone = document.getElementById("foottelephone");
    var foothide = footTelephone.parentNode;
    var count = 0;
    var timerId=null;
    function delay(){
        timerId = setInterval(function () {
            count++;
            animate(footTelephone, {"top": -24 * count}, function () {
                if (count > 1) {
                    footTelephone.style.top = 0;
                    count = 0;
                }
            })
        }, 2000)
    }
    delay();
    foothide.onmouseover= function () {
        clearTimeout(timerId);
    }

    foothide.onmouseout = function () {
        delay();
    }

    ////底部的QQ  WX  WB
    //var QQ = document.getElementsByClassName("QQ")[0];
    //var WX = document.getElementsByClassName("WX")[0];
    //var WB = document.getElementsByClassName("WB")[0];
    //
    //QQ.onmouseover = function () {
    //    this.src = "images/QQ-ICO-HOVER.png";
    //};
    //
    //QQ.onmouseout = function () {
    //    this.src = "images/QQ-ICO2.png";
    //};
    //
    //WX.onmouseover = function () {
    //    this.src = "images/WX-ICO-HOVER.png";
    //};
    //
    //WX.onmouseout = function () {
    //    this.src = "images/WX-ICO2.png";
    //};
    //
    //WB.onmouseover = function () {
    //    this.src = "images/WB-ICO-HOVER.png";
    //};
    //
    //WB.onmouseout = function () {
    //    this.src = "images/WB-ICO2.png";
    //};

    //缓动动画函数
    function animate(obj, json, fn) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var flag = true;
            for (var k in json) {
                var leader = parseInt(getStyle(obj, k)) || 0;
                var target = json[k];
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader + "px";
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
};


