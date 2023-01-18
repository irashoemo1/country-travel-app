import { ThemeContext } from "./ThemeContext";

const ThemedButton = () => {
  return (
    <ThemeContext.Consumer>
      {({theme}) => (
        <div
          style={{backgroundColor: theme.background}}>
          Theme Change
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

export default ThemedButton;