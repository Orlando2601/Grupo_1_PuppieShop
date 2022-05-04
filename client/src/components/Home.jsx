import { Link } from "react-router-dom"


function Home() {
    return(
            <body>
        
        <main id="main" className="mainHome"> 
            <section>
                <div className="descripcionSeccion">
                    <h2>Alimentos para tu mascota</h2>
                    <p>Contamos con una gran variedad de marcas de alimentos secos y humedos para suplir las necesidades de tu mascota</p>
                </div>
                <picture className="imagenSeccion">
                    <Link to="/comida"><img src="/images/alimentosmascotas.jpg" alt=""/></Link>
                </picture>
            </section>{/* <!-- Sección de alimentos --> */}
                           

            
            <section>
                <picture className="imagenSeccion">
                    <Link to="#"> <img src="/images/aseomascotas.jpg" alt=""/></Link>
                   
                </picture>
                <div className="descripcionSeccion">
                    <h2>Insumos de aseo para tu mascota</h2>
                    <p>Todos los productos de aseo cuentan con propiedades naturales que ayduan a eliminar cuerpos extraños de la piel de tus masoctas, además de una fragancia natural suave libre de quimicos que puedan comprometer su suave pelaje</p>
                </div>

            </section>{/* <!-- Sección de aseo --> */}
            <section>
                <div className="descripcionSeccion">
                    <h2>Accesorios y juguetes para tu mascota</h2>
                    <p>Nuestros accesorios estan hechos con materiales de alta duración especial para esos amigos mordelones, suave con sus encías y muy llamativos para lograr activar su isntinto de juego y liberar sus mentes de cualquier estres que los rodee</p>
                </div>
                <picture className="imagenSeccion">
                    <Link to="#"> <img src="/images/accesorios.jpg" alt=""/></Link>
                   
                </picture>
            </section>{/* <!-- Sección de accesorios --> */}
    
        </main>
        
    </body>
    )
}

export default Home

