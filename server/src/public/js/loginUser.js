window.onload = function(){
    
    const logForm = document.querySelector('#logForm');
    const logCorreo = document.querySelector('#logCorreo');
    const errorLogCorreo = document.querySelector('#errorLogCorreo');
    const logPassword = document.querySelector('#logPassword');
    const errorLogPassword = document.querySelector('#errorLogPassword');
    const errors = {};
    logForm.addEventListener('submit', function(ev){
        
        logCorreo.value.length === 0 && logCorreo.value.length < 3 ? (errors.logCorreo = 'Verifique el campo correo', errorLogCorreo.innerText = 'Campo correo incorrecto' ): (delete errors.logCorreo, errorLogCorreo.innerText = '' );
        logPassword.value.length === 0 && logPassword.value.length < 8 ? (errors.logPassword = 'Verifica contrasena', errorLogPassword.innerText = 'Campo contrasena incorrecto') : (delete errors.logPassword, errorLogPassword.innerText = '')
        console.log(errors)
        if(Object.keys(errors).length > 0){
            ev.preventDefault()
        }
    })





}
