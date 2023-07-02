import React, { useState } from 'react';

const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const [backgroundImage, setBackgroundImage] = useState('url(./assets/dark-bg.png)');

  const toggleBackground = () => {
    setBackgroundImage((prevImage) =>
      prevImage === 'url(./assets/light-bg.png)'
        ? 'url(./assets/dark-bg.png)' // Replace with your gradient image URL
        : 'url(./assets/light-bg.png)'
    );
  };

  return (
    <ThemeContext.Provider value={{ backgroundImage, toggleBackground }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider };
export default ThemeContext;
