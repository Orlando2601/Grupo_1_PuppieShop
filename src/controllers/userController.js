const fs = require('fs');
const path = require('path');
const userFilePath = path.join(__dirname, '../data/user.json');
const usuarios = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));

const userController ={
    
    login: (req,res)=>{
        res.render('users/login')
    },

    registro:(req,res)=>{
        res.render('users/registro')
    },
    users:(req,res)=>{
      let nuevousuario = {
        ...req.body,
       
        
      };
      usuarios.push(nuevousuario);
      fs.writeFileSync(userFilePath,JSON.stringify(usuarios,null,' '));

      res.redirect('/');
    }
    
}



module.exports =userController;
