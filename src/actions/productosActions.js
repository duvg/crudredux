import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITOSA,
    DESCARGA_PRODUCTOS_ERROR,
    OBTENER_PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINADO_EXITO,
    PRODUCTO_ELIMINADO_ERROR
} from '../types';

import clientAxios from '../config/axios';


// Crear un nuevo producto - Funcion principal
export function crearNuevoProductoAction(producto) {
    return (dispatch) => {
        dispatch( nuevoProducto() );

        // Insertar registro en la API
        clientAxios.post('/libros', producto)
            .then(response => {
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

// Obtener el listdo de productis, consulta a la API

export function obtenerProductosAction () {
    return (dispatch) => {
        dispatch( obtenerProductosComienzo() );

        // Consultar la API
        clientAxios.get('/libros')
            .then(response => {
                // console.log(response);
                dispatch( descargaProductosExitosa(response.data) );
            })
            .catch(error => {
                // console.error(error);
                dispatch( descargaProductosError() );
            })
    }
}


export const obtenerProductosComienzo = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS
});


export const descargaProductosExitosa = productos => ({
    type: DESCARGA_PRODUCTOS_EXITOSA,
    payload: productos
});

export const descargaProductosError = () => ({
    type: DESCARGA_PRODUCTOS_ERROR
});


// Eliminar un producto
export function borrarProductoAction( id ) {
    return ( dispatch ) => {
        dispatch( obtenerProductoEliminar() );


        // Eliminar registro en la API
        clientAxios.delete(`/libros/${id}`)
            .then(response => {
                console.log(response);
                dispatch( eliminarProductoExito(id) );
            })
            .catch(error => {
                console.error(error);
                dispatch( eliminarProductoError() );
            })  

    }
}

export const obtenerProductoEliminar = () => ({
    type: OBTENER_PRODUCTO_ELIMINAR    
});

export const eliminarProductoExito = id => ({
    type: PRODUCTO_ELIMINADO_EXITO,
    payload: id
});

export const eliminarProductoError = () => ({
    type: PRODUCTO_ELIMINADO_ERROR
});
