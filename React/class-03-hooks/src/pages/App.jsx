import { useState } from 'react'

import './App.css'

export function App() {
  const [name, setName] = useState('Felipe');
  const [count, setCount] = useState(0);
  
  const [text, setText] = useState('');
  const [text2, setText2] = useState('');
  
  // console.log(name);

  return (
   <div className='container'>
     {/* <h1>Class Hooks</h1>
      <p>Nome: {name}</p>
    <button onClick={() => setCount(count + 1)}>Contar</button> */}

  <form action="">
    <p>Palavra: {text}</p>
    <input onChange={(event) => setText(event.target.value)} type="text" />
    <button onClick={(e) => {e.preventDefault() 
    setText2(text)}}>Enviar</button>
    <p>Palavra enviada: {text2}</p>
  </form>


   </div>
  )
}


