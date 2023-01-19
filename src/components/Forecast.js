const Forecast = () => {
    return (
        <div className="forecast-info-wrapper">
            <div className="forecast-info">
                <div className="forecast-weather">
                    <img className="forecast-pic"  src='../icons/01d.png' alt="weather pic"/>
                    <p>Monday</p>
                </div>
                <div className="forecast-details">
                    <div>
                        <span>Clear sky</span>
                    </div>
                    <span>12°C</span>
                </div>
            </div>
            <div className="forecast-info">
                <div className="forecast-weather">
                    <img className="forecast-pic"  src='../icons/01d.png' alt="weather pic"/>
                    <p>Tuesday</p>
                </div>
                <div className="forecast-details">
                    <span >Clear sky </span>
                    <span >12°C</span>
                </div>
            </div> 
            <div className="forecast-info">
                <div className="forecast-weather">
                    <img className="forecast-pic"  src='../icons/01d.png' alt="weather pic"/>
                    <p>Wednesday</p>
                </div>
                <div className="forecast-details">
                    <span >Clear sky </span>
                    <span >12°C</span>
                </div>
            </div> 
            <div className="forecast-info">
                <div className="forecast-weather">
                    <img className="forecast-pic"  src='../icons/01d.png' alt="weather pic"/>
                    <p>Thursday</p>
                </div>
                <div className="forecast-details">
                    <span >Clear sky </span>
                    <span >12°C</span>
                </div>
            </div> 
            <div className="forecast-info">
                <div className="forecast-weather">
                    <img className="forecast-pic"  src='../icons/01d.png' alt="weather pic"/>
                    <p>Friday</p>
                </div>
                <div className="forecast-details">
                    <span >Clear sky </span>
                    <span >12°C</span>
                </div>
            </div>  
        </div>
    )
}

export default Forecast