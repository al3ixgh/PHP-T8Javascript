window.onload = imprimeHora;

function imprimeHora(){
    data= new Date()
    document.getElementById("reloj").innerHTML = data.getHours() +":"+data.getMinutes()+":"+data.getSeconds();
    setInterval('imprimeHora()',1000);
}