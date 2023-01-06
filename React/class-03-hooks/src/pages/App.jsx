import { useState, useEffect } from 'react'

import './App.css'

export function App() {
  const [name, setName] = useState('Felipe');
  const [count, setCount] = useState(0);
  
  const [text, setText] = useState('');
  const [text2, setText2] = useState('');
  const [date, setDate] = useState('');
  
  

  useEffect(() => {
   if (text2) {
    fetch(`https://api.github.com/users/${text2}`).then(response => response.json()).then((date) => setDate(date));
   }
}, [text2]);



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
    {/* <p>Palavra enviada: {text2}</p> */}
  </form>

      <section>
        <h2 className='nameApi'>{date.name}</h2>
        <img className='imageApi' src={date.avatar_url} alt="" />
        <h3 className='nameApi'>{date.bio}</h3>
      </section>

   </div>
  )
}


