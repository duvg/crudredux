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

// state
const initialState = {
    productos: [],
    error: null,
    loading: false
}


export default function(state = initialState, action) {
    switch(action.type) {
        // Agreagar un producto
        case AGREGAR_PRODUCTO:
            return {
                ...state,
                error: null,
            }
        case AGREGAR_PRODUCTO_EXITO:
            return {
                ...state,
                error: null,
                productos: [...state.productos, action.payload]
            }
        case AGREGAR_PRODUCTO_ERROR:
            return {
                ...state,
                error: action.payload,
            }
        // Obtener los productos para el listado
        case COMENZAR_DESCARGA_PRODUCTOS:
            return {
                ...state,
                loading: true
            }
        case DESCARGA_PRODUCTOS_EXITOSA:
            return {
                ...state,
                productos: action.payload,
                loading: false,
                error: false
            }
        case DESCARGA_PRODUCTOS_ERROR:
            return {
                ...state,
                productos: [],
                error: true
            }
        // Eliminar un producto
        case OBTENER_PRODUCTO_ELIMINAR:
            return {
                ...state,
                error: null
            }
        case PRODUCTO_ELIMINADO_EXITO:
            return {
                ...state,
                error: null,
                productos: state.productos.filter( producto => producto.id !== action.payload)
            }
        case PRODUCTO_ELIMINADO_ERROR:
            return {
                ...state,
                error: true
            }
        default:
            return state;
    }
}