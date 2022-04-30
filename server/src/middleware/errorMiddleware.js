function error404(req,res,next){

    res.status(404).render('error.ejs')
    
   
next()

}



module.exports = error404