function notLogMiddleware (req, res,next){
    !req.session.usuarioLogueado ? res.redirect('/user/login') : next()
}/* middleware para garantizar que si no hay una sesion iniciada no se pueda acceder a adminPerfil por ningun medio */

module.exports = notLogMiddleware