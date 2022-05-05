

function Ultimo(props) {
    let image="/images/productsDB/";
    let largo=props.item.length;
    const last=props.item[largo-1]
    
    
    return(
        
         <article className="ultimo">
             <h1>Ultimo agregado</h1>
            <img src={image+last.imagen} alt=""/> 
            <div className="vermas">
               <div className="descripcionMas">
                  <p key={last.id}>Tipo: {last.mascota.tipo_mascota}  </p>
                  <p key={last.id}>Razas:  {last.raza} </p>
                  <p key={last.id}>Descripcion: {last.categoria} </p>
                  <p key={last.id}>Tamanio: {last.tamanio} kg</p>
                  <p key={last.id}>Precio: $ {last.precio} </p> 
               </div>
                <button><a href="/detalle/">DETALLES</a></button>
             </div>
         </article> 
        
        
        


    )
    
}

export default Ultimo