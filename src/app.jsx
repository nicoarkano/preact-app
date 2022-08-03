//This is a Preact App has a smaller diference with react
import { useState } from "preact/hooks";
import shortid from "shortid";
export function App() {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [id, setId] = useState("");
  const agregarTarea = (e) => {
    e.preventDefault();
    if (!tarea.trim()) {
      return;
    }
    //use Shortid for create a aleator ID
    setTareas([...tareas, { id: shortid.generate(), nombreTarea: tarea }]);

    setTarea("");
  };

  const eliminarElemento = (id) => {
    console.log(id);
    const arrayFiltrado = tareas.filter((filterTask) => filterTask.id !== id);
    setTareas(arrayFiltrado);
  };

  const editar = (task) => {
    setModoEdicion(true);
    setTarea(task.nombreTarea);
    setId(task.id);
  };

  const editarTarea = (e) => {
    e.preventDefault();
    if (!tarea.trim()) {
      console.log("este elemento esta vacio");
      return;
    }
    const arrayEditado = tareas.map((item) =>
      item.id === id ? { id, nombreTarea: tarea } : item
    );
    setTareas(arrayEditado);
  };

  return (
    <>
      <div className="containter mt-5">
        <h1 class="text-center mt-5">CRUD Simple</h1>
        <hr />
        <div class="row">
          <div class="col-8">
            <h4 class="text-center">Lista de Tareas</h4>
            <ul class="list-group">
              {tareas.map((task) => (
                <li class="list-group-item" key={task.id}>
                  <span className="lead">{task.nombreTarea}</span>
                  <button
                    class="btn btn-danger btn-sm float-end mx-2"
                    onClick={() => eliminarElemento(task.id)}
                  >
                    Eliminar
                  </button>
                  <button
                    class="btn btn-warning btn-sm float-end"
                    onClick={() => editar(task)}
                  >
                    Editar
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-4">
            <h4 className="text-center">
              {modoEdicion ? "Editar Tarea" : "Agregar Tarea"}
            </h4>
            <form onSubmit={modoEdicion ? editarTarea : agregarTarea}>
              <input
                type="text"
                className="form-control mb-2"
                placeholder="ingrese tarea"
                onchange={(e) => setTarea(e.target.value)}
                value={tarea}
              />
              {modoEdicion ? (
                <button className="btn btn-warning btn-sm col-12" type="submit">
                  Editar
                </button>
              ) : (
                <button className="btn btn-dark btn-sm col-12" type="submit">
                  Agregar
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
