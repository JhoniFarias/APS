<?php 
  try {
  	 $conexao = new PDO("mysql:host=localhost;dbname=banco_aps","root","");
  	 $conexao->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
  } catch (Exception $e) {
  	  echo 'Erro de conexao com o banco'.$e->getMessage();
  }


 ?>