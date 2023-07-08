import './App.css';
import NavBar from './components/NavBar/NavBar';
import Main from './components/Main/Main';
import { useState, useEffect } from 'react';
import { Career } from './components/Career/Career';
import { AboutMe } from './components/AboutMe/AboutMe';
function App() {
  const [isLightBackground, setIsLightBackground] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    setWidth(window.innerWidth);
    if (width <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
    console.log(width);
  }, []);

  const [hamActive, setHamActive] = useState(false);

  const handleToggle = () => {
    console.log('toggle');
    setIsLightBackground(!isLightBackground);
  };

  return (
    <div className='app'>
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
          {!isMobile && <Career mode={isLightBackground} />}
        </div>
      </div>
    </div>
  );
}

export default App;
