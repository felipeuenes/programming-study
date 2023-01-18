// import { useState } from 'react'
import { useState, useEffect } from 'react';
import './style.css'
import { GoSearch } from 'react-icons/go';
import { BsThermometerHigh } from 'react-icons/bs';
import { ClimateCard } from '../components/ClimateCard';

export function App() {

  const [searchedCity, setsearchedCity] = useState('jucas');
  const [inputCity, setInputCity] = useState('');

  const [weatherData, setWeatherData] = useState(null);
  const [dataNow, setDataNow] = useState();
  
  const API = `https://api.weatherapi.com/v1/forecast.json?key=fb85b303e1fe4286a2b15407223112&q=${searchedCity}&days=4&lang=pt`

  async function getCityWeather() {
      const response = await fetch(API);

      // const date = await response.json()
    

      if (response.status == 200) {
        const data = await response.json()
        setWeatherData(data)
        console.log(data);
      } else if (response.status == 400){
        alert('cidade não encontrada')
      }
  }

  function searchCity(event) {
    event.preventDefault();
    setsearchedCity(inputCity);
  } 


  useEffect(() => {
     getCityWeather()
  }, [searchedCity])


  useEffect(() => {
     const timer =  setInterval(() => {
      setDataNow(new Date().toLocaleString())
    }, 500);


    return () =>{
      clearInterval(timer)

    }
  },[])

  return (
   <div className='container'>
      <header>
      <h1>Previsão do Tempo</h1>
      <form action="" onSubmit={searchCity}>
        <label htmlFor="citySeachInput" className='srOnly'>Pesquisar nome da cidade</label>

        <input 
        type="text"
        placeholder='Nome da cidade'
        id='citySeachInput'
        onChange={(event) => setInputCity(event.target.value)}/>
        <GoSearch className='searchIcon'/>
        <button className='search-button'>Buscar</button>
      </form>
      <p>
        {inputCity}
      </p>
      </header>
      <main>
        {
          searchedCity && weatherData &&(
            
            <article>
          <section className='blockCityName'>
            <h2>{weatherData.location.name}, {weatherData.location.region}</h2>
            <p>{weatherData.location.country}, {dataNow}</p>
          </section>
          <section className='blockCurrentTime'>
              <div className='currentTime'>
                <div className='blockDegree'>
                  {/* <img src={weatherData.current.condition.icon} alt="icon" /> */}
                  <BsThermometerHigh className='bs'/>
                  <p className='degreeCurrent'>{weatherData.current.temp_c}</p>
                  <p>
                    <span className='DegreeMax'>{weatherData.forecast.forecastday[0].day.maxtemp_c}</span>
                    <span className='DegreeMin'>{weatherData.forecast.forecastday[0].day.mintemp_c}</span>
                    </p>
                </div>
              </div>
              <div className='blockSituation'>
                  <img src={weatherData.current.condition.icon} alt="icon" />
                  <div>
                    <p>{weatherData.current.condition.text}</p>
                    <p>Sensação térmica de {weatherData.current.feelslike_c}</p>
                  </div>
              </div>
          </section>

          <section className='containerWeatherCondition'>
              <ClimateCard climate={'Vento'} condition={`${weatherData.current.wind_kph}Km/h`}/>
              <ClimateCard climate={'Vento'} condition={`${weatherData.current.wind_kph}%`}/>
              <ClimateCard climate={'Vento'} condition={`${weatherData.current.wind_kph}mm`}/>
          </section>

          <section className='containerWeatherForecast'>
              <ol>
                <li>Component "Map"</li>
              </ol>

          </section>
            </article>
          )
         } 
      </main>
      <footer>
        <p>Web Development Course - Jucás</p>
      </footer>
      
   </div>
  )
}


