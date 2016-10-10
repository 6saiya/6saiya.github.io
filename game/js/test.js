 $(function () {
            var $container = $('#container');
            // init
            $container.isotope({
                // options
                itemSelector: '.item',
                layoutMode: 'fitRows'
            });
            $('.navlist').children().eq(0).click(function(){
                $container.isotope({filter: '.item'});
                $('.navlist').children().removeClass('active');
                $(this).addClass('active');
            });
            $('.navlist').children().eq(1).click(function(){
                $container.isotope({filter: '.ht'});
                $('.navlist').children().removeClass('active');
                $(this).addClass('active');
            });
            $('.navlist').children().eq(2).click(function(){
                $container.isotope({filter: '.js'});
                $('.navlist').children().removeClass('active');
                $(this).addClass('active');
            });
            $('.navlist').children().eq(3).click(function(){
                $container.isotope({filter: '.move'});
                $('.navlist').children().removeClass('active');
                $(this).addClass('active');
            });
            $('.navlist').children().eq(4).click(function(){
                $container.isotope({filter: '.jq'});
                $('.navlist').children().removeClass('active');
                $(this).addClass('active');
            });
            $('.navlist').children().eq(5).click(function(){
                $container.isotope({filter: '.h5'});
                $('.navlist').children().removeClass('active');
                $(this).addClass('active');
            });

//            $('#container li').hover(
//                    function(){
//                        $(this).animate({'border-radius':'100px 100px 100px 0'},200)
//                    },
//                    function(){
//                        $(this).animate({'border-radius':'0 0 0 0'},200)
//            })
            $('.navlist li span').css('line-height', $('.navlist li').eq(0).height()+'px');
            $('.navlist li span').eq(0).animate({left:50,opacity:1},100,function(){
                $('.navlist li span').eq(1).animate({left:50,opacity:1},100,function(){
                    $('.navlist li span').eq(2).animate({left:50,opacity:1},100,function(){
                        $('.navlist li span').eq(3).animate({left:50,opacity:1},100,function(){
                            $('.navlist li span').eq(4).animate({left:50,opacity:1},100,function(){
                                $('.navlist li span').eq(5).animate({left:50,opacity:1},100,function(){
                                    $('.navlist li span').eq(6).animate({left:50,opacity:1},100,function(){
                                        $('.navlist li span').eq(7).animate({left:50,opacity:1},100,function(){

                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
