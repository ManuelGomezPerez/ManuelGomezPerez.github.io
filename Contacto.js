


var nombre = document.getElementById('Nombre');
var telefono = document.getElementById('Telefono');
var error = document.getElementById('error');
var email = document.getElementById("email")
var title= document.getElementById("title")
error.style.color='red';


function EnviarFormulario(){
    console.log('Enviando Formulario');

    var mensajesError =[];

    if(nombre.value == null || nombre.value === ''){
        mensajesError.push('Ingresa tu Nombre')
    }

    if(telefono.value == null || telefono.value === ""){
        mensajesError.push('Ingresa tu Telefono')
    }

    if(email.value == null || email.value === ''){
        mensajesError.push('Ingresa tu Correo')
    }

    if(title.value == null || title.value === ''){
        mensajesError.push('Ingrese un Motivo')
    }

    error.innerHTML = mensajesError.join(', ');

    return false;
  }



