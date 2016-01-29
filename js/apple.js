$(function(){
    $(window).resize(function(){
        var clientW=$(window).width();
        if(clientW<730){
            $('.header1').css('display','none');
            $('.header2').css('display','block');
            $('.foot ul').css('display','none');
            $('.foot h3 span').css('display','block');
            $('.foot .row h3').css({'border-bottom':'1px solid #E3E3E3','border-top':'1px solid #E3E3E3','height':'38px','line-height':'38px'});
        }else{
            $('.header1').css('display','block');
            $('.header2').css('display','none');
            $('.foot ul').css('display','block');
            $('.foot h3 span').css('display','none');
            $('.foot .row h3').css({'border':'none'});
        }
    })
    $(window).resize();
    $('.m').click(function(){
        $('.son').finish();
        $('.son').slideToggle()
    })
    $('.dai').click(function(){
        $('.son2').finish();
        $('.son2').slideToggle()
    })
    $('.foot h3').click(function(){
        $(this).next().slideToggle(200);
    });

    //ÂÖ²¥
    var num=0;
    var lunbo=function(){
        num++;
        if(num==$('.box .list').length-1){
            $('.box').animate({marginLeft:-num*100+'%'},function(){
                $('.box').css({marginLeft:0});
            });
            num=0;
        }else{
            $('.box').animate({marginLeft:-num*100+'%'});
        }
        $('.btn li').css({border:'none',background:'#999'});
        $('.btn li').eq(num).css({border:'1px solid #2097D2',background:'none'});
    };
    var time=setInterval(lunbo,1000);

    $('.btn li').click(function(){
        clearInterval(time);
        var index=$(this).index('.btn li');
        num=index;
        $('.btn li').css({border:'none',background:'#999'});
        $(this).css({border:'1px solid #2097D2',background:'none'});
        $('.box').animate({marginLeft:-num*100+'%'});
    });

    $('.btn li').hover(function(){
        $(this).css({border:'none',background:'#333'});
    },function(){
        $(this).css({border:'none',background:'#999'});
    });




    //ÍÏ¶¯
    var margin;
    touch.on('.box',"dragstart",function(){
        margin=$('.box')[0].offsetLeft;
    })
    touch.on('.box',"drag",function(e){
        $('.box').css('margin-left', margin+e.x);
    })
    touch.on(".box","dragend",function(e){
        if(Math.abs(e.x)>300|| e.factor<5){
            if(e.direction=='left'){
                num++;
                if(num==$('.box .list').length-1){
                    $('.box').animate({marginLeft:-num*100+'%'},function(){
                        $('.box').css({marginLeft:0})
                    });
                    num=0;
                }else{
                    $('.box').css({marginLeft:-num*100+'%'})
                }
            }else if(e.direction=='right'){
                num--;
                if(num==-1){
                    num=0;
                    $('.box').css({marginLeft:-num*100+'%'})
                    return;
                }else{
                    $('.box').css({marginLeft:-num*100+'%'})
                }
            }
        }else{
            $('.box').animate({marginLeft:-num*100+'%'})
        }

    })
    $('.box').mousedown(function(e){
        e.preventDefault();
    })




})