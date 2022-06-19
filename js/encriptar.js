
var mensaje = document.querySelector(".mensaje");
var salida = document.querySelector(".salida");
var card1 = document.querySelector(".card1");
var card2 = document.querySelector(".card2");
card2.style.display = "none";
/* Encriptador */

// Boton encriptar

function btnEncriptar() {
    if (mensaje.value.length == 0) {
        alert("No se ha encontrado ningún texto para encriptar")
    } else {
        const textoEncriptado = encriptar(mensaje.value);
        salida.value = textoEncriptado;
        card2.style.display = "flex";
        card1.style.display = "none";
        mensaje.value = "";
        alert("Texto encriptado");
    }
}

// Funcion encriptar

function encriptar(stringAEncriptar){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringAEncriptar = stringAEncriptar.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringAEncriptar.includes(matrizCodigo[i][0])) {
            stringAEncriptar = stringAEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return stringAEncriptar;
}

/* Desencriptador*/

// Boton desencriptar

function btnDesencriptar() {
    if (mensaje.value.length == 0) {
        alert("No se ha encontrado ningún texto para desencriptar")
    } else {
    const textoEncriptado = desencriptar(mensaje.value);
    salida.value = textoEncriptado;
    card2.style.display = "flex";
    card1.style.display = "none";
    mensaje.value = "";
    alert("Texto desencriptado");
    }
}
// Funcion Desencriptar

function desencriptar(stringADesencriptar){
    let matrizCodigo= [["enter", "e"], ["imes","i"], ["ai","a"], ["ober","o"], ["ufat","u"]];
    stringADesencriptar = stringADesencriptar.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringADesencriptar.includes(matrizCodigo[i][0])) {
            stringADesencriptar = stringADesencriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return stringADesencriptar;
}

// Boton copiar

function btnCopiar() {
    salida.select();
    salida.setSelectionRange(0,99999);
    navigator.clipboard.writeText(salida.value);
        alert ("¡Mensaje copiado al portapapeles!");
    card2.style.display = "none";
    card1.style.display = "flex";
}

// Validar el texto

mensaje.addEventListener("keypress", function(e){

    if (!checkChar(e)){
        e.preventDefault();
        alert("¡Solo minúsculas, sin acentos o saltos de línea!")
    }
})

function checkChar(e){
    const char= String.fromCharCode(e.keyCode);

    if (char.match("[a-z ]")) {
        return(true);
    }
}