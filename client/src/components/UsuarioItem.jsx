function UsuarioItem(props){
    return(
        <tr>
            <th>{props.nombre}</th>
            <th>{props.apellido}</th>
            <th>{props.correo}</th>
        </tr>
    );

}

export default UsuarioItem