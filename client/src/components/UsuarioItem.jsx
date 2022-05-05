

function UsuarioItem(props){
    return(
        <>
             <img  className="img-fluid" src={props.imagen} alt="" width="200vw" />
            <table className="table table-bordered">
                <thead>
                    <tr>
                    <th scope="col">id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Correo</th>
                    <th scope="col">Url</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">{props.id}</th>
                    <td> {props.nombre}</td>
                    <td>{props.correo}</td>
                    <td><a href={'http://localhost:3030/api/usuario/'+props.id}>{props.urlDetalleUser}</a></td>
                    </tr>
                </tbody>
            </table>
        </>

    );

}

export default UsuarioItem