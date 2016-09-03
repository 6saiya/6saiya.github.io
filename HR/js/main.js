/**
 * Created by Administrator on 2016/6/26.
 */
$(function(){
    var windowH=$(window).height();
    function homepage(){
        //windowH=$(window).height();
        $('#bg-video').height(windowH);
        $('#main').width($(window).width());
        $('#homepage').height(windowH);
        $('#page2').height(windowH);
        $('#page3').height(windowH);
        $('#page4').height(windowH);
        $('#page5').height(windowH);
        $('#page6').height(windowH);
        $('#page7').height(windowH);
    }
    homepage();
    $(window).resize(function(){
        homepage();
    });
    if($.browser.msie){
        $('.tit').replaceWith('<img src="img/bwy.png" alt="" class="tit"/>');
        $('.tit2').replaceWith('<img src="img/web.png" alt="" class="tit2"/>');
    }
    $(window).scroll(function(){
        $('#bg-video').css('top',$(document).scrollTop()*0.7);
        $('.homeinner').css('top',$(document).scrollTop()*0.7);
        if($(document).scrollTop()>windowH && $(document).scrollTop()<windowH*3){
            $('.page3-con').css('top',($(document).scrollTop()-windowH)/(windowH)*200-202);
        }
        if($(document).scrollTop()>windowH*1.5){
            $('.point1').animate({opacity:1},249,function(){
                $('.line1').animate({width:286},249,function(){
                    $('.year1').animate({top:0,opacity:1},249,function(){
                        $('.job1').animate({top:85,opacity:1},249);
                        $('.line4').animate({width:246},249);
                        $('.con1').animate({top:140,opacity:1},249);
                        $('.com1').animate({top:50,opacity:1},249,function(){
                            $('.point2').animate({opacity:1},249,function(){
                                $('.line2').animate({width:286},249,function(){
                                    $('.year2').animate({top:0,opacity:1},249,function(){
                                        $('.job2').animate({top:85,opacity:1},249);
                                        $('.line5').animate({width:246},249);
                                        $('.con2').animate({top:140,opacity:1},249);
                                        $('.com2').animate({top:50,opacity:1},249,function(){
                                            $('.point3').animate({opacity:1},249,function(){
                                                $('.line3').animate({width:286},249,function(){
                                                    $('.year3').animate({top:0,opacity:1},249,function(){
                                                        $('.job3').animate({top:85,opacity:1},249);
                                                        $('.line6').animate({width:246},249);
                                                        $('.con3').animate({top:140,opacity:1},249);
                                                        $('.com3').animate({top:50,opacity:1},249,function(){
                                                            $('.ask').animate({opacity:1},1249);
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        }
        if($(document).scrollTop()<windowH*0.5){
            $('.navlist').children().removeClass('active');
            $('.navlist').children().eq(0).addClass('active');
        }else if($(document).scrollTop()>windowH*0.5 && $(document).scrollTop()<windowH*1.5){
            $('.navlist').children().removeClass('active');
            $('.navlist').children().eq(1).addClass('active');
        }else if($(document).scrollTop()>windowH*1.5 && $(document).scrollTop()<windowH*2.5){
            $('.navlist').children().removeClass('active');
            $('.navlist').children().eq(2).addClass('active');
        }else if($(document).scrollTop()>windowH*2.5){
            $('.navlist').children().removeClass('active');
            $('.navlist').children().eq(3).addClass('active');
        }
    });
    function toRightMove(){
        $('.to-right').stop().animate({left:220},function(){
            $('.to-right').stop().animate({left:210})
        })
    }
    var Timer1=setInterval(toRightMove,2000);
    $('.to-right').click(function(){
        clearInterval(Timer1);
        $('.nav').stop().animate({left:0},300,function(){
            $('.to-right').hide();
            $('.to-left').show();
        });
    })
    $('.to-left').click(function(){
        clearInterval(Timer1);
        $('.nav').stop().animate({left:-200},300,function(){
            $('.to-left').hide();
            $('.to-right').show();
            Timer1=setInterval(toRightMove,2000);
        })
    })
    function toNextMove(){
        $('.next,.next2,.next3').stop().animate({opacity:0.3},800,function(){
            $('.next,.next2,.next3').stop().animate({opacity:1},800)
        })
    }
    var Timer2=setInterval(toNextMove,2000);
    $('.next').click(function(){
       $('html,body').stop().animate({scrollTop:windowH+3},1000);
    });
    $('.next2').click(function(){
       $('html,body').stop().animate({scrollTop:(windowH+3)*2},1000);
    });
    $('.next3').click(function(){
       $('html,body').stop().animate({scrollTop:(windowH+3)*3},1000);
    });

    $('.navlist').children().eq(0).click(function(){
        $('html,body').stop().animate({scrollTop:0},300);
    });
    $('.navlist').children().eq(1).click(function(){
        $('html,body').stop().animate({scrollTop:windowH+3},300);
    });
    $('.navlist').children().eq(2).click(function(){
        $('html,body').stop().animate({scrollTop:(windowH+3)*2},300);
    });
    $('.navlist').children().eq(3).click(function(){
        $('html,body').stop().animate({scrollTop:(windowH+3)*3},300);
    });
    $('.navlist').children().eq(4).click(function(){
        $('html,body').stop().animate({scrollTop:(windowH+3)*4},300);
    });
    $('.navlist').children().eq(5).click(function(){
        $('html,body').stop().animate({scrollTop:(windowH+3)*5},300);
    });
    $('.navlist').children().eq(6).click(function(){
        $('html,body').stop().animate({scrollTop:(windowH+3)*6},300);
    });
     $('.navlist').children().eq(7).click(function(){
        $('html,body').stop().animate({scrollTop:(windowH+3)*7},300);
    });
     $('.navlist').children().eq(8).click(function(){
        $('html,body').stop().animate({scrollTop:(windowH+3)*8},300);
    });

    $('#page2 a div').hover(
        function(){
            $(this).children('img').stop().animate({left:-50},249);
            $(this).children('.opabox').stop().animate({opacity:0.6},249);
            $(this).children('.conbox span').stop().animate({opacity:1,left:32},249);
            $(this).children('.conbox h3').stop().animate({top:30},249);
            $(this).children('.conbox p').stop().animate({opacity:1,top:90},249);
    },
        function(){
            $(this).children('img').stop().animate({left:-26},249);
            $(this).children('.opabox').stop().animate({opacity:0.3},249)
            $(this).children('.conbox span').stop().animate({opacity:0,left:60},249);
            $(this).children('.conbox h3').stop().animate({top:40},249);
            $(this).children('.conbox p').stop().animate({opacity:0,top:110},249);
        }
    )
        $('.wechat').click(function(){
        $('.wechatbox').show();
        $('.wechatbox').stop().animate({
            opacity:1,
            top:'245px'
        },500);
        $('.opa').show();
        $('.close').click(function(){
            $('.wechatbox').stop().animate({
                opacity:0,
                top:'275px'
            },500,function(){
                $('.wechatbox').hide();
            });
            $('.opa').hide();

        })
    });
    $('.qq').click(function(){
        $('.qqbox').show();
        $('.qqbox').stop().animate({
            opacity:1,
            top:'245px'
        },500);
        $('.opa').show();
        $('.close').click(function(){
            $('.qqbox').stop().animate({
                opacity:0,
                top:'275px'
            },500,function(){
                $('.qqbox').hide();
            });
            $('.opa').hide();

        })
    });
    $('.weibo').click(function(){
        $('.weibobox').show();
        $('.weibobox').stop().animate({
            opacity:1,
            top:'245px'
        },500);
        $('.opa').show();
        $('.close').click(function(){
            $('.weibobox').stop().animate({
                opacity:0,
                top:'275px'
            },500,function(){
                $('.weibobox').hide()
            });
            $('.opa').hide();

        })
    });
    $('.ditu').click(function(){
        $('.ditubox').show();
        $('.ditubox').stop().animate({
            opacity:1,
            top:'245px'
        },500);
        $('.opa').show();
        $('.close').click(function(){
            $('.ditubox').stop().animate({
                opacity:0,
                top:'275px'
            },500,function(){
                $('.ditubox').hide();
            });
            $('.opa').hide();

        })
    })
});