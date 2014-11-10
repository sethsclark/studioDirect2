$(function(){
	 $('.modelButton').on('click',function(){
	 	$( ".patronsContent" ).hide();
	 	$( ".artistsContent" ).hide();
	 	$( ".modelContent" ).show();

	 	$( ".button" ).removeClass( "active" );
	 	$( ".modelButton" ).addClass( "active" );
	 	
	 });
	  
	 $('.patronsButton').on('click',function(){
	 	$( ".modelContent" ).hide();
	 	$( ".artistsContent" ).hide();
	 	$( ".patronsContent" ).show();
	 	
	 	$( ".button" ).removeClass( "active" );
	 	$( ".patronsButton" ).addClass( "active" );
	 	
	 }); 
	 
	 $('.artistsButton').on('click',function(){
	 	$( ".modelContent" ).hide();
	 	$( ".patronsContent" ).hide();
	 	$( ".artistsContent" ).show();
	 	
	 	$( ".button" ).removeClass( "active" );
	 	$( ".artistsButton" ).addClass( "active" );
	 }); 
});