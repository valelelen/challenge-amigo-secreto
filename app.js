// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];
let numeroParticipantes = "Número de participantes: " + listaAmigos.length;

function agregarAmigo() {
    // Añade un amigo a la lista de amigos
    let campoTexto = document.getElementById("amigo");
    if (campoTexto == null) { 
       alert("Por favor, ingresa un nombre.");
       return
    }
}
        if (esRepetido(campoTexto.value)) {
            crearAlerta("No se permiten participantes repetidos");
        } else {
            listaAmigos.push(campoTexto.value);
            campoTexto.value = "";
            actualizarNumeroParticipantes();
        }
    

