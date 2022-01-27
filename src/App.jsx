import Header from "./components/Header"
import Form from "./components/Form"
import ListPacients from "./components/ListPacients"
import {useState, useEffect} from 'react'

function App() {

const [citas,guardarCita] = useState([]);

const [citaActual,guardarCitaActual] = useState({
  mascota: '',
  propietario: '',
  email: '',
  alta: '',
  sintomas: ''
});

useEffect(() => {
  //verificamos el localStorage
  const getLS = () => {
    const citasLS = JSON.parse(localStorage.getItem('citas')) ?? []
    guardarCita(citasLS);
  }
  getLS();
},[]);

useEffect(() => {
  //pasamos la informaciòn al localStorage
  localStorage.setItem('citas', JSON.stringify(citas));
},[citas]);


  return (
    <div className="container mx-auto mt-5"> 
      <Header />
      <div className="mt-8 md:flex">
        <Form 
          guardarCita={guardarCita}
          citas={citas}
          citaActual={citaActual}
          guardarCitaActual={guardarCitaActual}
        />
        <ListPacients 
        citas={citas}
        guardarCita={guardarCita}
        guardarCitaActual={guardarCitaActual}
        
        />
      </div>
    </div>
  )
}

export default App
