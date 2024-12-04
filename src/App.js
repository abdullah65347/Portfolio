import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { useState } from 'react';
import Contact from './Components/Contact/Contact';
import Project from './Components/Project/Project';
import Skills from './Components/Skills/Skills';
import Header from './Components/Header/Header';
import AboutMe from './Components/AboutMe/AboutMe';

function App() {
  const [showLogin, setShowLogin] = useState(false)
  return (
    <>
      <div className='app' >
        {showLogin && <Contact showLogin={showLogin} setShowLogin={setShowLogin} />}
        <Navbar showLogin={showLogin} setShowLogin={setShowLogin} />
        <Header showLogin={showLogin} setShowLogin={setShowLogin} />
        <AboutMe />
        <Skills />
        <Project />
        <Footer />
      </div>
    </>
  );
}

export default App;
