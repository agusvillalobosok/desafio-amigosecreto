// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.




const nombres = [] ;

const inputAmigos = document.getElementById ("amigo"); 

const listaAmigos = document.getElementById ("listaAmigos") ; 

function agregarAmigo () {
  if (inputAmigos.value != "") {
    nombres.push(inputAmigos.value);
  } 

 const li = document.createElement ("li") ;

  li.textContent = inputAmigos.value ; 

  listaAmigos.appendChild(li); 
  
  
}



