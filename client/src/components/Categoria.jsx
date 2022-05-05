


function Categoria(props) {
   
          
            const ProPlan =props.marca.productos.filter(item=>item.marca.nombre_marca==="Pro Plan")
            const DogShow =props.marca.productos.filter(item=>item.marca.nombre_marca==="Dog Show")
            const PurinaOne =props.marca.productos.filter(item=>item.marca.nombre_marca==="Purina One")
            const Chunky =props.marca.productos.filter(item=>item.marca.nombre_marca==="Chunky")

        
    return(
        <>
        
        <h1 className="marca">Pro Plan</h1>
        <p>Total de productos: {ProPlan.length}</p>
        <h1 className="marca">Dog Show</h1>
        <p>Total de productos: {DogShow.length}</p>
        <h1 className="marca">Purina One</h1>
        <p>Total de productos: {PurinaOne.length}</p>
        <h1 className="marca">Chunky</h1>
        <p>Total de productos: {Chunky.length}</p>
        </>



    )

    
}

export default Categoria