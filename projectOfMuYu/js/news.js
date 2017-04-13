/**
 * Created by Sun59 on 2016/11/16.
 */
$(document).ready(function () {
    $(".news-nav>ul>li").click(function () {
        var idx = $(this).index();
        var $item = $(".news-nav").siblings();
        $item.eq(idx).slideDown(3000).siblings("div").hide();
        $(".news-nav").show();
        $(".news-nav>ul>li")
        $(this).addClass("current");
        $(this).siblings().removeClass("current");
    });
	var navlis = document.getElementsByClassName("nav-li");
	console.log($(".M-nav .nav-li")[7]);
	//$(".M-nav .nav-li")[7].onmouseout = null;
	$(".M-nav .nav-li")[7].style.marginTop = "-20px";
})



 /*function onmouseout(){
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
    }*/