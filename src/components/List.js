import React from 'react';
import { Link } from 'react-router-dom';

class List extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( <table className="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Leobardo</td>
                <td>Leobardo_nugue@hotmail.com</td>
                <td>
                    <div className="btn-group" role="group" aria-label="">
                        <Link type="button" className="btn btn-primary" to={"/edit"}>Editar</Link>
                        <button type="button" className="btn btn-danger">Eliminar</button>
                    </div>
                </td>
            </tr>            
        </tbody>
    </table> );
    }
}
 
export default List;