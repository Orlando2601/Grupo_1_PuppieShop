
window.onload = function(){

    console.log("hola desde el js ")
    const expresionCorreo = /\w+@\w+\.+[a-z]/ ;
    const expresionImg = /\.(jpeg|jpg|png|gif)$/i;
    const formulario = document.querySelector('#formulario');
    const nombre = document.querySelector('#nombre')
    const errorNombre = document.querySelector('#errorNombre');
    const apellido  = document.querySelector('#apellido');
    const errorApellido = document.querySelector('#errorApellido')
    const correo = document.querySelector('#correo')
    const errorCorreo = document.querySelector('#errorCorreo')
    const contraseña = document.querySelector('#contraseña');
    const errorContraseña = document.querySelector('#errorContraseña')
    const repiteContraseña = document.querySelector('#repiteContraseña');
    const errorRepiteContraseña = document.querySelector('#errorRepiteContraseña');
    const imagenUser = document.querySelector('#imagenUser');
    const errorImg = document.querySelector('#errorImg')
    const errors = {};
    formulario.addEventListener('submit', function(ev){
        
        nombre.value.length === 0 || nombre.value.length < 2 ? (errors.nombre = 'Verifique el campo nombre', errorNombre.innerText = 'campo nombre incorrecto' ): (delete errors.nombre, errorNombre.innerText = '' );
        apellido.value.length === 0 || apellido.value.length < 2 ? (errors.apellido = 'Verifique el campo apellido', errorApellido.innerText = 'campo apellido incorrecto' ): (delete errors.apellido, errorApellido.innerText = '' );
        correo.value.length === 0 && correo.value.length < 3 ? (errors.correo = 'Verifique el campo correo', errorCorreo.innerText = 'campo correo incorrecto' ): (delete errors.correo, errorCorreo.innerText = '' );
        !expresionCorreo.test(correo.value) ? (errors.correo = 'Verifique el campo correo', errorCorreo.innerText = 'campo correo incorrecto' ): (delete errors.correo, errorCorreo.innerText = '' );
        contraseña.value.length === 0 || contraseña.value.length < 8 ? (errors.contraseña = 'Verifique el campo contraseña', errorContraseña.innerText = 'campo contraseña incorrecto' ): (delete errors.contraseña, errorContraseña.innerText = '' );
        repiteContraseña.value.length === 0 || repiteContraseña.value.length < 8 ? (errors.repiteContraseña = 'Verifique el campo repiteContraseña', errorRepiteContraseña.innerText = 'campo repiteContraseña incorrecto' ): (delete errors.repiteContraseña, errorRepiteContraseña.innerText = '' );
        !expresionImg.test(imagenUser.value) ? (errors.imagenUser = 'Verifique el formato imagen', errorImg.innerText = 'Verifique el formato imagen' ): (delete errors.imagenUser, errorImg.innerText = '' );
        if(Object.keys(errors).length > 0){
            ev.preventDefault()
        }
        
    })


}