const textArea = document.querySelector(".texto");
const mensaje = document.querySelector(".mensaje");

const textoTitulo = document.querySelector(".texto-titulo");
const copiar = document.querySelector(".copiar");



function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    textoTitulo.style.display = "none";
    copiar.style.display = "block";
}

function encriptar(stringEncriptada){
    let matrizCodigo =[["e", "enter"],["i", "imes"], ["a", "ai"],["o", "ober"],["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}

function btnDesencriptar(){
  const textoEncriptado = desencriptar(textArea.value)
  mensaje.value = textoEncriptado
  textArea.value = "";
  textoTitulo.style.display = "none";
  copiar.style.display = "block";
}

function desencriptar(stringDesencriptada){
  let matrizCodigo =[["e", "enter"],["i", "imes"], ["a", "ai"],["o", "ober"],["u", "ufat"]];
  stringDesencriptada = stringDesencriptada.toLowerCase()

  for(let i = 0; i < matrizCodigo.length; i++){
      if(stringDesencriptada.includes(matrizCodigo[i][1])){
        stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1]   , matrizCodigo[i][0])
      }
  }
  return stringDesencriptada
}

function btnCopiar(){
  var btnCopiar = document.getElementById("textoEncriptado");
  btnCopiar.select();
  btnCopiar.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(btnCopiar.value);
  alert("texto copiado");

  
  textoTitulo.style.display = "block";
  copiar.style.display = "none";

  textoEncriptado.value = "";
}


