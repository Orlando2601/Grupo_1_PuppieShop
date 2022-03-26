
const express = require('express')
const app = express()
const router = express.Router()
const db = require('../database/models');

const { validationResult } = require('express-validator')

const validationMiddleware= async (req,res,next)=>{
    const marca = await db.Marca.findAll();
    let errors=validationResult(req);
    let validacion=errors.array()

    errors.isEmpty()?next():res.render('adminProducts/crearProducto',{errors:errors.mapped(),old:req.body,validacion,marca})


}
module.exports=validationMiddleware;