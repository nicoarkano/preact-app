import {useState} from 'preact/hooks'
const Eventos = () => {
	const [texto, setTexto] = useState('Texto desde Estado')
        const eventoClick = () => {
		console.log('me diste click')
		setTexto('cambiando el texto...')
	}
	return (
		<>
		 <hr />
		 <h2>{texto}</h2>
		 <button onClick={()=> eventoClick()}> Click </button>
                </>
	)
}

export default Eventos
