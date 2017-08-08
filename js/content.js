/**
 * Created by ¾ÅÊ® on 2017/6/7 0007.
 */
$(function(){
    $(".icon-erweima").mouseover(function(){
       $(this).parent().find("span").show();
        $(this).css("color","red");
        $(this).parent().find("span").mouseover(function(){
            $(this).parent().find("span").show()
        }).mouseout(function(){
            $(this).parent().find("span").hide()
        })
    }).mouseleave(function(){
        $(this).parent().find("span").toggle();
        $(this).css("color","#ccc");
    });
})
//ÂÖ²¥
function  timer(obj){
    $(obj).find("ul").animate({
        marginTop:"-60px",
    },300,function(){
        $(this).css({marginTop:"0px"}).find("li:first").appendTo(this);
    })
}
$(function(){
    var num = $('.headline-bd').find('li').length;
    if(num > 1){
        var time=setInterval('timer(".headline-bd")',3500);
        $('.headline-bd').mousemove(function(){
            clearInterval(time);
        }).mouseout(function(){
            time = setInterval('timer(".headline-bd")',3500);
        });
    }
})
