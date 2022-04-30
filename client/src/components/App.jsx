import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Usuarios from "./Usuarios";


function App () {
    return (
        <React.Fragment>    
                <Header/>
                <Usuarios />
                <Footer/>
        </React.Fragment>

        
    );
}

export default App;