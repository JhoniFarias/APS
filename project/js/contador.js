﻿$(document).ready(function(){
   	var cont = 0;
	 $(setInterval(function(){
	 	cont= cont+33;
	    $('.numArbor').text(cont);
		 

	  },1000));  
});
   