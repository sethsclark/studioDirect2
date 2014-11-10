        $(document).ready(function (){
            $(".button").click(function (){	
            	$('html, body').animate({
    			scrollTop: $("#scrollToMe").offset().top
				}, 1000);  
            });
        });