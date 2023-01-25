import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
  } from 'react-accessible-accordion';

const Forecast = (props) => {
    //use JavaScript Date getDay() to get the day today and then add 1 each time to get the next 4 days. returns 0-6(sun-sat)
    const dailyWeather = []
    const date = new Date()
    let day = date.getDay()
    const {style, weather} = props
    for(let i = 0; i < weather.list.length; i++)
    {
        if(i % 8 === 0){
            dailyWeather.push(weather.list[i])
        }
    }
    console.log(dailyWeather)
    return (
        <Accordion allowZeroExpanded>
            {dailyWeather.map((fore) => {
                return(
                    <div key={fore.dt} className="forecast-info-wrapper">
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    <div style={style} className="forecast-info">
                                        <div className="forecast-weather">
                                            <img className="forecast-pic"  src={`../icons/${fore.weather[0].icon}.png`} alt="weather pic"/>
                                            <p>{numToDay(day++ % 7)}</p>
                                        </div>
                                        <div className="forecast-details">
                                            <div>
                                                <span>{fore.weather[0].main}</span>
                                            </div>
                                            <span>{Math.ceil(fore.main.temp)}°F</span>
                                        </div>
                                    </div>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className='daily-grid'>
                                    <div className='daily-items'>
                                        <label>Feels Like: </label>
                                        <label>{Math.ceil(fore.main.feels_like)}°F</label>
                                    </div>
                                    <div className='daily-items'>
                                        <label>Humidity: </label>
                                        <label>{fore.main.humidity}%</label>
                                    </div>  
                                    <div className='daily-items'>
                                        <label>Wind: </label>
                                        <label>{Math.round(fore.wind.speed)} mph</label>
                                    </div>  
                                    <div className='daily-items'>
                                        <label>Pressure: </label>
                                        <label>{fore.main.pressure} hPa</label>
                                    </div>  
                                    <div className='daily-items'>
                                        <label>Clouds: </label>
                                        <label>{fore.clouds.all}%</label>
                                    </div>    
                                    <div className='daily-items'>
                                        <label>Visibility: </label>
                                        <label>{fore.visibility.toLocaleString(undefined)} km</label>
                                    </div>    
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                    </div>
                )
            })}
        </Accordion>
       
    )
}

const numToDay = (value) => {
    switch(value){
        case 0:
            return "Sunday"
        case 1:
            return "Monday"
        case 2:
            return "Tuesday"
        case 3:
            return "Wednesday"
        case 4:
            return "Thursday"
        case 5:
            return "Friday"
        case 6:
            return "Saturday"
    }
}

export default Forecast