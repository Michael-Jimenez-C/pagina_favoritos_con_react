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

        <Favoritos
          nombre='Señorita'
          web='https://www.youtube.com/watch?v=dFp_b5DPIIo'
          descripcion='Un clasico de pandemia'
          imagen='https://i.ytimg.com/vi/dFp_b5DPIIo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCFZIfOVCl1mA7yPSfOf1AQA9x2iA'
        />

        <Favoritos
          nombre="There's Nothing Holdin' Me Back"
          web='https://www.youtube.com/watch?v=dT2owtxkU8k'
          descripcion='Para los chicos malos'
          imagen='https://i.ytimg.com/vi/dT2owtxkU8k/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD9T_GnkUEJtAlXDJfGae7bPM5GMQ'
        />
      </div>
    </div>
  );
}

export default App;
