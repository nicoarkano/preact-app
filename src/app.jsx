export function App() {
  return (
    <>
      <div className="containter mt-5">
        <h1 class="text-center mt-5">CRUD Simple</h1>
        <hr />
        <div class="row">
          <div class="col-8">
            <h4 class="text-center">Lista de Tareas</h4>
            <ul class="list-group">
              <li class="list-group-item">
                <span className="lead">Nombre de la Tarea</span>
                <button class="btn btn-danger btn-sm float-end mx-2">
                  Eliminar
                </button>
                <button class="btn btn-warning btn-sm float-end">Editar</button>
              </li>
            </ul>
          </div>
          <div className="col-4">
            {" "}
            <h4 className="text-center">Formulario</h4>
            <form>
              <input
                type="text"
                className="form-control mb-2"
                placeholder="ingrese tarea"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
