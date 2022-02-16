const fs = require('fs');
const path = require('path');
const userFilePath = path.join(__dirname, '../data/user.json');
const usuarios = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));

function recordarmiddleware(req,res,next){
    
    if(req.cookies.correo!=undefined){
        

        let usercookie = usuarios.find(user => user.correo == req.cookies.correo);
        usercookie? res.redirect('/'):next(); 
    }else{
    next();}

}

module.exports=recordarmiddleware;