import {NavLink} from 'react-router-dom'

export const Country = ({style, country}) => {
    return(
      <NavLink to={`/country/${country.cca3}`}>
        <div style={style} key={country.name.common} className='all-countries-card'>
          <img className='all-countries-flag' src={country.flags.png} alt='country flag'></img>
          <div className='all-countries-info'>
            <h2>{country.name.common}</h2>
            <h3>Population:{' '} 
              <span>{country.population.toLocaleString(undefined)}</span>
            </h3>
            <h3>Region:{' '}  
              <span>{country.region}</span>
            </h3>
            <h3>Capital:{' '}  
              <span>{country.capital && country.capital.join(' ')}</span>
              </h3>
          </div>
        </div>
      </NavLink>
    )
}