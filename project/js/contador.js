$(document).ready(function(){

	//Variavel de count
   	var cont = 0;
	 $(setInterval(function(){
	 	//Função para adicionar 33 em 33 no contador
	 	cont= cont+33;
	    $('.numArbor').text(cont);		 
//Numero maximo por segundo		 
	  },1000));  
});
   