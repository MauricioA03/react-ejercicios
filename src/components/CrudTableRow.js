import React from 'react';

const CrudTableRow = ({el: {name, constellation}}) => {
    return (
        <tr>
            <td>{name}</td>
            <td>{constellation}</td>
            <td>
                <button>Editar</button>
                <button>Eliminar</button>
            </td>
        </tr>
    );
};

export default CrudTableRow;
