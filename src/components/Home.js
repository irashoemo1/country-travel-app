import { useEffect, useState } from 'react';
import axios from 'axios'
import { Country } from './AllCountries';
import { Filter } from './Filter';
import { Header } from './Header';
import { Search } from './Search';
import { ThemeContext } from './ThemeContext';


export const Home = () => {
    const initialState = !!JSON.parse(localStorage.getItem('theme'))
    const [data, setData] = useState([])
    const [searchCountry, setCountry] = useState('')
    const [filteredData, setFiltered] = useState([])
    const [filterRegion, setRegion] = useState('')
    const [darkTheme, setDarkTheme] = useState(initialState)

    useEffect(() => {
        const url = 'https://restcountries.com/v3.1/all'
        const fetchData = async () => {
          const response = await axios(url)
          setData(response.data)
          // console.log(data)
        }
        fetchData()
    }, [])

    useEffect(() => {
        const search = (value) => {
        if(value !== ''){
            const result = data.filter(country => country.name.common.toLowerCase().includes(searchCountry))
            setFiltered(result)
        }
        else{
            setFiltered(data)
        }
        }
        search(searchCountry)
    }, [searchCountry])

    useEffect(() => {
        const search = (value) => {
        if(value !== ''){
            const result = data.filter(country => country.region === filterRegion)
            setFiltered(result)
        }
        else{
            setFiltered(data)
        }
        }
        search(filterRegion)
    }, [filterRegion])

    const onChange = (e) => {
        const value = e.target.value
        // console.log(e.target.value)
        if(e.target.id === 'region')
        {
          setRegion(value)
        }
        else{
          setCountry(value)
        }
        
    }

    const toggleTheme = () => {
      setDarkTheme(prevDarkTheme => {
        localStorage.setItem('theme', !prevDarkTheme)
        return !prevDarkTheme
      })
    }

    const themeStyles = {
      backgroundColor: darkTheme ? '#1F2D36': '',
      color: darkTheme ? 'white': ''
    }
     
    const otherStyles = {
      backgroundColor: darkTheme ? '#2B3742': '',
      color: darkTheme ? 'white': ''
    }

    const inputStyles = {
      backgroundColor: darkTheme ? '#2B3742': '',
      color: darkTheme ? 'white': '',
      '--placeholder-color': darkTheme ? 'white' : ''
    }
    return(
      <ThemeContext.Provider value={darkTheme}>
        <div className="App" style={otherStyles}>
          <Header onChange={toggleTheme} />
          <main style={themeStyles}>
            <div className='filterContainer'>
              <Search style={inputStyles} country={searchCountry} onChange={onChange}/>
              <Filter style={otherStyles} region={filterRegion} onChange={onChange} />
            </div>
            <div className='all-countries-wrapper'>
              { searchCountry.length > 0 || filterRegion !== ''?
                filteredData.map((country) =>  <Country style={otherStyles} key={country.name.common} country={country} />)
                :
                data.map((country) => <Country style={otherStyles} key={country.name.common} country={country} />)
              }
            </div>
          </main>
        </div>
      </ThemeContext.Provider>
    )
}