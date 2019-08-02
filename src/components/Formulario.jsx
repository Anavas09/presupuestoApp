import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Error from './Error';
import shortid from 'shortid'

function Formulario({guardarGasto, guardarCrearGasto}){

    //state
    const [nombreGasto, guardarNombreGasto] = useState('');
    const [cantidadGasto, guardarCantidadGasto] = useState(0);
    const [error, guardarError] = useState(false);

    const handleOnSubmit = (e) => {
        e.preventDefault();

        //Validar el presupuesto
        if (cantidadGasto < 1 || isNaN( cantidadGasto ) || nombreGasto === '') {
            guardarError(true)
            return;
        }

        //Construir un objeto gasto
        const gasto = {
            id: shortid.generate(),
            nombreGasto,
            cantidadGasto
        }

        //Pasar el objeto al componente principal
        guardarGasto(gasto);
        guardarCrearGasto(true)

        //Eliminar alerta
        guardarError(false);

        //Resetear el formulario
        guardarNombreGasto('');
        guardarCantidadGasto('');

    }


    return (
        <form onSubmit={handleOnSubmit}>
            <h2>¿Que gastos tienes?</h2>

            {error ?
                <Error mensaje={"Ambos campos son obligatorios o Presupuesto Incorrecto"}/>
                :
                null
            }

            <div className="campo">
                <label>Nombre Gasto</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Cine"
                    onChange={(e) => guardarNombreGasto(e.target.value)}
                    value={nombreGasto}
                />
            </div>
            <div className="campo">
                <label>Cantidad de Dinero del Gasto</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 400"
                    onChange={(e) => guardarCantidadGasto( parseInt(e.target.value, 10) )}
                    value={cantidadGasto}
                />
            </div>

            <input type="submit" className="button button-primary u-full-width" value="Agregar"/>
        </form>
    )
}

Formulario.propTypes = {
    guardarGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired,
};

export default Formulario;