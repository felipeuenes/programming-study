
import reactLogo from './assets/react.svg'
import './App.css'
import { UserData } from './components/userData';
import { GlobalVariables } from './global';



export function App() {

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(e.target.name.value);

    const name = e.target.name.value;
    const email = e.target.email.value;
    const curso = e.target.curso.value;
    const question = e.target.question.value;
    const termo = e.target.termo.value;
    const skill = e.target.skill;

    const userData = {
      name,
      email,
      curso,
      question,
      termo,
      skill: [...skill].map((element) => {
        return element.checked ? element.value : null;
      })
    }


    console.log(userData);
    console.log(JSON.stringify(userData));
    GlobalVariables.user = userData;


  }
  

  return (
    <div className="App">
      
        <form action="" onSubmit={handleSubmit}>
         <section>
         <label htmlFor="name">Nome: 
            <input type="text" name="name" id="" />
          </label>
         </section>

         <section>
         <label htmlFor="email">Email 
            <input type="email" name="email" id="email" />
          </label>
         </section>

         <section>
            <label htmlFor="curso">Curso: 
              <select name="curso" id="curso">
                <option value="react">React</option>
                <option value="node">Node</option>
              </select>
            </label>
         </section>

          <section>
            <label htmlFor="question">Por que você quer fazer esse curso?
                <textarea name="question" id="question" cols="30" rows="5" maxLength={35} placeholder='Max 30 caracteres'></textarea>
            </label>
          </section>

          <section className='termos'>
            <div>
              Aceita os termos de uso?
            </div>
            <label htmlFor=""><input type="radio" name="termo" id="" value='yes' defaultChecked/>Sim</label>
            <label htmlFor=""><input type="radio" name="termo" id="" value='no'/>Não</label>

              
          
          </section>
          <section>
            <div>Materias que tem aptidão</div>
            <label htmlFor="">
              <input type="checkbox" name="skill" id="" value='html' />HTML
            </label>
            <label htmlFor="">
              <input type="checkbox" name="skill" id="" value='css' />CSS
            </label>
            <label htmlFor="">
              <input type="checkbox" name="skill" id="" value='javascript' />JavaScript
            </label>
          </section>


          <button>Enviar</button>
        </form>

        <UserData/>

    </div>
  )
}


