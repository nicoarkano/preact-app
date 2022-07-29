import Formularios from './components/Formularios.jsx'
import Listas from './components/Listas.jsx'
import Parrafo from './components/Parrafo.jsx'
import Variables from './components/Variables.jsx'
import Eventos from './components/Eventos.jsx'
import Contador from './components/Contador.jsx'
export function App() {

  return (
	  <>
	  <h1>Hello World! Preact</h1>
	   <Parrafo />
	   <hr/>
		  <Variables />
	   <hr/>
		  <Eventos />
	   <hr/>
	   <Listas /> 
	   <hr/>
	  <Contador />
	   <hr/>
	  <Formularios />
	  </>
  )
}
