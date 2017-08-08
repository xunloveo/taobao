/**
 * Created by Administrator on 2017/6/7.
 */
// 轮播部分 tab 栏切换
$(function () {
    // 轮播图效果
        // 动态生成小圆点
        // 克隆第一张
        $(".banner-img").append($(".banner-img li:first").clone(true));
        var arr=[];  // 用来添加小圆点的
        for(var i =0; i < $(".banner-img li").length - 1; i++){
            arr.push("<li>"+(i+1)+"</li>");
        }
        // 添加到ul中
        $(".banner-circle").append(arr);
        // 给第一个设置默认样式
        $(".banner-circle li:first").addClass("selected");

        // 开始动画
        // 小圆点的点击事件

       $(".banner-circle").stop().on("click","li",function(){
           var index = $(this).index();
            // 给自己添加样式
            $(this).addClass("selected").siblings().removeClass("selected");
            // 让ul移动
            //var $index = $(this).index();
            if(!$(".banner-img").is(":animated")){
                $(".banner-img").animate({
                    "left": - index * $(".banner-wrap1").width()
                },1000);
            }
            square = key = index;
        });

       var timer = null;
       var key = 0; // 用来控制播放的张数
       var square = 0; // 控制小圆点的索引

        // 自动轮播
        timer = setInterval(autoPlay,2000);
        function autoPlay(){
            key++;
            if(key > $(".banner-img li").length - 1){
                $(".banner-img").css("left",0);
                key = 1; //  从第二张开始
            }
            if(!$(".banner-img").is(":animated")) {
                $(".banner-img").animate({
                    "left": -key * $(".banner-wrap1").width()
                }, 500);
            }
            square++;
            if(square > $(".banner-circle li").length - 1){
                square = 0;
            }
            $(".banner-circle li:eq("+square+")").addClass("selected")
                .siblings().removeClass("selected");
        }
        // 点击右边的时候
        $(".nextBtn").stop(false,true).click(function () {
            autoPlay();
        });
        // 点击左边的时候
        $(".prevBtn").click(function () {
            key--;
            if(key < 0){
                    $(".banner-img").css("left",-2600);
                    key = 4; //  从第五张开始
            }
            if(!$(".banner-img").is(":animated")) {
                $(".banner-img").animate({
                    "left": -
                        key * $(".banner-wrap1").width()
                }, 500);
            }
            square--;
            if(square < 0){
                square = 4;
            }
            $(".banner-circle li:eq("+square+")").addClass("selected")
                .siblings().removeClass("selected");
        });
        // 鼠标移开的时候停止轮播
        $(".banner-wrap1").mouseenter(function (e) {
            e.stopPropagation();
            $(".banner-btn").stop().show();
            clearInterval(timer);
        }).stop().mouseleave(function (e) {
            e.stopPropagation();
            clearInterval(timer);
            $(".banner-btn").stop().hide();
            $(".banner-btn a").removeClass("act");
            timer = setInterval(autoPlay,2000);
        });
        $(".banner-btn a").mouseenter(function (e) {
            e.stopPropagation();
            $(this).stop().addClass("act").siblings().removeClass("act");
        }).mouseleave(function () {
            e.stopPropagation();
            $(this).removeClass("act");
        });




    $(".notice-nav").on("mouseenter", "li", function () {
        var $this = $(this);
        setTimeout(function () {
            $this.addClass("active")
                .siblings().removeClass("active");
        }, 300);

        $(".notice-bd ul").eq($(this).index()).addClass("notice-sel").siblings().removeClass("notice-sel");
    });

    /*  $(".conve-list").on("mouseenter",".conve-list-items",function () {
     $(this).addClass("on").siblings().removeClass("on");
     $(".conve-b").show()
     .find(".conve-bd-box").eq($(this).index()).show().siblings().hide();
     });*/
    $(".conve-list").on("mouseenter", ".list-hover", function () {
        $(this).addClass("on").siblings().removeClass("on");
        $(".conve-b").show()
            .find(".conve-bd-box").eq($(this).index()).show().siblings().hide();
    });


    // 关闭
    $(".close").click(function () {
        $(".conve-b").hide();
        $(".list-hover").removeClass("on");
    })


    $(".con1 span").click(function () {
        $(this).next().show();
        $(this).prev().focus();
    });

    $(".con1 input").blur(function () {
        $(".history").hide();
    });

    // 点击的时候选中钱数
    $(".con2").click(function () {
        $(this).find(".prices").show();
        $(this).find("input").focus();
        $(".conve-b").css("overflow","visible");
    });
   $(".con2 input").blur(function () {
        $(".prices").hide();
        $(".conve-b").css("overflow","hidden");
    });

    // 点击钱数隐藏并把值传给input
    $(".prices").on("click",".prices-list",function (e) {
        alert($(".con2 input").defaultValue());
        $(".con2 input").val($(this).text());
        $(".prices").hide();
        $(".conve-b").css("overflow","hidden");
        e.stopPropagation();
    });


    // 移动a连接的时候无缝滚动
    $(".conve-tabs").on("mouseenter","a",function () {
        $(".more-tips").stop().animate({
            "left": -300 * $(this).index() + 15
        },100);
    })


    // 右侧固定导航
   /* $(".aside-nav").on("mouseenter","a",function () {
        $(this).addClass("on").siblings().removeClass("on");
    });
*/
    $(window).scroll(function () {
        if($("body").scrollTop() >= 445){
            $(".aside-nav").css({
                "position": "fixed",
                "top": 45
            });
            $(".aside-nav-list7").show();
            //$(".aside-nav-list7").css("display","block");
        }else{
            $(".aside-nav").css({
                "position": "absolute",
                "top": 490
            });
            //$(".aside-nav-list7").css("display","none");
            $(".aside-nav-list7").hide();
        }

       /* for(var i = 0; i < )*/
    });

    // 回到顶部
    $(".aside-nav-list7").click(function () {
        /*if($(window).scroll())*/
        if(!$("body").is(":animated")){
            $("body").stop().animate({
                "scrollTop": 0
            },1000);
        }
    });

});
