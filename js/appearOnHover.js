
// hover text and foggy background. 


$(function(){
	 
	  $('.artistsButton').mouseenter(function () {
            $('.artists').show();
            $( ".hoverText" ).addClass( "foggyBackground" );
        });
        $('.artistsButton').mouseleave(function () {
            $('.artists').hide();
            $( ".hoverText" ).removeClass( "foggyBackground" );
        });
        
        $('.patronsButton').mouseenter(function () {
        	$( ".hoverText" ).addClass( "foggyBackground" );
            $('.patrons').show();
        });
        $('.patronsButton').mouseleave(function () {
            $('.patrons').hide();
            $( ".hoverText" ).removeClass( "foggyBackground" );
        });
          
        $('.modelButton').mouseenter(function () {
        	$( ".hoverText" ).addClass( "foggyBackground" );
            $('.model').show();
        });
        $('.modelButton').mouseleave(function () {
            $('.model').hide();
            $( ".hoverText" ).removeClass( "foggyBackground" );
        });
        
});