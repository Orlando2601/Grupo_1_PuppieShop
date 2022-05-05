import Header from "./Header";
import Footer from "./Footer";
import Usuarios from "./Usuarios"; 
import Home from "./Home";
import ListaProductos from "./ListaProductos";
import { useEffect, useState } from "react"

import { Route,Routes } from "react-router-dom";
import UsuarioItem from "./UsuarioItem";
import productos from "../services/productos"
import Categoria from "./Categoria";



function App () {

    const [currentitem,setcurrentitem]=useState([])
    useEffect(()=>{
        
        allproduct();
    },[])
    
    const allproduct =async ()=>{
        const dataproducts =await productos();
        
        if(dataproducts.data){
            setcurrentitem(dataproducts.data)
        }
    }
    
    
    return (
        <>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/comida" element={<ListaProductos currentitem={currentitem}/>}/>
                    <Route path="/user" element={<Usuarios/>}/>
                    <Route path="/categoria" element={<Categoria marca={currentitem}/>}/>
                    
                </Routes>
                <Footer/>
                </>
    );
}

export default App;