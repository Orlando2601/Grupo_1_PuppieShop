const productos=[
    {
      mascota:'perro',
      categoria:'alimento',
      nombre:'chunky',
      referencia:'REF1234',
      cantidad: 10,
      precio: 5000,
      tamaño: '2kg',
      imagen: 'purina-pro-plan-flagship-perros-active-mind-razas-medianas-y-grandes.png'
    },
    {
        mascota:'perro',
        categoria:'alimento',
        nombre:'chunky',
        referencia:'REF1234',
        cantidad: 10,
        precio: 5000,
        tamaño: '2kg',
        imagen: 'purina-pro-plan-flagship-perros-active-mind-razas-pequeñas.png'
      },
      {
        mascota:'perro',
        categoria:'alimento',
        nombre:'chunky',
        referencia:'REF1234',
        cantidad: 10,
        precio: 5000,
        tamaño: '2kg',
        imagen: 'purina-pro-plan-flagship-perros-adult-razas-grandes.png'
      },
      {
        mascota:'perro',
        categoria:'alimento',
        nombre:'chunky',
        referencia:'REF1234',
        cantidad: 10,
        precio: 5000,
        tamaño: '2kg',
        imagen: 'purina-pro-plan-flagship-perros-adult-razas-medianas.png'
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
        res.render('detalle-producto')
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
