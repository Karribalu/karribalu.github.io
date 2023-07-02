import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Main from "./components/Main/Main";
import { useContext, useState } from "react";
import ThemeContext from "./ThemeContext";

function App() {
  const [isLightBackground, setIsLightBackground] = useState(false);

  const handleToggle = () => {
    setIsLightBackground(!isLightBackground);
  };

  return (
    <div className={isLightBackground ? "light-bg" : "dark-bg"}>
      <NavBar mode={isLightBackground} onToggle={handleToggle} />
      <Main mode={isLightBackground} />
    </div>
  );
}

export default App;
