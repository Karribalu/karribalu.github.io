import './App.css';
import NavBar from './components/NavBar/NavBar';
import Main from './components/Main/Main';
import { useState, useEffect } from 'react';
import { Career } from './components/Career/Career';
import { AboutMe } from './components/AboutMe/AboutMe';
import { Skills } from './components/Skills/Skills';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { MobileSkills } from './components/MobileSkills/MobileSkills';
import { Footbar } from './components/Footbar/Footbar';
import {
  web3,
  react,
  js,
  aws,
  ts,
  solidity,
  hardhat,
  github,
  flask,
  html,
  python,
  css,
  java,
  Kubernetes,
  clustering,
  dataanalytics,
  git,
  sklearn,
  Jenkins,
  spring,
  Terraform,
  sql,
  numpy,
  Ansible,
  dsa,
  datascience,
  mongo,
} from './icons';

function App() {
  const [isLightBackground, setIsLightBackground] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [skillsDiv, setSkillsDiv] = useState(false);
  useEffect(() => {
    setWidth(window.innerWidth);
    if (width < 768) {
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

  const skills = [
    [web3, 'Web3'],
    [react, 'React'],
    [js, 'JavaScript'],
    [aws, 'AWS'],
    [ts, 'TypeScript'],
    [solidity, 'Solidity'],
    [hardhat, 'Hardhat'],
    [github, 'GitHub'],
    [flask, 'Flask'],
    [html, 'HTML'],
    [python, 'Python'],
    [css, 'CSS'],
    [java, 'Java'],
    [Kubernetes, 'Kubernetes'],
    [clustering, 'Clustering'],
    [dataanalytics, 'Data Analytics'],
    [git, 'Git'],
    [sklearn, 'Scikit-Learn'],
    [Jenkins, 'Jenkins'],
    [spring, 'Spring'],
    [Terraform, 'Terraform'],
    [sql, 'SQL'],
    [numpy, 'NumPy'],
    [Ansible, 'Ansible'],
    [dsa, 'Data Structures & Algorithms'],
    [datascience, 'Data Science'],
    [mongo, 'MongoDB'],
  ];
  return (
    <div className='app'>
      <div className={isLightBackground ? 'light-bg' : 'dark-bg'}>
        <div className={hamActive ? 'blur' : ''}>
          {/* <NavBar
            mode={isLightBackground}
            onToggle={handleToggle}
            hamActive={hamActive}
            setHamActive={setHamActive}
          />
          <Main mode={isLightBackground} />
          <AboutMe mode={isLightBackground} />
          {!isMobile && <Career mode={isLightBackground} />}
          {!isMobile && <Skills mode={isLightBackground} />}
          {!isMobile && <Experience mode={isLightBackground} />}
          {!isMobile && <Projects mode={isLightBackground} />}
          <Footbar mode={isLightBackground} /> */}
          <MobileSkills
            mode={isLightBackground}
            skills={skills}
            skillsDiv={skillsDiv}
            setSkillsDiv={setSkillsDiv}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
