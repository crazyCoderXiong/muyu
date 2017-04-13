//图一轮播图
window.onload = function () {
    var banner = document.getElementById("banner");
    var ul = banner.children[0];
    var ol = banner.children[1];
    var ullis = ul.children;
    for (var i = 0; i < ullis.length; i++) {
        var li = document.createElement("li");
        ol.appendChild(li);
    }
    var ollis = ol.children;
    ollis[0].id = "ol-current";
    var firstImg = ullis[0].cloneNode(true);
    ul.appendChild(firstImg);
    var pp = 0;
    var square = 0;
    setInterval(function () {
        if (pp === ullis.length - 1) {
            ul.style.left = banner.offsetLeft + "px";
            pp = 0;
        }
        pp++;
        ul.style.left = -pp * banner.offsetWidth + "px";
        if (square < ollis.length - 1) {
            square++;
        } else {
            square = 0;
        }
        for (var i = 0; i < ollis.length; i++) {
            ollis[i].id = "";
        }
        ollis[square].id = "ol-current";
    }, 2000);
//点击按钮，变换对应内容
    var pic = document.getElementById("pic");
    var picText = document.getElementById("pic-text");
    var picul = pic.children[0];
    var picullis = picul.children;
    var imgages = picText.children;
    for (var i = 0; i < picullis.length; i++) {
        picullis[i].index = i;
        picullis[i].onclick = function () {
            for (var i = 0; i < picullis.length; i++) {
                picullis[i].children[0].src = "images/xico" + (i + 2) + ".png";
            }
            for (var i = 0; i < imgages.length; i++) {
                imgages[i].style.display = "none";
            }
            imgages[this.index].style.display = "block";
            picullis[this.index].children[0].src = "images/xico" + (this.index + 2) + "-hover.png";
        };
    }
//    背景三轮播图
    var timer = null;
    var screen = document.getElementById("screen");
    var screenul = screen.children[0];
    var screenlis = screenul.children;
    var screenfirst = screenlis[0].cloneNode(true);
    screenul.appendChild(screenfirst);
//    左右三角
    var arr = document.getElementById("arr");
    var left = document.getElementById("left");
    var right = document.getElementById("right");
    var arrpic = 0;
    screen.onmouseover = function () {
        clearInterval(timer);
    };
    screen.onmouseout = function () {
        timer = setInterval(right.onclick, 3000);
    };
    right.onclick = function () {
        if (arrpic === screenlis.length - 2) {
            screenul.style.left = screen.offsetLeft + "px";
            arrpic = -1;
        }
        arrpic++;
        screenul.style.left = -screenlis[0].offsetWidth * arrpic + "px";
    };
    left.onclick = function () {
        if (arrpic === 0) {
            screenul.style.left = screenlis[screenlis.length - 1].offsetLeft + "px";
            arrpic = screenlis.length - 1;
        }
        arrpic--;
        screenul.style.left = -screenlis[0].offsetWidth * arrpic + "px";
    };
    timer = setInterval(right.onclick, 3000);
//向下三角，转换页面位置
    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");
    var btn3 = document.getElementById("btn3");
    //三角动画
    $("#btn1").click(function () {
        $("body").animate({"scrollTop": 820}, 1000);
    });
    $("#btn2").click(function () {
        $("body").animate({"scrollTop": 1580}, 1000);
    });
    $("#btn3").click(function () {
        $("body").animate({"scrollTop": 2300}, 1000);
    });
    //背景图片四中，更多设置，改变透明度
    var back4 = document.getElementById("back4");
    var more = back4.children[2];
    $(".back4 a").mouseenter(function(){
        $(this).animate({"opacity": 0.8},500);
    });
    $(".back4 a").mouseleave(function(){
        $(this).animate({"opacity": 1},500);
    });
    //获取导航栏元素
    var topNav = document.getElementById("top-nav");
    //右侧咨询
    var topcontrol = document.getElementById("topcontrol");
    var aes = topcontrol.children;
    window.onscroll = function () {
        if (scroll().top > 100) {
            animate(topcontrol, {"right": 0});
            //topNav.style.display = "none";
        } else {
            animate(topcontrol, {"right": -200})
            //topNav.style.display = "block";
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
    function onmouseout() {
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


    //底部电话号码的缓动
    var footTelephone = document.getElementById("foottelephone");
    var count = 0;
    setInterval(function () {
        count++;
        animate(footTelephone, {"top": -24 * count}, function () {
            if (count >= 2) {
                footTelephone.style.top = 0;
                count = 0;
            }
        })
    }, 2000)

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

}
