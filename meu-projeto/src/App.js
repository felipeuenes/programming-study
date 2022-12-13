import logo from './logo.svg';
import './App.css';
import HellowWorld from './components/HellowWorld';

function App() {


const name = 'Felipe';

  return (
    <div className="App">
     <h1>Olá, {name}</h1>
     <p>
            Meu primeiro projeto
          </p>

          <HellowWorld />
    </div>
  );
}

export default App;
