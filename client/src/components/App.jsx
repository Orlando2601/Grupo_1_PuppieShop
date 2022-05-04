import Header from "./Header";
import Footer from "./Footer";
import Usuarios from "./Usuarios"; 
import Home from "./Home";
import ListaProductos from "./ListaProductos";

import { Route,Routes } from "react-router-dom";
import UsuarioItem from "./UsuarioItem";


function App () {
    return (
        <>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/comida" element={<ListaProductos/>}/>
                    <Route path="/user" element={<Usuarios/>}/>
                </Routes>
                <Footer/>
                </>
    );
}

export default App;