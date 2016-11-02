/**
 * Created by cloud on 2016/10/17.
 */
/*******侧边栏显示与隐藏**************************/
;$(function() {
    'use strict';
    //绑定
    var sidebar = $('#sidebar'),//选择侧栏
        mask = $('.mask'),//选择mask
        backButton = $('.back-to-top'),//选择返回菜单
        sidebar_trigger = $('#sidebar_trigger');//选择侧栏触发器
    /*function showSideBar() {
        mask.fadeIn();
        //sidebar.animate({'right': 0});
        sidebar.css('right', 0)
    }
     function hideSideBar(){
     mask.fadeOut();
     //sidebar.animate({'right':-sidebar.width()})
     sidebar.css('right', -sidebar.width())
     }*/
    function showSideBar() {
        mask.fadeIn();//显示侧栏
        //sidebar.animate({'right': 0});
        sidebar.css('transform', 'translate(0, 0)')
    }
    function hideSideBar(){
        mask.fadeOut();//隐藏侧栏
        //sidebar.animate({'right':-sidebar.width()})
        sidebar.css('transform', 'translate('+sidebar.width()+'px'+', 0)');
    }
    sidebar_trigger.on('click', showSideBar);//监听侧栏触发器
    mask.on('click', hideSideBar);//监听mask点击事件
    backButton.on('click', function(){
          $('html, body').animate({
              scrollTop:0
          },800)
    })
    $(window).on('scroll',function(){//监听window的scroll事件
        //如果已滚动的部分高于0//窗口的高度
        if($(window).scrollTop() > 0){//$(window).height()
            //显示返回按钮
            backButton.fadeIn();
        }else{
            //隐藏反馈按钮
            backButton.fadeOut();
        }
    })
    //触发scroll事件
    $(window).trigger('scroll');
});
/*********用于滚动定位******************************************/
$(function () {
    var music = $('#music'),
        reading = $('#reading'),

        more = $('.more');
    function toMusic() {
        $('html, body').animate({
            scrollTop:1270
        },800)
    }
    function toReading() {
        $('html, body').animate({
            scrollTop:2785
        },800)
    }
    function toMore() {
        $('html, body').animate({
            scrollTop:800
        },800)
    }
    music.on('click', toMusic);

    reading.on('click',toReading);
    more.on('click', toMore);
});
/******用于日志列表栏展开收缩*****************************/
(function($) {
    $.fn.menu = function(b) {
        var c,
            item,
            httpAdress;
        b = jQuery.extend({
                Speed: 220,
                autostart: 1,
                autohide: 1
            },
            b);
        c = $(this);
        item = c.children("ul").parent("li").children("a");
        httpAdress = window.location;
        item.addClass("inactive");
        function _item() {
            var a = $(this);
            if (b.autohide) {
                a.parent().parent().find(".active").parent("li").children("ul").slideUp(b.Speed / 1.2,
                    function() {
                        $(this).parent("li").children("a").removeAttr("class");
                        $(this).parent("li").children("a").attr("class", "inactive")
                    })
            }
            if (a.attr("class") == "inactive") {
                a.parent("li").children("ul").slideDown(b.Speed,
                    function() {
                        a.removeAttr("class");
                        a.addClass("active")
                    })
            }
            if (a.attr("class") == "active") {
                a.removeAttr("class");
                a.addClass("inactive");
                a.parent("li").children("ul").slideUp(b.Speed)
            }
        }
        item.unbind('click').click(_item);
        if (b.autostart) {
            c.children("a").each(function() {
                if (this.href == httpAdress) {
                    $(this).parent("li").parent("ul").slideDown(b.Speed,
                        function() {
                            $(this).parent("li").children(".inactive").removeAttr("class");
                            $(this).parent("li").children("a").addClass("active")
                        })
                }
            })
        }
    }
})(jQuery);
/**********用于相册*****************************************/
;