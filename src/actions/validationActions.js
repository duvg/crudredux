import {
    VALIDAR_FORMULARIO,
    VALIDAR_FORMULARIO_EXITO,
    VALIDAR_FORMULARIO_ERROR
} from '../types';

export function validarFormularioAction () {
    return dispatch => {
        dispatch( iniciarValidacion() );
    }
}

export const iniciarValidacion = () => {
    return {
        type: VALIDAR_FORMULARIO
    }
}

export const validacionExitoAction = () => {
    return {
        type: VALIDAR_FORMULARIO_EXITO
    }
}

export const validacionErrorAction = () => {
    return {
        type: VALIDAR_FORMULARIO_ERROR
    }
}