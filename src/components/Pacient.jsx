
const Pacient = ({value,guardarCita,citas,guardarCitaActual}) => {
  const {mascota,propietario,alta,email,sintomas,id} = value;


  const deleteCita = id => {
    guardarCita(citas.filter(cita => cita.id !== id))
  }

  const edit = id => {
      deleteCita(id)
     guardarCitaActual(citas.filter(cita => cita.id === id)[0])
  }

    return ( 
        <div className="bg-white shadow-lg rounded-md m-3 px-5 py-10">
        <p className="font-bold mb-3 uppercase text-gray-700">
                Nombre: <span className="capitalize font-normal">{mascota}</span>
            </p>

            <p className="font-bold mb-3 uppercase text-gray-700">
                Propietario: <span className="capitalize font-normal">{propietario}</span>
            </p>

            <p className="font-bold mb-3 uppercase text-gray-700">
                Email: <span className="normal-case font-normal">{email}</span>
            </p>

            <p className="font-bold mb-3 uppercase text-gray-700">
                Fecha de Alta: <span className="normal-case font-normal">{alta}</span>
            </p>

            <p className="font-bold mb-3 uppercase text-gray-700">
                Síntomas: <span className="normal-case font-normal">{sintomas}</span>
            </p>
            <div className="flex justify-items-center">
                <input 
                type="button"
                value="Eliminar"
                onClick={() => deleteCita(id)}
                className="bg-red-500 p-2 mx-auto rounded-md text-white md:w-2/5 hover:bg-red-600 transition-all"               
                 />
                <input 
                type="button"
                value="Editar"
                onClick={() => edit(id)}
                className="bg-green-500 p-2 mx-auto rounded-md text-white   md:w-2/5 hover:bg-green-600 transition-all"
                 />
            </div>
            </div>
     );
}
 
export default Pacient;