


var bgImgs = ["BackGroundImg1.jpg", "BackGroundImg2.jpg"];
var index =0; 

$(function(){
	 $('#arrowRight').on('click',function(){
	 	if(index == (bgImgs.length -1)){
	 		index = 0; 
	 	}
	 	else{
	 		index ++; 
	 	}
	 	$('html').css({backgroundImage:'url(img/background/'+bgImgs[index]+')'});
	 });
	 
	  $('#arrowLeft').on('click',function(){
	 	if(index == 0){
	 		index = bgImgs.length -1; 
	 	}
	 	else{
	 		index --; 
	 	}
	 	$('html').css({backgroundImage:'url(img/background/'+bgImgs[index]+')'});
	 });
});