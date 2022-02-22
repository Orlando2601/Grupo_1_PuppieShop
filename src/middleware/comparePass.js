const {body} = require('express-validator')

const comparePass = async(req,res,next)=>{
    try{
        const validarCampos = [
            body('constraseña').equals(body('repiteContraeña'))
        ]
    } catch (error) {
        
    }

}

module.exports ={
    comparePass
}