import React, { Component } from "react";
import UsuarioItem from "./UsuarioItem";

class Usuarios extends Component{
    constructor(){
        super();
        this.state = {
            usuarios: []
        }
    }





async componentDidMount(){
    const response =await fetch("/api/usuarios");
    const users = await response.json()
    
    this.setState({
        usuarios: users.listaUsers,
        cantidad:users.totalUsuarios
    })

    
}



    render(){
        
    
        return (
           
            <React.Fragment>
                {

                    <div className="container overflow-hidden">
                        <h1>Total usuarios registrados {this.state.cantidad}</h1>
                        
                    {
                        this.state.usuarios.map((usuario, index)=>{
                            return <UsuarioItem { ...usuario} key={index}/>
                        })
                    }

                    </div>
                    
                        
                }
                   
            </React.Fragment>
            
        );
    }
   

}

export default Usuarios;