import {useState} from 'preact/hooks' 
const Contador = () => {

	const [count, setCount] = useState(0)
	const addOne = () => {
		setCount(count +1)
	}

	return (
		<>
		<h2>Contador</h2>
	       <h3>Nuestro numero aumentado {count} </h3>
	       <h4>
		       {  count > 10 ? 'Segundo Misterio' : 'Primer Misterio' }
	       </h4>
	       <p>{count === 0 ? 'Padre Nuestro que estas en el cielo santificado sea tu nombre venga a nosotros tu reino':[]} {count > 0 && count  <=  10 ? "dios te salve maria":[]  }</p>
	       <button onClick={()=>addOne()}> Aumentar </button>
	        </>

	)

}

export default Contador
