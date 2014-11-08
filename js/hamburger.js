function onResize() {
    var w = window.outerWidth;
    if (w <= 900){
    	$( ".icon" ).hide();
	 	$( ".hamburger" ).show();
    }
    else {
    	$( ".hamburger" ).hide();
	 	$( ".icon" ).show();
    }
}