import Forecast from "./Forecast"

let feels_like, temp
const Weather = (weatherInfo) => {
    //need to pass the props later
    const {weather} = weatherInfo
    // console.log(weather)
    if(weather){
        temp = Math.ceil(weather.list[0].main.temp)
        feels_like = Math.ceil(weather.list[0].main.feels_like)
    }
    return (
        <>
            {weather && 
            <div className="weather-info-wrapper">
                <div className="weather-info">
                    <div className="top">
                        <p className="weather">{weather.list[0].weather[0].main}</p>
                        <img src={`../icons/${weather.list[0].weather[0].icon}.png`} alt="weather pic" className="weather-image"/>
                    </div>
                    <div className="bottom">
                        <div>
                            <span className="temperature">{temp}°F</span>
                        </div>
                        <div className="weather-details">
                            <div className="parameter-row">
                                <span className="parameter-label">Feels like: </span>
                                <span className="parameter-value">{feels_like}°F</span>
                            </div>
                            <div className="parameter-row">
                                <span className="parameter-label">Wind: </span>
                                <span className="parameter-value">{Math.round(weather.list[0].wind.speed)} mph</span>
                            </div>
                            <div className="parameter-row">
                                <span className="parameter-label">Humidity: </span>
                                <span className="parameter-value">{weather.list[0].main.humidity}%</span>
                            </div>
                            <div className="parameter-row">
                                <span className="parameter-label">Pressure: </span>
                                <span className="parameter-value">{weather.list[0].main.pressure} hPa</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
            <Forecast weather={weather}/>
        </>
    )
}


export default Weather