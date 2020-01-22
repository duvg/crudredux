import React, { Fragment, useEffect } from 'react';

import Producto from './Producto';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { obtenerProductosAction } from '../../actions/productosActions';

const Productos = () => {

    // Llamada a la acción principal
    const dispatch = useDispatch();

    useEffect( 
        () => {
            const cargarProductos = () => dispatch( obtenerProductosAction() );
            cargarProductos();
            console.log("asds");
        }, []
    );

    // Acceder al state
    const loading = useSelector(state => state.productos.loading);
    const error = useSelector(state => state.productos.error);
    const productos = useSelector(state => state.productos.productos);


    return(
        <Fragment>
            { error ? <div className="alert alert-danger font-weight-bold text-center mt-4">Ocurrio un Error...</div> : null } 
                <Fragment>
                    <h2 className="text-center my-5">Listado de Productos</h2>

                    <table className="table table-striped">
                        <thead className="bg-primary table-dark">
                            <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Precio</th>
                                <th scope="col acciones">Acciones</th>
                            </tr>   
                        </thead>
                        <tbody>
                            { productos.map(producto => (
                                <Producto
                                    key={producto.id}
                                    producto={producto}
                                />
                            ))}
                        </tbody>
                    </table>
                { loading ? 'Cargando...' : null}
                </Fragment>
        </Fragment>
    );
}


export default Productos;