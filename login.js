const formulario = document.getElementById("formulario");
const usuario = document.getElementById("usuario");
const expresion = /^([0-9])*$/;

const validarFormulario = () => {
    if(expresion.test(usuario.value)){
        //true
        usuario.classList.remove('formulario-incorrecto');
        usuario.classList.add('formulario-correcto');
    } else {
        //false
        usuario.classList.add('formulario-incorrecto')
    }
}

usuario.addEventListener('keyup', validarFormulario);
usuario.addEventListener('blur', validarFormulario);

formulario.addEventListener('submit', function(event) {
    if(!expresion.test(usuario.value)) {
        event.preventDefault();
        document.querySelector("p").textContent = "El usuario debe contener números"
    }
})

const boton = document.getElementById("ingresar")
boton.addEventListener("click", function() {
    var userName = document.getElementById("usuario").value;
    localStorage.setItem("nombreUsuario",userName);
})
