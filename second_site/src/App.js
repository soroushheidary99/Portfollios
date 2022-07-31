import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Begin from './components/Begin.jsx'
import Navmap from './components/Navmap.jsx'
import Navminimap from './components/Navminimap.jsx'

import Skills from './components/Skills.jsx'
import Services from './components/Services.jsx'
import Contact from './components/Contact.jsx'
import Projects1 from './components/Projects1.jsx'
import Projects2 from './components/Projects2.jsx'
import Projects3 from './components/Projects3.jsx'
import Gameroom from './components/Gameroom.jsx'

import './App.css';

function App() {
  return (<>
    <Begin />

    <About />
    <Home />
    <Services />
    <Contact />
    <Skills />
    <Gameroom />
    <Projects1 />
    <Projects2 />
    <Projects3 />

    <Navmap />
    <Navminimap />
    
  </>);
}

export default App;
