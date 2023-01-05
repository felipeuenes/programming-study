import { useState } from 'react'

import './App.css'

export function App() {
  const [name, setName] = useState('Felipe');
  const [count, setCount] = useState(0);
  
  
  console.log(name);

  return (
   <div className='container'>
     <h1>Class Hooks</h1>
      <p>Nome: {name}</p>
      <p>Número: {count}</p>
      <button onClick={() => setCount(count + 2)}>Contar</button>

   </div>
  )
}


