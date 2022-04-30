import React from "react";

function Header (){
return(
    <React.Fragment>
        
    <header>
    <div className="caja-logo">
        <a href="/"><img src="/images/LOGOB.png"  alt="Logo PuppieShop" /></a>              
                           
    </div>
    <div className="header-right">
        <div className="redes">
            <div className="iconred">
                <a href="https://www.google.com/" target="blank" /><i class="fab fa-instagram"></i> 
                
            </div>
            <div className="iconred">
                <a href="https://www.google.com/" target="blank" /><i class="fab fa-facebook-f"></i>
                
            </div>
            <div className="iconred">
                <a href="https://www.google.com/" target="blank" /><i class="fab fa-whatsapp"></i>
            </div>


        </div>

        <div className="caja-enlace-header">
            <div className="div-btn-header">
                <a className="a-btn-header" href="/comida">Productos</a>
            </div>
            <div className="div-btn-header">
                <a className="a-btn-header" href="#">Contactanos</a>
            </div>
                <div className="iconred">
                    <a href="/user/login" /><i className="fa-solid fa-user"></i>
                </div>

      
            <div className="iconred">
                <a href="/carrito"><i className="fas fa-shopping-cart"></i></a>
            </div>
        </div>
    </div>
</header>
    </React.Fragment>
);
}

export default Header;