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
    console.log(users)
    this.setState({
        usuarios: users.listaUsers
    })

    
}



    render(){
        
    
        return (
           
            <React.Fragment>
                {
                    <div>
                        
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