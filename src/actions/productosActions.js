import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types';

import clientAxios from '../config/axios';


// Crear un nuevo producto - Funcion principal
export function crearNuevoProductoAction(producto) {
    return (dispatch) => {
        dispatch( nuevoProducto() );

        // Insertar registro en la API
        clientAxios.post('/libros', producto)
            .then(response => {
                console.log(response);
                dispatch( agregarProductoExito(producto) );
            })
            .catch(error => {
                console.log(error);

                dispatch( agregarProductoError(true) )
            });
    }
}


export const nuevoProducto = () => ({
    type: AGREGAR_PRODUCTO
});

export const agregarProductoExito = producto => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
});

export const agregarProductoError = error => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: error
});
