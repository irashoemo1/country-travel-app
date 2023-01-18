import ThemedButton from "./ThemedButton"
import { ThemeContext, themes } from "./ThemeContext"
import { useContext, useState } from "react"


export const Header = ({onChange}) => {
  const darkTheme = useContext(ThemeContext)
  
  return (
      <header>
        <h1>Where in the world?</h1>
        <button onClick={onChange}>Dark Mode</button>
      </header>
  )
}