import React, { useState } from 'react';

// Redux
import { crearNuevoProductoAction } from '../../actions/productosActions';
import { validarFormularioAction, validacionExitoAction, validacionErrorAction } from '../../actions/validationActions';
import { useDispatch, useSelector } from 'react-redux';

const NuevoProducto = ({history}) => {

    // state
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');

    // Crear nuevo producto
    const dispatch = useDispatch();
    const agregarProducto = (producto) => dispatch( crearNuevoProductoAction(producto) );
    
    // Valdiar el formulario
    const validarFormulario = () => dispatch( validarFormularioAction() );
    const validacionExito = () => dispatch( validacionExitoAction() );
    const validacionError = () => dispatch( validacionErrorAction() );

    // Obtener los datos del state
    const error = useSelector((state) => state.error.error);

    // Agrear nuevo producto
    const submitNuevoProducto = e => {
        e.preventDefault();


        // Validar el formulario

        validarFormulario();
        if(nombre.trim() === '' || precio.trim() === '') {
            validacionError();
            console.log("Error XD");
            return;
        }

        validacionExito();
        // Crear el nuevo producto si pasa la validación
        agregarProducto({
            nombre, precio
        })
        console.log("sss");
        // Redireccionar
        history.push('/');
    }

    return(
        <div className="row justify-content-center mt-5">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold ">Agregar Nuevo Libro</h2>
                        <form
                            onSubmit={submitNuevoProducto}
                        >
                            <div className="form-group">
                                <label>Nombre Libro</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Nombre Libro"
                                    onChange={e => setNombre(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Precio Libro</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Precio Libro"
                                    onChange={e => setPrecio(e.target.value)}
                                />
                            </div>

                            <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Agregar</button>
                        </form>

                        { error ? <div className="alert alert-danger text-center mt-4">Todos los campos son requeridos</div> : null}
        
                    </div>
                </div>
            </div>
        </div>
    );
}


export default NuevoProducto;