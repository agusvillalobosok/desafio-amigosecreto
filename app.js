// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.




const nombres = [] ;

const inputAmigos = document.getElementById ("amigo"); 

const listaAmigos = document.getElementById ("listaAmigos") ; 

const resultado = document.getElementById ("resultado") ; 

function agregarAmigo () {
  if (inputAmigos.value != "") {
    nombres.push(inputAmigos.value);
  } 

 const li = document.createElement ("li") ;

  li.textContent = inputAmigos.value ; 

  listaAmigos.appendChild(li); 

  inputAmigos.value = "" ; 
  
  
}

function sortearAmigo () = {
      if (nombres.length <= 1 ) {
        alert("No hay nombres suficientes, no se puede sortear"); 
        return; 
      } 
        const indiceAleatorio = Math.floor(Math.random() *nombres.length); 

        const amigoSecreto = nombres[indiceAleatorio] ;  

    resultado.innerHTML = `<li> Tu amigo secreto es <strong> ${amigoSecreto} </strong> </li>`

        
}



