window.onload=function(){
    var oLogin_list=document.getElementById('login_list');
    var aA=oLogin_list.getElementsByTagName('a');
    var oSearch=document.getElementById('search');
    var oPlus=document.getElementById('plus');
    var aLi=oPlus.getElementsByTagName('li');
    var aTop_nav=document.getElementById('top_nav');
    var aTop_nav2=document.getElementById('top_nav2');
    var oLeft_nav=document.getElementById('left_nav');
    var aLeft_nav_Li=oLeft_nav.getElementsByTagName('li');
    for(var i=0;i<aA.length;i++){
        aA[i].onmouseover=function(){
            this.style.color='#fa7d3c';
        };
        aA[i].onmouseout=function(){
            this.style.color='#666';
        }
    }

    oSearch.onfocus=function(){
        oSearch.style.background='#fff';
        oSearch.parentNode.style.borderColor='#fa7d3c';
        oPlus.style.display='block';
    };
    oSearch.onblur=function(){
        oSearch.style.background='#f2f2f5';
        oSearch.parentNode.style.borderColor='#ccc';
        oPlus.style.display='none';
    };

    for(var j=0;j<aLi.length;j++){
        aLi[j].onmouseover=function(){
            this.style.background='#f2f2f5';
        }
        aLi[j].onmouseout=function(){
            this.style.background='';
        }
    };
    for(var i=0;i<aLeft_nav_Li.length;i++){
        var oSpan=aLeft_nav_Li[i].children;
        aLeft_nav_Li[i].index=true;
        aLeft_nav_Li[0].index=false;
        oSpan[0].style.background='url("1/'+(i+1)+'.png") no-repeat 2px 8px';
        aLeft_nav_Li[i].onclick=function(){
            for(var i=0;i<aLeft_nav_Li.length;i++){
                aLeft_nav_Li[i].className='clearfix';
                aLeft_nav_Li[i].index=true;
            }
            this.className='clearfix active';
            this.index=false;
        }
        aLeft_nav_Li[i].onmouseover=function(){
            this.className='clearfix active';
        }
        aLeft_nav_Li[i].onmouseout=function(){
            if(this.index){
                this.className='clearfix';
            }else{
                this.className='clearfix active';
            }
        }
    }




};
