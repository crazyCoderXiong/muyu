
$(function () {
    //我们的客户
    //经过小三角

    $("#topico4").mouseenter(function () {
        $(this).css("background","url(images/top-ico4-hover.png) no-repeat")
    })
    //离开小三角
    $("#topico4").mouseleave(function () {
        $(this).css("background","url(images/top-ico4.png) no-repeat")
    })
    //点击小三角
    $("#topico4").click(function () {
        $("body").animate({"scrollTop":"810px"})
    })

    //客户的声音
    //经过三角
    $("#tFocus").mouseenter(function () {
        $("#arrowleft").css("display","block");
        $("#arrowright").css("display","block");
    })
    $("#arrowleft").mouseenter(function () {
        $("#arrowleft").css("background","url(images/img-btn-hover.png) no-repeat");
    })
    $("#arrowleft").mouseleave(function () {
        $("#arrowleft").css("background","url(images/img-btn.png) no-repeat");
    })
    $("#arrowright").mouseenter(function () {
        $("#arrowright").css("background","url(images/img-btn-hover2.png) no-repeat");
    })
    $("#arrowright").mouseleave(function () {
        $("#arrowright").css("background","url(images/img-btn2.png) no-repeat");
    })
    $("#tFocus").mouseleave(function () {
        $("#arrowleft").css("display","none");
        $("#arrowright").css("display","none");
    })

    //圆圈
    //设置第一个背景图为蓝色
    $("#tFocus-btn>ul>li:eq(0)").css("background","url(images/c_bg2.png) no-repeat");
    //鼠标经过当前显示蓝色
    $("#tFocus-btn>ul>li").mouseenter(function () {
        var index=$(this).index();
        $(this).css("background","url(images/c_bg2.png) no-repeat");
        $(this).siblings().css("background","url(images/c_bg1.png) no-repeat");
        //对应文字显示

        $("#tFocus-pic>li").eq(index).stop().animate({"opacity":"1"});
        $("#tFocus-pic>li").eq(index).siblings().stop().animate({"opacity":"0"});
        pic=index;
    });

    //点击右箭头
    var pic=0;
    $("#arrowright").click(function () {
        //显示最后一个
        if(pic===$("#tFocus-pic>li").length-2){
            $("#tFocus-btn>ul").css("left","-91px");
        }
        if(pic===$("#tFocus-pic>li").length-1){
            $("#tFocus-btn>ul").css("left","0px");
        }
        if(pic===$("#tFocus-pic>li").length-1){
            pic=-1;
        }
        pic++;
        $("#tFocus-pic>li").eq(pic).stop().animate({"opacity":"1"});
        $("#tFocus-pic>li").eq(pic).siblings().stop().animate({"opacity":"0"});
        //显示对应圆圈
        $("#tFocus-btn>ul>li").eq(pic).css("background","url(images/c_bg2.png) no-repeat");
        $("#tFocus-btn>ul>li").eq(pic).siblings().css("background","url(images/c_bg1.png) no-repeat");

    });

    //点击左箭头
    $("#arrowleft").click(function () {
        //显示最后一个
        if(pic===0){
            $("#tFocus-btn>ul").css("left","-91px");
        }
        if(pic===1){
            $("#tFocus-btn>ul").css("left","0px");
        }

        if(pic===0){
            pic=$("#tFocus-pic>li").length;
        }
        pic--;
        $("#tFocus-pic>li").eq(pic).stop().animate({"opacity":"1"});
        $("#tFocus-pic>li").eq(pic).siblings().stop().animate({"opacity":"0"});
        //显示对应圆圈
        $("#tFocus-btn>ul>li").eq(pic).css("background","url(images/c_bg2.png) no-repeat");
        $("#tFocus-btn>ul>li").eq(pic).siblings().css("background","url(images/c_bg1.png) no-repeat");
    });
    //定时器
    var timer=0;
    timer = setInterval(function () {
        $("#arrowright").click();
    },2000);
    //经过停止
    $("#tFocus").mouseenter(function () {
        clearInterval(timer);
    });
    //离开继续
    $("#tFocus").mouseleave(function () {
        timer = setInterval(function () {
            $("#arrowright").click();
        },2000);
    })

})
