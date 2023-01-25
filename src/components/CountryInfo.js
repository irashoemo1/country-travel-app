import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";
import { Header } from "./Header";
import { ThemeContext } from "./ThemeContext";
import Weather from "./Weather";

let currencies, languages, nativeName, borders
const CountryInfo = (props)  => {
    const [data, setData] = useState([])
    const [weather, setWeather] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(true)
    const [darkTheme, setDarkTheme] = useState(false)

    const {countryName} = useParams()
  
    //Jan 19 at 1 am to Jan 23 at 10pm. Goes for every 3 hours. Mod by 8 to get everyday
    useEffect(() => {
      const fetchCountryData = async () => {
        try {
          const result = await axios(`https://restcountries.com/v3.1/alpha/${countryName}`);
    
          setData(result.data);
          setIsLoading(false)
          // console.log(result.data)
          languages = Object.values(result.data[0].languages) && Object.values(result.data[0].languages).join(', ')
          nativeName = Object.values(result.data[0].name.nativeName) && Object.values(result.data[0].name.nativeName).map((c) => c.official)[0];
          currencies = Object.values(result.data[0].currencies) && Object.values(result.data[0].currencies).map((c) => c.name).join(', ');
         
          borders = result.data[0].borders && result.data[0].borders.map((c) => c)


          if(Object.keys(result.data).length > 0){
            await fetchWeather(result.data)
          }
          
        }catch(error){
          setIsLoading(false)
          setIsError(error.message)
        }
        
      };

      const fetchWeather = async (countryData) => {
        try{
          const [lat, lng] = countryData[0].latlng
          const key = 'd4f35e7b6f0b7e9728dff15cfbf1980e'
          const result = await axios(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&units=imperial&appid=${key}`)
  
          setWeather(result.data)
          // console.log(result.data)
          setIsLoading(false)
        }catch(error){
          setIsLoading(false)
          setIsError(error.message)
        }
      }
      fetchCountryData()
    }, [countryName])

    const toggleTheme = () => {
      setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }

    const themeStyles = {
      backgroundColor: darkTheme ? '#212E37': '',
      color: darkTheme ? 'white': ''
    }

    const otherStyles = {
      backgroundColor: darkTheme ? '#2B3743': '',
      color: darkTheme ? 'white': ''
    }

    const nLinkStyle = {
      color: darkTheme ? 'white': ''
    }

    return (
      <ThemeContext.Provider value={darkTheme}>
        <div style={otherStyles}>
          <Header onChange={toggleTheme}/>
          <div style={themeStyles} className="wrapper">
            <div className="back-button-wrapper">
              <button style={otherStyles} className="back-button"><NavLink style={nLinkStyle} to="/">Back</NavLink></button>
            </div>
            {data.map((country) => {
              return(
                <div key={country.name.common} className="country-info-wrapper">
                  <div className="country-flag-wrapper">
                    <img className='country-flag' src={country.flags.png} alt='country flag'></img>
                  </div>
                  <div className='country-info'>
                    <div>
                      <h2 className="country-name">{country.name.common}</h2>
                    </div>
                    <section className="country-main-info">
                      <h3>Native Name:{' '} 
                        <span>{nativeName}</span>
                      </h3>
                      <h3>Population:{' '} 
                        <span>{country.population.toLocaleString(undefined)}</span>
                      </h3>
                      <h3>Region:{' '}  
                        <span>{country.region}</span>
                      </h3>
                      <h3>Subregion:{' '} 
                        <span>{country.subregion}</span>
                      </h3>
                      <h3>Capital:{' '}  
                        <span>{country.capital && country.capital.join(' ')}</span>
                      </h3>
                      <h3>Top Level Domain:{' '} 
                        <span>{country.tld}</span>
                      </h3>
                      <h3>Currencies:{' '} 
                        <span>{currencies}</span>
                      </h3>
                      <h3>Languages:{' '} 
                        <span>{languages}</span>
                      </h3>
                    </section>
                    <section>
                      <h3>Border Countries: 
                      { borders && borders.map((c) => <button style={otherStyles} key={c} className="border"><NavLink style={nLinkStyle} to={`/country/${c}`}>{c}</NavLink></button>)}
                      </h3>
                    </section>
                  </div>
                </div> 
              )
            })}
            {Object.keys(weather).length > 0  ? <Weather style={otherStyles} weather={weather} /> : <div className="no-weather">"No weather day exists for this country!"</div>}
          </div>
        </div>
      </ThemeContext.Provider>
    )
}
  
  export default CountryInfo;