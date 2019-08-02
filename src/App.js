import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import ListaGastos from './components/ListaGastos';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {

  const [presupesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [preguntaPresupuesto, guardarPreguntaPresupuesto] = useState(true);
  const [crearGasto, guardarCrearGasto] = useState(false)
  const [gastos, guardarGastos] = useState([]);
  const [gasto, guardarGasto] = useState({});

  useEffect(()=> {
    if(crearGasto){
      const listadoGastos = [...gastos, gasto];
      console.log(listadoGastos);
      guardarGastos(listadoGastos);

      //Restar el presupuesto
      const presupuestoRestante = restante - gasto.cantidadGasto;
      guardarRestante(presupuestoRestante);

      //Despues de agregar el gasto, lo ponemos como false
      guardarCrearGasto(false)
    }
  }, [crearGasto, gasto, gastos, restante])

  return (
    <div className="App container">
      <Header />
      <div className="contenido-principal contenido">
        { (preguntaPresupuesto) ?
          <Pregunta
            guardarPresupuesto={guardarPresupuesto}
            guardarPreguntaPresupuesto={guardarPreguntaPresupuesto}
            guardarRestante={guardarRestante}
          />
          :
          (
            <div className="row">
              <div className="one-half column">
                <Formulario
                  guardarGasto={guardarGasto}
                  guardarCrearGasto={guardarCrearGasto}
                />
              </div>

              <div className="one-half column">
                <ListaGastos gastos={gastos}/>
                <ControlPresupuesto
                  presupuesto={presupesto}
                  restante={restante}
                />
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default App;
