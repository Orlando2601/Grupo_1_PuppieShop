
import { Link } from "react-router-dom";
import Ultimo from "./Ultimo";



function ListaProductos(props) {
    let image="/images/productsDB/";
    let det="/detalle/";
    
    
    return(
           
          <main id="main"  className="mainListaProductos">

                 {props.currentitem.productos.map(item=>
                    <article>
                        
                          <img src={image+item.imagen} alt=""/> 
                         <div className="vermas">
                             <div className="descripcionMas">
                                <p key={item.id}>Tipo: {item.mascota.tipo_mascota}  </p>
                                 <p key={item.id}>Razas:  {item.raza} </p>
                                 <p key={item.id}>Descripcion: {item.categoria} </p>
                                 <p key={item.id}>Tamanio: {item.tamanio} kg</p>
                                 <p key={item.id}>Precio: $ {item.precio} </p> 
                             </div>
                             <button><Link to={det+item.id}>DETALLES</Link></button>
                         </div>
                    </article>
                 )} 

                 <Ultimo item={props.currentitem.productos}/>
                 
                 
                     

        </main>
    )
}
export default ListaProductos