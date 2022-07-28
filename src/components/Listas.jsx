import {useState} from 'preact/hooks'
const Listas =() => {
	const estadoInicial = [
	 
		{id:1, texto:'Tarea 1'},
		{id:2, texto:'Tarea 2'},
		{id:3, texto:'Tarea 3'},
		{id:4, texto:'Tarea 4'},

	]
   const [lista, setLista] = useState(estadoInicial)
   const agregarElemento =()=> {
	 console.log('click')
	 const listaId = lista.length + 1
	 setLista([
	    ...lista,
	    {id:lista.listaId, texto: 'Tarea ' + listaId}
	 ])

   }
	const borrarElementos =()=>{
	 alert("atencion! va a borrar todas las tareas")
	 setLista(estadoInicial)
   }
	return (
		<>
		<h2>Listas</h2>
		<ul>{
		  lista.map ((item) => (
		<li> <h4 key={item.id}>{item.texto}</h4></li>

		  ))
		     }
	     </ul>
		<button onClick ={() => agregarElemento()}> Agregar</button>
		<button onClick = {() => borrarElementos()}> Borrar Todos</button>
	 </>

	)

}

export default Listas
