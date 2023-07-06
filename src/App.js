import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Main from './components/Main/Main';
import { useContext, useState } from 'react';
import { Career } from './components/Career/Career';
import { AboutMe } from './components/AboutMe/AboutMe';
function App() {
  const [isLightBackground, setIsLightBackground] = useState(false);

  const [hamActive, setHamActive] = useState(false);

  const handleToggle = () => {
    console.log('toggle');
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
        <AboutMe mode={isLightBackground} />
        <Career mode={isLightBackground} />
      </div>
    </div>
  );
}

export default App;
