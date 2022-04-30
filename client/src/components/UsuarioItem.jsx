

function UsuarioItem(props){
    return(
        <div>
            <p>Usuario</p>
            <tr className="list-group list-group-flush">
                <th className="list-group-item">Nombre: {props.nombre}</th>
                <th className="list-group-item">Apellido: {props.apellido}</th>
                <th className="list-group-item">Correo: {props.correo}</th>
                <a className="list-group-item" href="http://localhost:3030/api/usuario/">Detalle: {props.urlDetalleUser}</a>
            </tr>

        </div>

    );

}

export default UsuarioItem