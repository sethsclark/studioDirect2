$(function(){
	 $('#model').on('click',function(){
	 	$( ".patronsContent" ).hide();
	 	$( ".artistsContent" ).hide();
	 	$( ".modelContent" ).show();
	 });
	  
	 $('#patrons').on('click',function(){
	 	$( ".modelContent" ).hide();
	 	$( ".artistsContent" ).hide();
	 	$( ".patronsContent" ).show();
	 }); 
	 
	 $('#artists').on('click',function(){
	 	$( ".modelContent" ).hide();
	 	$( ".patronsContent" ).hide();
	 	$( ".artistsContent" ).show();
	 }); 
});