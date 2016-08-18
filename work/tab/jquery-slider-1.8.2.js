/**
 * Created by ijiajia on 2016/6/24.
 */
$.fn.slider=function(){
    this.each(function(index, element){
        var aBtn=$(element).find('ol li');
        var oUl=$(element).find('ul');
        aBtn.click(function(){
            aBtn.removeClass('active');
            $(this).addClass('active');
            oUl.animate({top: -150*$(this).index()});
        });
    });
};