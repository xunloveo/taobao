/**
 * Created by Administrator on 2017/6/6.
 */
// 头部的js
$(function () {
    // 广告效果
    $(".top-bigad .close-ad").click(function(){
        $(this).hide();
       $(".top-bigad img").animate({
            "left": "50%",
            "top": "50%",
            "width": 0,
            "height": 0
        },2000);
        $(".top-bigad-bd").hide(2000);
    });

    // 倒计时效果
    var endTime = new Date("2017/6/18 00:00:00");
    function godown(){
        var startTime = new Date();
        // 获取秒差
        var second = parseInt((endTime.getTime()-startTime.getTime())/1000);
        var s = parseInt(second % 60);
        var m = parseInt(second / 60 % 60);
        var h = parseInt(second / 3600 % 24);
        var d = parseInt(second / 3600 / 24);
        s = s >= 10 ? s : "0"+ s;
        m = m >= 10 ? m : "0"+ m;
        h = h >= 10 ? h : "0"+ h;
        d = d >= 10 ? d : "0"+ d;
        $(".countdown").html("<b>618</b><br>抢购<br>倒计时<br><span>"+ d +"</span><i>天</i><br><span>"
            + h + "</span><i>时</i><br><span>"+m+"</span><i>分</i><br><span>"+s+"</span><i>秒</i>");
        // 随机颜色
        var rc = parseInt(Math.random() * 256);
        var gc = parseInt(Math.random() * 256);
        var bc = parseInt(Math.random() * 256);
        $(".countdown b").css("color","rgb("+rc+","+gc+","+bc+")");
    }
    godown();
    setInterval(godown,1000);






    // 搜索框的tab切换
    $(".search-tab").on("click", "li", function () {
        $(this).addClass("selected")
            .siblings().removeClass("selected").removeClass("selected1");
        var index = $(this).index();
        if (index == 0) {
            $(".search-inp label").html("耳机头戴式");
        }
        if (index == 2) {
            $(".search-inp label").html("");
        }
        if (index == 1) {
            $(".search-inp label").html("简约卧室灯");
        }
        if (index == 1) {
            $(this).addClass("selected1");
            $(".search-inp").addClass("search-inp-borcol");
            $(".btn").addClass("btnbg");
            $(".hotwords-sline").show(1000);
            $(".hotwords-fline").hide(1000);
        } else {
            $(".search-inp").removeClass("search-inp-borcol");
            $(".btn").removeClass("btnbg");
            $(".hotwords-sline").hide(1000);
            $(".hotwords-fline").show(1000);
        }
    });




    // 当输入的时候隐藏
    $(".search-inp input").keydown(function () {
        $(".search-icon").hide();
        $(".search-inp label").hide();
        $(".search-recen").hide();

});
// 输入框为空键盘抬起的时候的时候显现
$(".search-inp input").keyup(function () {
    if ($(this).val() == "") {
        $(".search-icon").show();
        $(".search-inp label").show();
        if ($(".search-recen p").length > 1) {
            $(".search-recen").show();
        }
    }
});

// input的自动完成功能
var data = ["javascript从入门到精通", "java", "html5+css3从入门到精通", "html5教程", "jquery" +
"教程", "jquery插件库"];
$(".search-inp input").autocomplete(
    {
        source: data
    }
);


// 点击搜索或者鼠标按回车的时候给最近搜过的div动态增加内容
$(".search-btn .btn").click(function (e) {
    e.preventDefault();
    if ($(".search-inp #inp") != "") {
        $(".logo-search-bd").css("overflow", "visible");
        $(".search-recen").append("<p>" + $(".search-inp #inp").val() + "<span class='del'>删除</span></p>");
    }
});


//   input的focus事件
$(".search-inp #inp").focus(function () {
    if($(".search-recen p").length > 1 && $(this).val() == "") {
        $(".search-recen").show();
    }
    else {
        $(".search-recen").hide();
    }
});
/*$(".search-inp").click(function(){
    if($(".search-recen p").length > 1 && $(this).find("input").val() == "") {
        $(".search-recen").show();
    }
    else {
        $(".search-recen").hide();
    }
});*/

// 点击删除的时候删除当前行
$(".search-recen").on("click", ".del", function () {
    // 失去焦点的时候
    $(this).parent().remove();
    $(".search-recen").hide();

});
$("body").not(".search-recen").click(function () {
    $(".search-recen").hide();
});



//  关闭二维码
$(".close").click(function () {
    $(this).parent().hide();
});

// 点击切换
$(".search-tabs").on("click", "li", function () {
    /*// 给大的input设置
    var index = $(this).index();
    //alert(index);
    //$(".search-tab").on("click","li:eq("+index+")");
    if(index == 1){
        $(".search-tab li:eq(1)").triggerHandler("")
    }*/


    if ($(this).text() == "天猫") {
        $(".mini .search-inp").addClass("search-inp-borcol");
        $(".mini .btn").addClass("btnbg");
    } else {
        $(".mini .search-inp").removeClass("search-inp-borcol");
        $(".mini .btn").removeClass("btnbg");
    }
    $(".search-tabs").prepend($(this).clone(true));
    $(".search-tabs li").css(
        {
            "background-color": "#f6f6f6",
            "line-height": "29px",
            "width": "73px",
            "text-align": "center",
            "color": "#f40",
            "list-style": "none"
        }
    );
    $(this).remove();
    $(".search-tabs li:first").css("color", "#000");

});

$(".search-tabs li").mouseover(function () {
    if ($(this).text() == "天猫" && $(this).index() != 0) {
        $(this).css("color", "#c60000");
    }

}).mouseout(function () {
    if ($(this).text() == "天猫" && $(this).index() != 0) {
        $(this).css("color", "#f40");
    }
});

// 用json存储方式 封装 兼容性问题
    function scroll(){
        if(window.pageYOffset !=null ){ // 支持ie9以上 和其它浏览器
            return{
                left:window.pageXOffset,
                top:window.pageYOffset
            }
        }
        else if(document.compatMode == "CSS1Compat"){ //声明了文档dtd
            // 检测是不是怪异模式的浏览器 是不是没有声明 <!DOCTYPE html>
            return{
                left:document.documentElement.scrollLeft,
                top:document.documentElement.scrollTop
            }
        }
        else{
            return{
                left:document.body.scrollLeft,
                top:document.body.scrollTop
            }
        }
    }
// 滚动事件
$(window).scroll(function () {
    // console.log($("body").scrollTop());
    $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
    // 当滚动条大于100的时候 小的搜索框固定以及显现
    if ($(document).scrollTop()> 140) {
        $(".mini").show();
    } else {
        $(".mini").hide();
    }
});


// 右侧的固定广告
$(".top-ad .small").mouseenter(function () {
    alert(1);

});


// 右侧固定导航
/* $(".aside-nav").on("mouseenter","a",function () {
 $(this).addClass("on").siblings().removeClass("on");
 });
 */
$(window).scroll(function () {
    /*input传值*/
    $("#inp").val($(".mini input").val());

    // 当滚动条 大于445 的时候 侧边栏变为固定定位
    // 顶部导航条显现
    // 否则取反
    if ($(document).scrollTop() >= 445) {
        $(".aside-nav").css({
            "position": "fixed",
            "top": 45
        });
        $(".aside-nav-list7").show();
    } else {
        $(".aside-nav").css({
            "position": "absolute",
            "top": 490
        });
        $(".aside-nav-list7").hide();
    }


    // 当滚动条滚到相应位置的时候 会有相应的样式
    $(".con-items").each(function (i, ele) {
        // 49 是 侧边导航条定位的距离
        if (scroll().top + 49 > $(".con-items:eq(" + i + ")").offset().top) {

            $(".aside-nav a:eq(" + (i) + ")").addClass("on").siblings().removeClass("on");
        }
    });

    // 点哪道哪
    $(".aside-nav").on("click", ".c1", function () {
        var goW = $(".con-items:eq(" + $(this).index() + ")").offset().top - $(".mini").height();
        $body.stop().animate({
            "scrollTop": goW
        });
        $(this).addClass("on").siblings().removeClass("on");
    });



});

// 回到顶部 兼容写法

$(".aside-nav-list7").click(function () {
    /*if($(window).scroll())*/
    if (!$body.is(":animated")) {
        $body.stop().animate({
            "scrollTop": 0
        }, 1000);
    }
});

});
