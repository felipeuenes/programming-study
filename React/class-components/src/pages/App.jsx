import { useState } from 'react'

import './App.css'
import { CardPerfil } from '../components/CardPerfil/index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <h1>Class components</h1>
      <CardPerfil 
        login='FelipeUenes'
        name='Felipe'
        age={19}/>
     
      <CardPerfil 
        login='Mario13Sergio'
        name='Mário'
        age={15}/>
     



    </div>
  )
}

export default App
