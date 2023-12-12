import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Logowanie from './components/Logowanie';
import Tabela from './components/Tabela';
import AddTabela from './components/AddTabela'
import { useState } from "react";

function App() {
  const [arr, setArr] = useState([
    { id: 1, marka: "Audi", model: "A6", rocznik: 2000 },
    { id: 2, marka: "Seat", model: "Ibiza", rocznik: 2010 },
    { id: 3, marka: "BMW", model: "e46", rocznik: 2000 }
])
  function addCar(car){
    const addedCar = {
      id: Date.now(),
      marka: car.marka, 
      model: car.model,
      rocznik: car.rocznik
    }
    setArr(prevArr => ([
      ...prevArr,
      addedCar
    ]))
  }

  function EditCar(car){
    const {id, marka, model, rocznik} = car 

    const nextArr = [...arr];
    const carwork = nextArr.find(
      car => car.id == id
    );

    carwork.marka = marka
    carwork.model = model
    carwork.rocznik = rocznik
    setArr(nextArr);
  }

  function deleteCar(CarId){
    setArr(arr.filter(car => car.id !== CarId))
  }
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' Component={Logowanie} />
        <Route path='/tabela' Component={() => (<Tabela arr={arr} deleteCar={deleteCar}/>)}/>
        <Route path='/tabela/add/:id' Component={() => (<AddTabela arr={arr} addCar={addCar} EditCar={EditCar} />)}/>
      </Routes>
    </div>
  );
}

export default App;
