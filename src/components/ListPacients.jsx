import Pacient from "./Pacient";

const ListPacients = ({citas,edit,guardarCita,guardarCitaActual}) => {
    return ( 
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

        <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
        <p className="text-lg mt-5 mb-6 md:mx-auto text-center">
                Administra tus {''}
                <span className="text-indigo-600 font-bold">Pacientes y citas</span>
        </p>
            {citas && citas.length ? citas.map((value,index) => 
            <Pacient 
              key={index}
              value={value}
              edit={edit}
              citas={citas}
              guardarCita={guardarCita}
              guardarCitaActual={guardarCitaActual}
            />
            ) : <p className="text-center font-light">Aún no tienes citas, <span className="text-indigo-600 font-bold">¡gestiona una!</span></p>}
    </div>
    );
}
 
export default ListPacients;