import React from 'react';
import PropTypes from 'prop-types';
import Gasto from './Gasto';

function ListaGastos({gastos}){
    return(
        <div className="gastos-realizados">
            <h2>Listado de gastos</h2>
            {gastos.map(gasto => {
                return(
                    <Gasto key={gasto.id} gasto={gasto} />
                )
            })}
        </div>
    )
}

ListaGastos.propTypes = {
    gastos: PropTypes.array.isRequired,
};

export default ListaGastos;