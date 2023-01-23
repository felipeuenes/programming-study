
import reactLogo from './assets/react.svg'
import './App.css'

export function App() {

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(e.target.name.value);

    const name = e.target.name.value;
    const userData = {
      name,
    }


    console.log(userData);
  }
  

  return (
    <div className="App">
      
        <form action="" onSubmit={handleSubmit}>
         <section>
         <label htmlFor="name">Nome: 
            <input type="text" name="name" id="name" />
          </label>
         </section>

          <button>Enviar</button>
        </form>

    </div>
  )
}


