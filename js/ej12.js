//valida el email pasado como parametro
function validarEmail(cadena) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(cadena)) {
        alert("La dirección de email " + cadena + " es correcta.");
    } else {
        alert("La dirección de email es incorrecta.");
    }
}
//captura el valor introducido en el input y lo trata llamando a la funcion
//validarEmail()
function miFuncEmail() {
    var email = document.getElementById("email").value
    console.log(email);
    //validar email
    console.log("la cadena es: ", email);
    validarEmail(email)
}
//valida la fecha pasada como parametro
function validarFecha(fecha) {
    if (/^\w*\d{2}\/\d{2}\/\d{4}$/.test(fecha)) {
        alert("la fecha es correcta");
    }
    else {
        alert("la fecha es incorrecta")
    }
}
//captura el valor introducido en el input y lo trata llamando a la funcion
//validarFecha()
function miFuncFecha() {
    var fecha = document.getElementById("fecha").value
    console.log(fecha);
    //validar fecha
    console.log("la cadena es: ", fecha);
    validarFecha(fecha)
}


//EJERCICIO ACTUAL 
function escapeHTML(cadena) {
    if (/([\&\\\<\>]?)$/.test(cadena)) {
        console.log(typeof(cadena));
        alert("la cadena contiene algun caracter especial");
    }
    else {
        alert("la cadena no contiene ningun caracter especial");
    }
    var aux=cadena
    aux = aux.replace(/\&/g, 'a')
    
}

function miFuncCadena() {
    var cadena = document.getElementById("cadena").value;
    console.log(cadena);
    console.log(typeof(cadena));
    escapeHTML(cadena);
}

