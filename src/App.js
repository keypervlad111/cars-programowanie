import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Logowanie from './components/Logowanie';
import Tabela from './components/Tabela';
import AddTabela from './components/AddTabela'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' Component={Logowanie} />
        <Route path='/tabela' Component={Tabela} />
        <Route path='/tabela/add/:id' Component={AddTabela} />
      </Routes>
    </div>
  );
}

export default App;
