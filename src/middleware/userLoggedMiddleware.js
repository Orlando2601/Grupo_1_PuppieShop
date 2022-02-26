const fs = require('fs');
const path = require('path');
const userFilePath = path.join(__dirname, '../data/user.json');
const usuarios = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));

function userLoggedMiddelware (req, res, next){
    res.locals.logueado = false;
    let usercookie = usuarios.find(user => user.correo == req.cookies.correo);
       
    if(usercookie){
        req.session.usuarioLogueado = usercookie
    }

    if (req.session && req.session.usuarioLogueado ){
        res.locals.logueado = true
        res.locals.usuarioLogueado = req.session.usuarioLogueado
    }
    next()



}

module.exports = userLoggedMiddelware