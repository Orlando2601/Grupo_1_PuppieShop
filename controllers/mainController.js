const productos=[
    {
      mascota:'Caninos',
      categoria:'alimento',
      nombre:'Proplan Active Mind',
      razas:'Medianos y grandes',
      referencia:'REF001',
      cantidad: 10,
      precio: 35000,
      tamaño: '3kg',
      imagen: 'purina-pro-plan-flagship-perros-active-mind-razas-medianas-y-grandes.png'
    },
    {
        mascota:'Caninos',
        categoria:'alimento',
        nombre:'Proplan Active Mind',
        razas:'Pequeños',
        referencia:'REF002',
        cantidad: 10,
        precio: 35000,
        tamaño: '3kg',
        imagen: 'purina-pro-plan-flagship-perros-active-mind-razas-pequeñas.png'
      },
      {
        mascota:'Caninos',
        categoria:'alimento',
        nombre:'Proplan Adultos',
        razas:'Grandes',
        referencia:'REF003',
        cantidad: 10,
        precio: 40000,
        tamaño: '3kg',
        imagen: 'purina-pro-plan-flagship-perros-adult-razas-grandes.png'
      },
      {
        mascota:'Caninos',
        categoria:'alimento',
        nombre:'Proplan Adultos',
        razas:'Grandes',
        referencia:'REF004',
        cantidad: 10,
        precio: 40000,
        tamaño: '3kg',
        imagen: 'purina-pro-plan-flagship-perros-adult-razas-medianas.png'
      },
      {
        mascota:'Caninos',
        categoria:'alimento',
        nombre:'Proplan Delicate Structure',
        razas:'Grandes',
        referencia:'REF005',
        cantidad: 10,
        precio: 35000,
        tamaño: '3kg',
        imagen: '787-139 SL FLAGSHIP - PROPLAN REVAMP - MOCKUPS png_PNG EN BAJA RESOLUCION_MKP 787-139 PP FLAGSHIP PERROS DELICATE STRUCTURE.png'
      },
      {
        mascota:'Caninos',
        categoria:'alimento',
        nombre:'Proplan Adult',
        razas:'Pequeñas',
        referencia:'REF005',
        cantidad: 10,
        precio: 35000,
        tamaño: '3kg',
        imagen: 'purina-pro-plan-flagship-perros-adult-razas-pequeñas.png'
      },
      {
        mascota:'Caninos',
        categoria:'alimento',
        nombre:'Proplan Bright Mind',
        razas:'Pequeñas',
        referencia:'REF005',
        cantidad: 10,
        precio: 35000,
        tamaño: '3kg',
        imagen: 'Purina® Pro Plan® Bright Mind.png'
      }
      


];

const controllers ={
    home: (req,res)=>{
        res.render('home')
    },
    login: (req,res)=>{
        res.render('login')
    },
    detalle: (req,res)=>{
        let ref = req.params.referencia;
        let detalle = productos.find(item => item.referencia == ref)
        res.render('detalle-producto', {lista:detalle})
    },
    registro:(req,res)=>{
        res.render('registro')
    },
    crearProducto: (req,res)=>{
        res.render('crearProducto')
    },
    editarProducto:(req,res)=>{
        res.render('editarProducto')
    },
    comida:(req,res)=>{
        res.render('listaProductos',{lista:productos})
    }

}



module.exports =controllers;
