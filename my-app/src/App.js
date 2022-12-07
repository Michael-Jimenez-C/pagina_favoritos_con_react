import './App.css';
import Favoritos from './componentes/Favoritos';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>  
        <h1>Los escritorios mas utilizados en la ultima semana</h1>
        <Favoritos/>
      </div>
    </div>
  );
}

export default App;
