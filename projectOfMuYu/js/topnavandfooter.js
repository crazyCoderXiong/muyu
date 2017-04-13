/**
 * Created by liuyong on 2016/11/15.
 */
window.onload = function () {
    //��ȡ������Ԫ��
    var topNav = document.getElementById("top-nav");
    var mutop = document.getElementById("mutop");
    //�Ҳ���ѯ
    var topcontrol = document.getElementById("topcontrol");
    var aes = topcontrol.children;
    window.onscroll = function () {
        if (scroll().top > 100) {
            animate(topcontrol, {"right": 0});
            topNav.style.display = "none";
            mutop.style.marginTop = "70px";
        } else {
            animate(topcontrol, {"right": -200})
            topNav.style.display = "block";
            mutop.style.marginTop = "0";
        }
    };
    aes[0].onmouseover = function () {
        this.children[0].src = "images/menu-hover.png";
    };
    aes[0].onmouseout = function () {
        this.children[0].src = "images/menu.png";
    };
    //ҳ���Ҳ�˵���ť��Ч��
    $(function () {
        var topcontrolImg = $("#topcontrol>a:eq(0)>img")
        $(topcontrolImg).click(function () {
            $("#top-nav").slideDown();
        })
    })
    aes[1].onmouseover = function () {
        this.children[0].src = "images/menu2-hover.png";
    };
    aes[1].onmouseout = function () {
        this.children[0].src = "images/menu2.gif";
    };

    //������뵽�����Ҳ��ͼƬ�ϣ�������ʾ
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

    //�������ı䵼�������ָ���
    var navlis = document.getElementsByClassName("nav-li");
    for (var i = 0; i < navlis.length; i++) {
        navlis[i].onmouseover = function () {
                animate(this, {"marginTop": -20})
        };
    }

    //����Ƴ������������ָֻ��ĺ���
    function onmouseout() {
        for (var i = 0; i < navlis.length; i++) {
            navlis[i].onmouseout = function () {
                    animate(this, {"marginTop": 0})
            };
        }
    }

    onmouseout();


    //�����������������֮�󣬵�ǰ���ָ���
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


    //�ײ��绰����Ļ���
    var footTelephone = document.getElementById("foottelephone");
    var count = 0;
    setInterval(function () {
        count++;
        animate(footTelephone, {"top": -24 * count}, function () {
            if (count > 2) {
                footTelephone.style.top = 0;
                count = 0;
            }
        })
    }, 2000)


    //�ײ���QQ  WX  WB
    var QQ = document.getElementsByClassName("QQ")[0];
    var WX = document.getElementsByClassName("WX")[0];
    var WB = document.getElementsByClassName("WB")[0];

    QQ.onmouseover = function () {
        this.src = "images/QQ-ICO-HOVER.png";
    };

    QQ.onmouseout = function () {
        this.src = "images/QQ-ICO2.png";
    };

    WX.onmouseover = function () {
        this.src = "images/WX-ICO-HOVER.png";
    };

    WX.onmouseout = function () {
        this.src = "images/WX-ICO2.png";
    };

    WB.onmouseover = function () {
        this.src = "images/WB-ICO-HOVER.png";
    };

    WB.onmouseout = function () {
        this.src = "images/WB-ICO2.png";
    };

    //������������
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
            if (flag) {//�����Ȼ��true ˵��������
                clearInterval(obj.timer);//����ʱ��
                if (fn) {//����вŵ���
                    fn();//����ִ����ɺ� ��ִ�д���Ļص�����
                }
            }
        }, 15);
    }

    //��ȡ�������ʽ���Եļ��ݺ��� �ܹ���ȡ����������������
    function getStyle(obj, attr) {
        if (window.getComputedStyle) {
            return window.getComputedStyle(obj, null)[attr];
        } else {
            return obj.currentStyle[attr];
        }
    }

    //��װ ���Ի�ȡ�����������ҳ���������ļ��ݺ���
    function scroll() {
        return {
            top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
            left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
        };
    }
};


