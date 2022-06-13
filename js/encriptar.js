
const mensaje = document.querySelector(".mensaje");
const salida = document.querySelector(".salida");

function btnEncriptar() {
    const textoEncriptado = encriptar(mensaje.value);
    salida.value = textoEncriptado;
}
function encriptar(stringAEncriptar){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    stringAEncriptar = stringAEncriptar.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringAEncriptar.includes(matrizCodigo[i][0])) {
            stringAEncriptar = stringAEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return stringAEncriptar;
}