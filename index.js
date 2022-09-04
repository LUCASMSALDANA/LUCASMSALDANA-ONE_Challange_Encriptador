// Determino los query Selector y sus constantes.

const txtAencriptar = document.querySelector("#Encriptador");
const txtEncriptado = document.querySelector("#TxtEncriptado");
const btnEncriptar = document.querySelector(".encriptar");
const btnDesencriptar = document.querySelector(".desencriptar");
const btnCopiar = document.querySelector(".copiar");
const titulo = document.querySelector(".logo")

// Defino que funcion va a ejecutar cada boton.
btnEncriptar.onclick = btnEncriptarTexto;
btnDesencriptar.onclick = btnDesencriptarTexto;
btnCopiar.onclick = copiarTxtEncriptado;

//Encripto el titulo
const tituloDesencriptado = titulo.textContent;
const tituloEncriptado = encriptarTexto(titulo.textContent);


//Boton de Encriptar Texto
function btnEncriptarTexto(){
    let texto=txtAencriptar.value.toLowerCase().trim();
    if(texto!=""){
        texto = encriptarTexto(texto)
        txtEncriptado.value=texto;
        txtEncriptado.style.backgroundImage="none";
        titulo.textContent=tituloEncriptado;
        txtAencriptar.value="";
    }else{
        alert("Debe ingresar un mensaje a Encriptar")
    }
}

// Esta funcion encripta cualquier texto que le pasemos
function encriptarTexto(texto) {
    if(texto.includes("e")){
        texto=texto.replaceAll("e","enter");
    }
    if(texto.includes("i")){
        texto=texto.replaceAll("i","imes");
    }
    if(texto.includes("a")){
        texto=texto.replaceAll("a","ai");
    }
    if(texto.includes("o")){
        texto=texto.replaceAll("o","ober");
    }
    if(texto.includes("u")){
        texto=texto.replaceAll("u","ufat");
    }
    return texto;
}

//Boton para Desencriptar
function btnDesencriptarTexto(){
    let texto=txtAencriptar.value.toLowerCase().trim();
    if(texto!=""){
        texto = desencriptarTexto(texto)
        txtEncriptado.value=texto;
        txtEncriptado.style.backgroundImage="none";
        titulo.textContent=tituloDesencriptado;
        txtAencriptar.value="";
    }else{
        alert("Debe ingresar un mensaje a Desencriptar")
    }
}


function desencriptarTexto(texto){
    if(texto.includes("ufat")){
        texto=texto.replaceAll("ufat","u");
    }
    if(texto.includes("ober")){
        texto=texto.replaceAll("ober","o");
    }
    if(texto.includes("ai")){
        texto=texto.replaceAll("ai","a");
    }
    if(texto.includes("imes")){
        texto=texto.replaceAll("imes","i");
    }
    if(texto.includes("enter")){
        texto=texto.replaceAll("enter","e");
    }
    return texto;
}

function copiarTxtEncriptado(){
    if (txtEncriptado.value!=""){
        txtAencriptar.value=txtEncriptado.value;
        txtEncriptado.value="";
        if(window.innerWidth>=768){
            txtEncriptado.style.backgroundImage="linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5)) ,url(img/Muñeco.png)";
        }else{
         txtEncriptado.style.backgroundColor="background-color: rgb(104, 104, 104);";  
        }
    }
}