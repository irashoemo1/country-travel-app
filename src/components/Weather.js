import Forecast from "./Forecast"

const Weather = () => {
    //need to pass the props later
    return (
        <>
            <div className="weather-info-wrapper">
                <div className="weather-info">
                    <div className="top">
                        <p className="weather">Sunny</p>
                        <img src="../icons/01d.png" alt="weather pic" className="weather-image"/>
                    </div>
                    <div className="bottom">
                        <div>
                            <span className="temperature">18°C</span>
                        </div>
                        <div className="weather-details">
                            <div className="parameter-row">
                                <span className="parameter-label">Feels like: </span>
                                <span className="parameter-value">12°C</span>
                            </div>
                            <div className="parameter-row">
                                <span className="parameter-label">Wind: </span>
                                <span className="parameter-value">2m/s</span>
                            </div>
                            <div className="parameter-row">
                                <span className="parameter-label">Humidity: </span>
                                <span className="parameter-value">15%</span>
                            </div>
                            <div className="parameter-row">
                                <span className="parameter-label">Pressure: </span>
                                <span className="parameter-value">15 hPa</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Forecast />
        </>
    )
}

export default Weather