import React from 'react'
import './About.css'
import Button from './parts/Button.jsx'
import Waves from './parts/Waves.jsx'
import Shapes from './parts/Shapes.jsx'
import Checkbox from './parts/Checkbox.jsx'

const About = () => {
    return (<>

        <section id="About">
        <div>
            <Waves />
        </div>
            <div className='container container__about'>
                <h3>About Me</h3>
                <p>CS Bsc Graduate from SBU and Ms Datamining Student in AUT (currently)</p>
                <p>I'm mainly focused on datascience and datamining though learning about Computer Vision and NLP always fascinate me</p>
                <p id='lanfw'>Also I love artificial life simulations using AI genetic algorithms (conwoy's game of life is a simple example of what could be done with these, check the section out :D</p>
            </div>    
        </section> 
        
    </>)
}

export default About
