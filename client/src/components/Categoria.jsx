


function Categoria(props) {
   
          
            const ProPlan =props.marca.productos.filter(item=>item.marca.nombre_marca==="Pro Plan")
            const DogShow =props.marca.productos.filter(item=>item.marca.nombre_marca==="Dog Show")
            const PurinaOne =props.marca.productos.filter(item=>item.marca.nombre_marca==="Purina One")
            const Chunky =props.marca.productos.filter(item=>item.marca.nombre_marca==="Chunky")

        
    return(
        <>
        <h1>Cantidad de productos por Marcas</h1>
            <table className="table">
  <thead>
    <tr>

      <th scope="col">Marca</th>
      <th scope="col">Cantidad</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Pro Plan</th>
      <td>{ProPlan.length}</td>
    </tr>
    <tr>
      <th scope="row">Dog Show</th>
      <td>{DogShow.length}</td>

    </tr>
    <tr>
      <th scope="row">Purina One</th>
      <td>{PurinaOne.length}</td>

    </tr>
    <tr>
      <th scope="row">Chunky</th>
      <td>{Chunky.length}</td>

    </tr>

  </tbody>
</table>


        </>



    )

    
}

export default Categoria