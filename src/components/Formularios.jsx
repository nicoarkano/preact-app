import {useState} from 'preact/hooks'
const Formularios = () => {

	const [fruta, setFruta] = useState('')
	const [descripcion, setDescripcion] = useState('')
	const guardarDatos = (e) => {
	 e.preventDefault()
		if (!fruta.trim()) {
			console.log('por favor ingrese el nombre de una fruta')
		  return
		}
		if(!descripcion.trim()) { 
			console.log('por favor ingrese la descripcion') 
			return
		}

	 console.log('procesando datos...' + fruta ,  descripcion)
		e.target.reset()
		setFruta('')
		setDescripcion('')
	}
	return (
	 <>
		<h2>Formularios</h2>
		<form onSubmit = {guardarDatos}>
		  
		  <input type="text" placeholder="Ingrese Fruta" class="form-control mb-2" onChange = {(e)=> setFruta(e.target.value)} ></input>
		  <input type="text" placeholder="Ingrese Descripcion" class="form-control mb-2" onChange = {(e) => setDescripcion(e.target.value)} ></input>
		  <button class="btn btn-primary btn-block" type ="submit">Agregar</button>

		</form>
	 </>
	)
}
export default Formularios
