import React from 'react'
import './About.css'
import Button from './parts/Button.jsx'
import Waves from './parts/Waves.jsx'
import Shapes from './parts/Shapes.jsx'
import Checkbox from './parts/Checkbox.jsx'

const About = () => {
    return (<>

        <section id="About">
        <div className='waveChanger1'>
            <Waves />
        </div>
            <div className='container container__about'>
                <h3>About Me</h3>
                <p>well only god knows..</p>
            </div>    
        </section> 
        
    </>)
}

export default About
