// import { useState } from 'react'
import { useState, useEffect } from 'react';
import './style.css'
import { GoSearch } from 'react-icons/go';
import { BsThermometerHigh } from 'react-icons/bs';


export function App() {

  const [searchedCity, setsearchedCity] = useState('jucas');
  
  const API = `https://api.weatherapi.com/v1/forecast.json?key=fb85b303e1fe4286a2b15407223112&q=${searchedCity}&days=4&lang=pt`

  async function getCityWeather() {
      const response = await fetch(API);

      const date = await response.json()
      console.log(response);
      console.log(date);

      if (response.status == 200) {
        const data = await response.json();
        console.log(data);
      } else if (response.status == 400){
        alert('cidade não encontrada')
      }
  }


  useEffect(() => {
     getCityWeather()
  }, [searchedCity])

  return (
   <div className='container'>
      <header>
      <h1>Previsão do Tempo</h1>
      <form action="">
        <label htmlFor="citySeachInput" className='srOnly'>Pesquisar nome da cidade</label>
        <input type="text" placeholder='Nome da cidade' id='citySeachInput'/>
        <GoSearch className='searchIcon'/>
        <button className='search-button'>Buscar</button>
      </form>
      </header>
      <main>
        <article>
          <section className='blockCityName'>
            <h2>Jucás, Ceará</h2>
            <p>Brasil, 11/01/2023 - 14:20:00</p>
          </section>
          <section className='blockCurrentTime'>
              <div className='currentTime'>
                <div className='blockDegree'>
                  <img src="#" alt="icon" />
                  <BsThermometerHigh className='bs'/>
                  <p className='degreeCurrent'>25.6º</p>
                  <p>
                    <span className='DegreeMax'>35.6º</span>
                    <span className='DegreeMin'>25.6º</span>
                    </p>
                </div>
              </div>
              <div className='blockSituation'>
                  <img src='' alt="icon" />
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


