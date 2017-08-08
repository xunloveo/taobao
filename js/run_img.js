/**
 * Created by lusiwen on 2017/6/5.
 */
function run_img(x) {
    var $sp = x.find('.sp');
    var $img = $sp.find('li');
    var $btn = x.find('.btn a');
    var $width = x.width();
    //console.log($width);
    var $count = $img.length;
    var page = 1;
    var timer = null;
    //动态添加小圆点
    x.find('.circle').append("<li class='selected'></li>")
    for (var i = 0; i < $count - 1; i++) {
        x.find('.circle').append("<li></li>")
    }
    var $li = x.find('.circle li');
    //遍历将图片排成一行
    $img.each(function (i) {
        $(this).css("left", i * $width);
    })

    //下一张
    function run(classname) {
        if (!$sp.is(':animated')) {
            if (classname == "prev") {
                if (page == 1) {
                    $sp.prepend($img.eq($count - 1).clone());
                    $sp.find('li:first-child').css('left', -$width);
                    page = $count;
                    cirMove();
                    $sp.animate({
                        left: '+=' + $width
                    }, 300, function () {
                        $sp.css('left', -$width * ($count - 1));
                        $sp.find('li:first-child').remove();
                    });
                    //console.log(page);
                }
                else {
                    page--;
                    cirMove();
                    $sp.animate({
                        left: '+=' + $width
                    }, 300)
                }
            }
            else {

                if (page == $count) {
                    $sp.append($img.eq(0).clone());
                    $sp.find('li:last-child').css('left', $width * $count);
                    page = 1;
                    cirMove();
                    $sp.animate({
                        left: '-=' + $width
                    }, 300, function () {
                        $sp.css('left', 0);
                        $sp.find('li:last-child').remove();
                        //console.log(page);

                    });
                }
                else {
                    page++;
                    cirMove();
                    $sp.animate({
                        left: '-=' + $width
                    }, 300)
                    //console.log(page);
                }
            }
        }

    }

    //x.find('.next').click(run);
    //上一张
    /*x.find('.prev').click(function () {
     if (!$sp.is(':animated')) {
     if (page == 1) {
     $sp.prepend($img.eq($count - 1).clone());
     $sp.find('img:first-child').css('left', -$width);
     page = $count;
     cirMove();
     $sp.animate({
     left: '+=' + $width
     },300, function () {
     $sp.css('left', -$width * ($count - 1));
     $sp.find('img:first-child').remove();
     });
     //console.log(page);
     }
     else {
     page--;
     cirMove();
     $sp.animate({
     left: '+=' + $width
     },300)
     console.log(page);
     }

     }
     })*/

    //圆点同步
    function cirMove() {
        $li.eq(page - 1).addClass('selected').siblings().removeClass('selected');
        if(x.attr('id')=="box2-bd"){
            x.prev().find("i").text(page);
        }
    }

    //圆点的单击事件
    $li.click(function () {
        if (!$sp.is(':animated')) {
            $sp.animate({
                left: '-' + $(this).index() * $width

            });
            page = $(this).index() + 1;
            cirMove();
        }

    })
    //按钮的显现和隐藏
    x.mouseover(function () {
        $btn.css('display', 'block');
        clearInterval(timer);
        return false;
    }).mouseleave(function () {
        $btn.css('display', 'none');
        clearInterval(timer);
        timer = setInterval(run, 5000);
        return false;
    }).trigger("mouseleave");//自动激活轮播
    //按钮的hover
    $btn.mouseover(function () {
        //$btn.css('display', 'block');
        $(this).animate({
            opacity: 0.6
        }, 'fast');

    }).mouseleave(function () {
        $(this).animate({
            opacity: 0.3
        }, 'fast');
        //$btn.css('display', 'none');
    }).click(function () {  //单击事件
        run(this.className);
    })
}