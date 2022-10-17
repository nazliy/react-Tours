
import {useState } from 'react';
import Tours from './Tours'
import data from './data.json'


function App() {
  const [tours,setTours] = useState(data);

  const removeTours = (id) => {
    const newTours = tours.filter( tour => tour.id !== id)
    setTours(newTours)
  }
  const refresh = () => {
    setTours(data)
  }
 
 
  if(tours.length === 0)
  {
    return (
      <main>
        <div className='title'>
            <h2>Tur Bulunmamaktadır.</h2>
            <button className='btn' onClick={()=> refresh()}>Yenile</button>
        </div>
      </main>
    )
  }

  return (
   <main>
       <Tours tours={tours} removeTour={removeTours}/>
   </main>
  );
}

export default App;
