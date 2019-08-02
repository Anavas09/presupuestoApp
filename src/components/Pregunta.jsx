import React, { useState, Fragment } from 'react';
import PropTypes from "prop-types";
import Error from './Error';

function Pregunta(props) {

    const { guardarPresupuesto, guardarPreguntaPresupuesto, guardarRestante } = props;

    //Definir el state
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    const handleOnChange = (e) => {
        guardarCantidad(parseInt(e.target.value, 10))
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();

        //Validar el presupuesto
        if (cantidad < 1 || isNaN( cantidad )) {
            guardarError(true)
            return;
        }

        //Si pasa la validación
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        guardarPreguntaPresupuesto(false)
    }


    return (
        <Fragment>
            <h2>¿Cuál es tu presupuesto?</h2>

            {error ?
                <Error mensaje={"El presupesto es Incorrecto"}/>
                :
                null
            }
            <form onSubmit={handleOnSubmit}>
                <input
                    type="number"
                    className="u-full-width"
                    name="presupuesto"
                    placeholder="Coloca tu presupuesto"
                    onChange={handleOnChange}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"/>
            </form>
        </Fragment>
    );
}

Pregunta.propTypes = {
    guardarPresupuesto: PropTypes.func.isRequired,
    guardarPreguntaPresupuesto: PropTypes.func.isRequired,
    guardarRestante: PropTypes.func.isRequired,
}


export default Pregunta;