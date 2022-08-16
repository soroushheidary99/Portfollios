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
                <p>I'm a CS graduate from Shahid-Beheshti-University who likes to learn new concepts and technologies :D</p>
                <p>I'm mainly focused on datascience especially data transformations and analysis though learning about Computer Vision and NLP always fascinate me</p>
                <p id='lanfw'>I also enjoy designing & implementing webpages as a personal intrest (i've just started learning frontend-development so expect a lot of bugs here :D. this portfolio site is the second frontend project which I will be learning the basics of React.js from</p>
            </div>    
        </section> 
        
    </>)
}

export default About
