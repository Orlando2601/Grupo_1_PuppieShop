window.onload = function(){
    
    console.log('hola desde el form crear');
    const expresionImg = /\.(jpeg|jpg|png|gif)$/i;
    const formCrearproducto = document.querySelector('#formCrearProducto');
    const errorTipoMascota = document.querySelector('#errorTipoMascota');
    const mascota = document.getElementsByName('id_mascota')
    const tamaño = document.getElementsByName('raza')
    const errorTamañoMascota = document.querySelector('#errorTamañoMascota');
    const categoria = document.getElementsByName('categoria');
    const errorCategoriaProductos = document.querySelector('#errorCategoriaProductos');
    const marca = document.getElementsByName('id_marca');
    const errorMarca = document.querySelector('#errorMarca');
    const tamañoProducto = document.querySelector('#tamaño');
    const errorTamañoProducto = document.querySelector('#errorTamaño');
    const cantidad = document.querySelector('#cantidad');
    const errorCantidad = document.querySelector('#errorCantidad');
    const precio = document.querySelector('#precio');
    const errorPrecio = document.querySelector('#errorPrecio');
    const imagenProducto = document.querySelector('#imagenProducto');
    const errorImgProducto = document.querySelector('#errorImgProducto')

    const errors = {};
   formCrearproducto.addEventListener('submit', function(ev){
      
            
        let tipo = new String;
        mascota.forEach((e)=>{ 
            if(e.checked == true){
                tipo = e.value
            }     
        });
        
        tipo.length == 0 ? (errors.tipo = 'Verifique el campo tip de mascota', errorTipoMascota.innerText = 'campo tipo mascota sin elegir' ): (delete errors.tipo, errorTipoMascota.innerText = '' );

        let tamañoMascota = new String;
        tamaño.forEach((e)=>{ 
            if(e.checked == true){
                tamañoMascota = e.value
            }     
        });
        
        tamañoMascota.length == 0 ? (errors.tamañoMascota = 'Verifique el campo tamaño de mascota', errorTamañoMascota.innerText = 'campo tamaño mascota sin elegir' ): (delete errors.tamañoMascota, errorTamañoMascota.innerText = '' );
        
        let categoriaProductos = new String;
        categoria.forEach((e)=>{ 
            categoriaProductos = e.value
        });
        categoriaProductos.length == 0 ? (errors.categoriaProductos = 'Verifique el campo categoria de mascota', errorCategoriaProductos.innerText = 'campo categoria mascota sin elegir' ): (delete errors.categoriaProductos, errorCategoriaProductos.innerText = '' );

        let marcaProductos = new String;
        marca.forEach((e)=>{ 
            marcaProductos = e.value
        });
        console.log(marcaProductos)
        marcaProductos.length == 0 ? (errors.marcaProductos = 'Verifique el campo marca de mascota', errorMarca.innerText = 'campo marca mascota sin elegir' ): (delete errors.marcaProductos, errorMarca.innerText = '' );

        tamañoProducto.value.length === 0 ? (errors.tamañoProducto = 'Verifique el campo correo', errorTamañoProducto.innerText = 'campo tamaño incorrecto' ): (delete errors.tamañoProducto, errorTamañoProducto.innerText = '' );
        
        
        cantidad.value.length === 0 ? (errors.cantidad = 'Verifique el campo cantidad', errorCantidad.innerText = 'campo cantidad incorrecto' ): (delete errors.cantidad, errorCantidad.innerText = '' );
        precio.value.length === 0 ? (errors.precio = 'Verifique el campo precio', errorPrecio.innerText = 'campo precio incorrecto' ): (delete errors.precio, errorPrecio.innerText = '' );

        !expresionImg.test(imagenProducto.value) ? (errors.imagenProducto = 'Verifique el formato imagen', errorImgProducto.innerText = 'Verifique el formato imagen' ): (delete errors.imagenProducto, errorImgProducto.innerText = '' );

        if(Object.keys(errors).length > 0){
            ev.preventDefault()
        }
        
        
        
        


    }) 



}
