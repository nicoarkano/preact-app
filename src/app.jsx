import { useState } from "preact/hooks";
export function App() {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);
  const agregarTarea = (e) => {
    e.preventDefault();
	if (!tarea.trim()){ console.log("Este elemento esta vacio") 
	return}
	

	
	
	setTareas([
		...tareas,
		{id: tareas.length, nombreTarea: tarea}

	])

	

	setTarea('')}
	console.log(tareas)

	const eliminarElemento = (id) => {
		console.log(id)
		const arrayFiltrado = tareas.filter((filterTask)=> filterTask.id !== id)
		setTareas(arrayFiltrado)
	}

  return (
    <>
      <div className="containter mt-5">
        <h1 class="text-center mt-5">CRUD Simple</h1>
        <hr />
        <div class="row">
          <div class="col-8">
            <h4 class="text-center">Lista de Tareas</h4>
            <ul class="list-group">
            {tareas.map( (task) =>   <li class="list-group-item" key ={task.id}>
                <span className="lead">{task.nombreTarea}</span>
                <button 
				class="btn btn-danger btn-sm float-end mx-2"
				onClick={() => eliminarElemento(task.id)}
				>
                  Eliminar
                </button>
                <button class="btn btn-warning btn-sm float-end">Editar</button>
              </li>)}
            </ul>
          </div>
          <div className="col-4">
            <h4 className="text-center">Formulario</h4>
            <form onSubmit={agregarTarea}>
              <input
                type="text"
                className="form-control mb-2"
                placeholder="ingrese tarea"
                onchange={(e) => setTarea(e.target.value)}
				value={tarea}
              />
              <button
                className="btn btn-dark btn-sm col-12"
                type="submit"
              >
                Agregar
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
