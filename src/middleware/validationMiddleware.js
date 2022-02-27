
const express = require('express')
const app = express()
const router = express.Router()

const { validationResult } = require('express-validator')

function validationMiddleware(req,res,next){
    let errors=validationResult(req);
    let validacion=errors.array()

    errors.isEmpty()?next():res.render('adminProducts/crearProducto',{errors:errors.mapped(),old:req.body,validacion})


}
module.exports=validationMiddleware;