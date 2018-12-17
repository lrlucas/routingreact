import React from 'react'
import { Link } from 'react-router-dom';

const Producto = (props) => {
    
    const { imagen, nombre, precio, id} = props.informacion;

    return(
        <li>
            <Link to={`/producto/${id}`}>

                <img src={`./img/${imagen}.png`} alt={nombre}/>
            </Link>
            <p>{nombre} <span> $ {precio}</span></p>
            <Link to={`/producto/${id}`}>Mas informacion</Link>
        </li>
    )

}

export default Producto;
