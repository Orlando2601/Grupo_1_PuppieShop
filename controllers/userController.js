/* const { json } = require('body-parser'); */
const req = require('express/lib/request');
const fs = require('fs');
const path = require('path')
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const userController ={
    login: (req,res)=>{
        res.render('login')
    },
    registro:(req,res)=>{
        res.render('registro')
    },
}

module.exports = userController