import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Main from './components/Main/Main';
import { useContext, useState } from 'react';
import ThemeContext from './ThemeContext';

function App() {
  const [isLightBackground, setIsLightBackground] = useState(false);

  const [hamActive, setHamActive] = useState(false);

  const handleToggle = () => {
    setIsLightBackground(!isLightBackground);
  };

  return (
    <div className={isLightBackground ? 'light-bg' : 'dark-bg'}>
      <div className={hamActive ? 'blur' : ''}>
        <NavBar
          mode={isLightBackground}
          onToggle={handleToggle}
          hamActive={hamActive}
          setHamActive={setHamActive}
        />
        <Main mode={isLightBackground} />
      </div>
    </div>
  );
}

export default App;
