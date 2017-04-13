//轮播效果

window.onload = function () {

    //我们的客户
    //小三角,进过变色
    var topico4 = document.getElementById("topico4");
    var tFocus = document.getElementById("tFocus");
    //箭头
    var arrowleft = document.getElementById("arrowleft");
    var arrowright = document.getElementById("arrowright");

    topico4.onmouseover = function () {
        this.style.background = "url(images/top-ico4-hover.png)";
    };
    topico4.onmouseout = function () {
        this.style.background = "url(images/top-ico4.png)";
    };
    //点击
   /* var timer = null;
    topico4.onclick = function () {
        var topHeight = document.getElementById("top-nav").offsetHeight;
        var mainHeight = document.getElementById("mainheight").offsetHeight;
        timer = setInterval(function () {
            var leader = scroll().top;
            var target = topHeight + mainHeight;
            var step = (target - leader) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            leader = leader + step;
            window.scrollTo(0, leader);
            if(leader===target){
                clearInterval(timer);
            }
        }, 15)
    };*/
    //经过盒子显示箭头
    /*  tFocus.onmouseover= function () {
     arrowleft.style.display="block";
     arrowright.style.display="block";
     };

     //经过箭头变色
     arrowleft.onmouseover= function () {
     arrowleft.style.background="url(images/img-btn-hover.png)";
     }
     arrowleft.onmouseover= function () {
     arrowleft.style.background="url(images/img-btn.png)";
     }
     arrowright.onmouseover= function () {
     arrowright.style.background="url(images/img-btn-hover2.png)";
     }
     arrowright.onmouseover= function () {
     arrowright.style.background="url(images/img-btn2.png)";
     }
     tFocus.onmouseout= function () {
     arrowleft.style.display="none";
     arrowright.style.display="none";
     };
     */

    //客户的声音--轮播效果
    //找人
    var timer = null;
    var picul = document.getElementById("tFocus-pic");
    var picLis = picul.children;//所以得文字
    var btnul = document.getElementById("tFocus-btn").children[0];
    var btnLis = btnul.children;//所以得图片

    //设置当前高亮
    btnLis[0].style.background = "url(images/c_bg2.png) no-repeat";
    // btnLis[1].style.background="url(images/c_bg2.png) no-repeat";

    //鼠标经过当前高亮
    for (var i = 0; i < btnLis.length; i++) {
        btnLis[i].index = i;
        btnLis[i].onmouseover = function () {
            //干掉所有人
            for (var j = 0; j < btnLis.length; j++) {
                btnLis[j].style.background = "url(images/c_bg1.png) no-repeat";
            }
            //留下我自己
            this.style.background = "url(images/c_bg2.png) no-repeat";
            //轮播到相应位置
            for (var k = 0; k < picLis.length; k++) {
                picLis[k].style.opacity = "0";
            }
            animate(picLis[this.index], {"opacity": 1});
            pic = this.index;
        };
    }


    //点击右箭头，
    var pic = 0;
    arrowright.onclick = function () {
        //显示最后一个
        if (pic === btnLis.length - 2) {
            btnul.style.left = "-91px"
        }
        if (pic === btnLis.length - 1) {
            btnul.style.left = "0px"
        }

        if (pic === picLis.length - 1) {
            pic = -1;
        }
        pic++;
        for (var k = 0; k < picLis.length; k++) {
            picLis[k].style.opacity = "0";
        }
        animate(picLis[pic], {"opacity": 1});
        //统一变动
        for (var j = 0; j < btnLis.length; j++) {
            btnLis[j].style.background = "url(images/c_bg1.png) no-repeat";
        }
        //留下我自己
        btnLis[pic].style.background = "url(images/c_bg2.png) no-repeat";

    };

    //点击左箭头

    arrowleft.onclick = function () {
        //显示最后一个
        if (pic === 0) {
            btnul.style.left = "-91px"
        }
        if (pic === 1) {
            btnul.style.left = "0px"
        }
        if (pic === 0) {
            pic = picLis.length;
        }
        pic--;
        for (var k = 0; k < picLis.length; k++) {
            picLis[k].style.opacity = "0";
        }
        animate(picLis[pic], {"opacity": 1});
        //统一变动
        for (var j = 0; j < btnLis.length; j++) {
            btnLis[j].style.background = "url(images/c_bg1.png) no-repeat";
        }
        //留下我自己
        btnLis[pic].style.background = "url(images/c_bg2.png) no-repeat";
    };

    //经过停止轮播，离开继续
    tFocus.onmouseover = function (event) {
        var event = event || window.event;
        event.stopPropagation();
        clearInterval(timer);
    };
    tFocus.onmouseout = function (event) {
        var event = event || window.event;
        event.stopPropagation();
        timer = setInterval(arrowright.onclick, 2000);
    };
    timer = setInterval(arrowright.onclick, 2000);


    //如果页面有被卷去的头部，导航栏和logo就隐藏
    var topNav = document.getElementById("top-nav");
    window.onscroll = function () {
        if (scroll().top > 0) {
            topNav.style.display = "none";
        } else {
            topNav.style.display = "block";
        }
    };

    //鼠标移动改变文字
    var navlis = document.getElementsByClassName("nav-li");
    //console.log(navli);
    for (var i = 0; i < navlis.length; i++) {
        navlis[i].onmouseover = function () {
            animate(this, {"marginTop": -20})
        };
    }
    for (var i = 0; i < navlis.length; i++) {
        navlis[i].onmouseout = function () {
            animate(this, {"marginTop": 0})
        };
    }

    //鼠标移动图片上，文字显示
    var iconbarUl = document.getElementById("iconbar");
    var spans = iconbarUl.getElementsByTagName("span");
    console.log(spans);
    var iconbarLis = iconbarUl.children;

    for (var i = 0; i < iconbarLis.length; i++) {
        iconbarLis[i].index = i;
        iconbarLis[i].onmousemove = function () {
            animate(spans[0], {"width": 130})
        };
    }


    //底部的QQ  WX  WB
    var QQ = document.getElementsByClassName("QQ")[0];
    var WX = document.getElementsByClassName("WX")[0];
    var WB = document.getElementsByClassName("WB")[0];

    QQ.onmouseover = function () {
        this.src = "images/QQ-ICO-HOVER.png";
    };

    QQ.onmouseout = function () {
        this.src = "images/QQ-ICO.png";
    };

    WX.onmouseover = function () {
        this.src = "images/WX-ICO-HOVER.png";
    };

    WX.onmouseout = function () {
        this.src = "images/WX-ICO.png";
    };

    WB.onmouseover = function () {
        this.src = "images/WB-ICO-HOVER.png";
    };

    WB.onmouseout = function () {
        this.src = "images/WB-ICO.png";
    };


    /*    //缓动动画函数
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
     }*/

    //封装 可以获取任意浏览器中页面滚动坐标的兼容函数
    function scroll() {
        return {
            top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
            left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
        };
    }

    function getStyle(obj, attr) {
        if (window.getComputedStyle) {
            return window.getComputedStyle(obj, null)[attr];
        } else {
            return obj.currentStyle[attr];
        }
    }

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
};



