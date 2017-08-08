/**
 * Created by lusiwen on 2017/6/7.
 */

$(function () {
    /**
     * 左边菜单的隐藏显现
     */
    $(".banner-left-service li").mouseenter(function () {
        $(this).addClass("libg").siblings().removeClass("libg");
        $(this).siblings().find("i:first-child").removeClass("opc");
        $(this).find("i:first-child").addClass("opc");
        $(".service-float-item").css('display', 'none');
        $(".service-float-item").eq($(this).index()).css('display', 'block');

    })
    $(".service-float-item").mouseleave(function () {
        $(".banner-left-service li").removeClass("libg");
        $(".banner-left-service li i:first-child").removeClass("opc");
        $(this).css('display', 'none');
    })
    $(".banner-left").mouseleave(function () {
        $(".banner-left-service li").removeClass("libg");
        $(".banner-left-service li i:first-child").removeClass("opc");
        $(".service-float-item").css('display', 'none');
    })
    /**
     * 调用轮播js  run_img
     */
    run_img($("#box1"));
    run_img($("#box2-bd"));
    /**
     * 右边  banner-right-2 hover效果
     */
    $(".br2 li").mouseover(function () {
        $(this).addClass("br2-li-hover").siblings().removeClass("br2-li-hover");
        $(".br2 div").css('display','none');
        $(this).find("div").css('display','block');
    })

    /**
     * 右边 br3 多级窗口 隐藏 显现
     */
    //一级
    $(".br3-a-th a").mouseover(function () {
        $(this).removeClass("br3-a-out").addClass("br3-a-over").siblings().removeClass("br3-a-over").addClass("br3-a-out");
        $(".br3-float").css("display","block");
        $(".br3-div").eq($(this).index()).css("display","block").siblings("div").css("display","none");
    })
    //二级
    $(".br3-div p a").mouseover(function () {
        $(this).addClass("br3-h").siblings().removeClass("br3-h");
        $(this).parent().parent().find("ul").css('left',-$(this).index()*275);

    })
    //将 li 排列在一行,以到左右滑动效果
    $(".br3-div").each(function () {
        $(this).find("li").each(function (x) {
            $(this).css('left',x*275);
        })
    })
    //关闭浮动窗口
    $("#close-float").click(function () {
        $(".br3-float").css("display","none");
        $(".br3-a-th a").removeClass("br3-a-out").removeClass("br3-a-over");
    })

    /**
     *
     */



})