import './App.css'
import imagen0 from './assets/rey_sisebuto.png'
import imagen1 from './assets/rey_leogivildo.png'
import imagen2 from './assets/rey_atanagildo.png'

function App() {
  let nombres = ['Atanagildo', 'Leovigildo','Sisebuto' ]
  return (
    <div className="App">
      <h1>Reyes visigodos</h1>
      <div className='contenedor'>
        <div className='caja'>
          <img src={imagen0} alt="" />
          <div className='nombre'>{nombres[0]}</div>
        </div>
        <div className='caja'>
          <img src={imagen1} alt="" />
          <div className='nombre'>{nombres[1]}</div>
        </div>
        <div className='caja'>
          <img src={imagen2} alt="" />
          <div className='nombre'>{nombres[2]}</div>
        </div>
      </div>
    </div>
      
  );
}

export default App
