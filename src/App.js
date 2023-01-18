import './App.css';
import { Home } from './components/Home';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
  NavLink,
} from 'react-router-dom'
import CountryInfo from './components/CountryInfo';
import React from 'react';


const ThemeContext = React.createContext('light')
// on click of a card navigate to a page that displays that country and info about it
// need to put the country name in a query and then get only that country use this url https://restcountries.com/v3.1/name/peru
function App() {
  // need state for the option, search bar

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/country/:countryName' element={<CountryInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
