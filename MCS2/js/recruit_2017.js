$(function(){
	$(document).ready(function(){
     
    $("#ch").hide();
     
    var flg = "modoru";
    $("label").mouseover(
    	function(){
    		$(this).css("color","#bb1e1e");
    		$(this).css("background-color","#ffffff");
    }).mouseout(function(){
    	$(this).css("color","");
    	$(this).css("background-color","");
    	
    });
     
    $("#changer").click(function(){
                                    
        $("#ch").slideToggle();
         
        if(flg == "modoru"){
            $(this).text("戻る");
            flg = "miru";
        }else{
            $(this).text("　詳しく見る　＞　");
            flg = "modoru";
        }
    });
});

/*	$("label").click(function(){
		$("label").each(function(){
			var ch = $(this).html();
			(this).html(
				ch.replace('　詳しく見る　＞　','戻る')
				);
		});
		$("label:after").css("display","none");
	});*/
});


