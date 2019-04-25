$(document).ready(function(){
   	var cont = 0;
	 $(setInterval(function(){
	 	cont= cont+2;
	    $('.numArbor').text(cont+"   Árvores desmatadas !");
		 

	  },60));  
});
   