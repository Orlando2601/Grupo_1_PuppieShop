import { useEffect, useState } from "react"
import productos from "../services/productos"



function ListaProductos() {
    let image="/images/productsDB/";
    const [currentitem,setcurrentitem]=useState([])
    console.log(currentitem)

    useEffect(()=>{
        const allproduct =async ()=>{
            const dataproducts =await productos();
            if(dataproducts.data){
                setcurrentitem(dataproducts.data)
            }
            
            
        }
        allproduct();

    },[])
    
    return(
           
          <main id="main"  className="mainListaProductos">
            
                 {currentitem.map(item=>
                    <article>
                        
                <img src={image+item.imagen} alt=""/> 
                <div className="vermas">
                    <div className="descripcionMas">
                       <p>Tipo:   </p>
                        <p>Razas:  {item.raza} </p>
                        <p>Descripcion: {item.categoria} </p>
                        <p>Tamanio: {item.tamanio} kg</p>
                        <p>Precio: $ {item.precio} </p> 
                    </div>
                    <button><a href="/detalle/">DETALLES</a></button>
                </div>
            </article>
            )}
        </main>
    )
}
export default ListaProductos