// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// variables globales
let amigos = []; 
console.log(amigos.length); // Imprime la cantidad de amigos

// Asignar un texto a un elemento HTML
function asignarTextoElementos (elementos,texto) {
   let elementoHTML = document.querySelector (elementos);
   elementoHTML.innerHTML = texto;
   return;
}

// función para agregar amigos a la lista
function agregarAmigo() { 
    let nombreAmigo = document.getElementById("amigo").value;
    if (nombreAmigo == "") { // Verifica si el campo está vacío
        alert("Por favor, inserte un nombre");
        return;
    }
    if (amigos.includes(nombreAmigo)) { // Verifica si el amigo ya está en la lista
        alert("El amigo ya está en la lista"); 
        return;
    }
    amigos.push(nombreAmigo); // Agrega el amigo a la lista
    console.log(amigos.length); // Imprime la cantidad de amigos

    limpiarCampo(); // Limpia el campo de entrada
    mostrarAmigos(); // Muestra la lista actualizada de amigos
    return;
}

function limpiarCampo() { 
    let campoTexto = document.querySelector("#amigo");
    campoTexto.value = ""; // Limpia el campo de texto 
}

function mostrarAmigos() { 
    let listaAmigos = document.querySelector("#listaAmigos");
    listaAmigos.innerHTML = ""; // Limpia la lista actual
    for (let i = 0; i < amigos.length; i++) { // Itera sobre la lista de amigos
        listaAmigos.innerHTML += `<li>${amigos[i]}</li>`; // Agrega cada amigo a la lista
    }
}

function sortearAmigo() {
    if (amigos.length === 0) { // Verifica si la lista de amigos está vacía
        alert("No hay amigos para sortear");
        return;
    }   
    let indiceAleatorio = Math.floor(Math.random() * amigos.length); // Genera un índice aleatorio
    console.log("Indice generado" + indiceAleatorio); // Imprime el índice aleatorio

    // Obtener nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio]; 
    console.log("Amigo sorteado: " + amigoSorteado); // Imprime el nombre del amigo sorteado
      
    // Obtener resultado del sorteo
    let elementoResultado = document.querySelector("#resultado");
    elementoResultado.innerHTML = `<li>El amigo sorteado es: ${amigoSorteado}</li>`; // Muestra el resultado del sorteo
    return;
}
