        $(document).ready(function (){
            $("#model, #artists, #patrons").click(function (){	
            	$('html, body').animate({
    			scrollTop: $("#scrollToMe").offset().top
				}, 1000);  
            });
        });