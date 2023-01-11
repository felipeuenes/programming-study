// import { useState } from 'react'
import './style.css'

export function App() {
  

  return (
   <div className='container'>
      <header>
      <h1>Previsão do Tempo</h1>
      <form action="">
        <input type="text" placeholder='Nome da cidade'/>
        <button>Buscar</button>
      </form>
      </header>
      <main>
        <article>
          <section className='blockCityName'>
            <h2>Jucás, Ceára</h2>
            <p>Brasil, 11/01/2023 - 14:20:00</p>
          </section>
          <section className='blackCurrentTime'>
              <div className='currentTime'>
                <div className='blockDegree'>
                  <img src="#" alt="icon" />
                  <p>25.6º</p>
                  <p>
                    <span className='DegreeMax'>35.6º</span>
                    <span className='DegreeMin'>25.6º</span>
                    </p>
                </div>
              </div>
              <div className='blockSituation'>
                  <img src="#" alt="icon" />
                  <div>
                    <p>Parcialmente Sol quente</p>
                    <p>Sensação térmica 50.4º</p>
                  </div>
              </div>
          </section>

          <section className='containerWeatherCondition'>
              {/* Component */}
          </section>

          <section className='containerWeatherForecast'>
              <ol>
                <li>Component "Map"</li>
              </ol>

          </section>
        </article>
      </main>
      <footer>
        <p>Web Development Course - Jucás</p>
      </footer>
      
   </div>
  )
}


