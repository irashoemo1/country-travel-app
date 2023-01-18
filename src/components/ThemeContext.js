import React from "react";

export const themes = {
    light: {
      foreground: '',
      background: '',
    },
    dark: {
      foreground: '#ffffff',
      background: '#222222',
    },
  };
  
export const ThemeContext = React.createContext({
  theme: themes.light,
  toggleTheme: () => {} // default value
});