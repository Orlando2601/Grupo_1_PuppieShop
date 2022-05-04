
import { Link,Route,Routes } from "react-router-dom"



function Header (){
return(
       
        <header>
    <div className="caja-logo">
        <Link to="/"><img src="/images/LOGOB.png"  alt="Logo PuppieShop" /></Link>              
                           
    </div>
    <div className="header-right">
        <div className="redes">
            <div className="iconred">
                <a href="https://www.google.com/" target="blank" ><i className="fab fa-instagram"></i></a> 
                
            </div>
            <div className="iconred">
                <a href="https://www.google.com/" target="blank" ><i className="fab fa-facebook-f"></i></a>
                
            </div>
            <div className="iconred">
                <a href="https://www.google.com/" target="blank" ><i className="fab fa-whatsapp"></i></a>
            </div>


        </div>

        <div className="caja-enlace-header">
            <div className="div-btn-header">
                <Link className="a-btn-header" to="/comida">Productos</Link>
            </div>
            <div className="div-btn-header">
                <Link className="a-btn-header" to="#">Contactanos</Link>
            </div>
                <div className="iconred">
                    <Link to="/user"><i className="fa-solid fa-user"></i></Link>
                </div>

      
            <div className="iconred">
                <Link to="/carrito"><i className="fas fa-shopping-cart"></i></Link>
            </div>
        </div>
    </div>
               
      </header>


               
);
}

export default Header;