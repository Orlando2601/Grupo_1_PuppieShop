

function UsuarioItem(props){
    return(
        <div>
            <p>Usuario</p>
            <tr className="list-group list-group-flush">
                <th className="list-group-item">Nombre: {props.nombre}</th>
                <tr/>
                <th className="list-group-item">Apellido: {props.apellido}</th>
                <br/>
                <th className="list-group-item">Correo: {props.correo}</th>
                <br/>
                <a className="list-group-item" href="http://localhost:3030/api/usuario/">Detalle: {props.urlDetalleUser}</a>
            </tr>

        </div>

    );

}

export default UsuarioItem