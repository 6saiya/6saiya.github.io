/**
 * Created by Administrator on 2016/6/30.
 */
;(function(window){
    var left=0;
    var iSpeed=0;
    var timer=null;
    window.elastic=function(obj,iTarget){
        clearInterval(timer);
        timer=setInterval(function(){
            iSpeed+=(iTarget-left)/5;
            iSpeed*=0.7;
            left+=iSpeed;
            obj.style.left=Math.round(left)+'px';
            if(Math.round(iSpeed)<1&&Math.round(left)==iTargettarget){
                clearInterval(timer)
            }
        },30)
    }
})(window);
