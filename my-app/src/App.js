import './App.css';
import Favoritos from './componentes/Favoritos';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>  
        <h1>Las canciones mas populares del momento</h1>
        <Favoritos
          nombre='Begging'
          web='https://www.youtube.com/watch?v=W2MpGCL8-9o'
          descripcion='Esta cancion es de las GOOD'
          imagen='https://i.ytimg.com/vi/W2MpGCL8-9o/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&rs=AMzJL3kGUdhrVUVPeiSPM_CbYkWZv_ytYw'
        />
      </div>
    </div>
  );
}

export default App;
