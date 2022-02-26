const fs = require('fs');
const path = require('path');
const userFilePath = path.join(__dirname, '../data/user.json');
const usuarios = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));

function recordarmiddleware(req,res,next){
    console.log(res.locals.recordame)

}

module.exports=recordarmiddleware;