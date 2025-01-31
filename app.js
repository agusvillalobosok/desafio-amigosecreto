// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// nombres = array principal, está vacía pero recibe los datos del input en html.
const nombres = [];

// inputAmigos = un puntero o variable que enlaza el elemento (input) donde se escriben los nombres para utilizarlo en 
//               la funcion.
const inputAmigos = document.getElementById("amigo"); 

// listaAmigos = un puntero que enlaza el elemento lista que se encuentra vacio, para recibir luego con la funcion los nombres.
const listaAmigos = document.getElementById("listaAmigos"); 

// resultado = un puntero que enlaza el elemento lista que se encuentra vacio. que recibe el nombre sorteado por medio 
//             de la funcion sortearAmigo. 
const resultado = document.getElementById("resultado");


function agregarAmigo() {
    let nombre = inputAmigos.value.trim();
    inputAmigos.value = ""; 
  
    if (nombre == "") {
          alert("Por favor ingresar nombres validos.");
          return;
    } 
  
    if (nombres.includes(nombre)) {
          alert("Ese nombre ya está en la lista, por favor ingresar otro.");
          return;
    }

    nombres.push(nombre); 
    actualizarLista(); 
}



function actualizarLista() {
  listaAmigos.innerHTML = ""; 

  for (let i = 0; i< nombres.length; i++) {
  
          const li = document.createElement("li");

          li.textContent = nombres[i]; 

          listaAmigos.appendChild(li);   
  }
}

function sortearAmigo() {
    if (nombres.length <= 1) {
          alert("No hay nombres suficientes, no se puede sortear."); 
          return; 
    } 
    const indiceAleatorio = Math.floor(Math.random() *nombres.length); 
    const amigoSecreto = nombres[indiceAleatorio];  
    resultado.innerHTML = `<li> Tu amigo secreto es <strong> ${amigoSecreto} </strong> </li>`;     
}



