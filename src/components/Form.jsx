import {v4 as uuidv4} from 'uuid';
import { useEffect } from 'react';
import { formActive } from '../helper';

const Form = ({guardarCita,citas,guardarCitaActual,citaActual}) => {
    
const handleChange = e => {
    formActive(e)
    guardarCitaActual({
        ...citaActual,
        [e.target.name]:e.target.value
    }
    )
}

const handleSubmit = e => {
    e.preventDefault();
    const sendCita = {};
    sendCita.mascota = citaActual.mascota;
    sendCita.propietario = citaActual.propietario;
    sendCita.email = citaActual.email;
    sendCita.alta = citaActual.alta;
    sendCita.sintomas = citaActual.sintomas;
    sendCita.id = uuidv4();

    guardarCita([...citas,sendCita])
    guardarCitaActual({
    mascota: '',
    propietario: '',
    email: '',
    alta: '',
    sintomas: '',
    })
}

useEffect(() => {
    console.log(200)
},[citaActual])

    return ( 
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Seguimiento de pacientes</h2>

            <p className="text-lg mt-5 mb-6 md:mx-auto text-center">
                Añade pacientes y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form 
            onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded-md p-5 mb-10">
               <div>
                <label htmlFor="mascota" className="block font-bold text-gray-700 mt-2">NOMBRE MASCOTA</label>
                <input 
                type="text"
                placeholder="Nombre de la Mascota"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                id="mascota"
                name="mascota"
                value={citaActual.mascota}
                onChange={handleChange}
                />
               </div> 

                <div>
                <label htmlFor="propietario" className="block font-bold text-gray-700 mt-2">NOMBRE DEL PROPIETARIO</label>
                <input 
                type="text"
                placeholder="Nombre del Propietario"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                id="propietario"
                name="propietario"
                value={citaActual.propietario}
                onChange={handleChange}
                />
                </div>

                <div>
                <label htmlFor="email" className="block font-bold text-gray-700 mt-2">EMAIL</label>
                <input 
                type="email"
                placeholder="Email Contacto Propietario"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                id="email" 
                name="email"
                value={citaActual.email}
                onChange={handleChange}
                />
                </div>

                <div>
                <label htmlFor="alta" className="block font-bold text-gray-700 mt-2">ALTA</label>
                <input 
                type="date"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                id="alta" 
                name="alta"
                value={citaActual.alta}
                onChange={handleChange}
                />
                </div>

                <div>
                <label htmlFor="sintomas" className="block font-bold text-gray-700 mt-2">SINTOMAS</label>
                <input 
                type="text" 
                placeholder="Descripción de los Síntomas"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                id="sintomas"
                name="sintomas"
                value={citaActual.sintomas}
                onChange={handleChange}
                />
                </div>
                <input type="submit" 
                value="Agregar paciente"
                className=" uppercase font-bold bg-indigo-600 text-white p-2 w-full rounded-md mt-4 hover:bg-indigo-800 cursor-pointer transition-all"
                />
            </form>
        </div>
        
     );
}
 
export default Form;