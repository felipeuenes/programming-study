
import './style.css'

export function ForecastCard({day, icon, tempMax, tempMin}) {
    

    return(
        <div className='blockWeatherForecast'>

            <h3>{day}</h3>
            <div className='blockIconDegree'>
                <img src={icon} alt="icon" />
                <p className='forecastDegreeMaxMin'></p>
                <span>{tempMax}º</span>
                <span className='degreeMin'>{tempMin}º</span>
            </div>


        </div>
    )
}