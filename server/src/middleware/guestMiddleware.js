function guestMiddleware (req, res,next){
    req.session.usuarioLogueado ? res.redirect('/user/adminPerfil') : next();   
}/* middleware usado para redireccionar a adminPerfil cada vez que se acceda a traves de la ruta login  */

module.exports = guestMiddleware