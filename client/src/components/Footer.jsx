function Footer (){
    return (
<footer id="footer">
    <div className="Container_footer">
            <div className="box_footer">
                <div className="logo">
                    <img className="imagen" src="/images/LOGOB.png" alt="logo Petshop" />       
                </div>
                <div className="terms">
                    <p>PuppieShop es una tienda online para mascotas que cuenta con una gran variedad de productos para la diversión, 
                    entrenamiento, alimentación y salud de tu mascota. Además, cuenta con una red, a través de la cual todos los
                    usuarios pueden compartir tips de cuidado. PuppieShop cuenta con servicio de entrega a domicilio a nivel nacional. </p>
                </div>
            
        </div>
        <div className="box_copyright">
            <hr />
            <p>Todos los derechos reservados © 2021
            <b> PuppieShop</b></p>
        </div>
    </div>
</footer>
    );
}

export default Footer;