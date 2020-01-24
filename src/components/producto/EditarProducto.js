import React, { useEffect, Fragment, useRef } from 'react';


// Redux
import { useDispatch, useSelector } from 'react-redux';
import { obtenerProductoEditarAction, editarProductoAction } from '../../actions/productosActions';
import { validarFormularioAction, validacionExitoAction, validacionErrorAction } from '../../actions/validationActions';

import Swal from 'sweetalert2';

const EditarProductos = ({ history, match }) => {

    // Crear los refs
    const nombreRef = useRef('');
    const precioRef = useRef('');

    // Dispatch para ejecutar la accion principal
    const dispatch = useDispatch();

    const editarProducto = (producto) => dispatch( editarProductoAction(producto));

    // Validar formulario
    const validarFormulario = () => dispatch( validarFormularioAction() );
    const validacionExito = () => dispatch( validacionExitoAction() );
    const validacionError = () => dispatch( validacionErrorAction() );

    // Obtener id del producto a editar
    const { id } = match.params;

    useEffect(
        () => {
            dispatch(obtenerProductoEditarAction(id));
        }, [dispatch, id]
    );

    // Acceder al state
    const producto = useSelector( state => state.productos.producto);
    const error = useSelector( state => state.productos.error );
    
    // Cuando carga la api
    if(!producto) return 'Cargando...';
    

    const submitEditarProducto = e => {
        e.preventDefault();

        // Validar el formulario
        validarFormulario();

        if(nombreRef.current.value.trim() === '' || precioRef.current.value.trim() === '') {
            validacionError();
            return;
        }

        // Si pasa la validación
        validacionExito();

        
        // Guardar los cambios 
        editarProducto({
            id,
            nombre: nombreRef.current.value,
            precio: precioRef.current.value
        });

        Swal.fire(
            'Edición exitosa!',
            'El producto se actualizó correctamente',
            'success'
        );

        // Redireccionar
        history.push('/');
    }

    return(
        <Fragment>
            { error ? <div className="alert alert-danger font-weight-bold text-center mt-4">Hubo un error, intenta de nuevo</div> : 
            <div className="row justify-content-center mt-5">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="text-center">Editar Producto</h2>
                            <form
                                onSubmit={submitEditarProducto}
                            >
                                <div className="form-group">
                                    <label>Nombre</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Nombre"
                                        defaultValue={producto.nombre}
                                        ref={nombreRef}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Precio del Producto</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Precio"
                                        defaultValue={producto.precio}
                                        ref={precioRef}
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Guardar Cambios</button>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div> 
            }
        </Fragment>
    );
}

export default EditarProductos;