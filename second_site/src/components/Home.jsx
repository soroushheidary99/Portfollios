import React from 'react'
import './Home.css'
import Button from './parts/Button.jsx'
import Waves from './parts/Waves.jsx'
import Shapes from './parts/Shapes.jsx'
import Checkbox from './parts/Checkbox.jsx'

const Home = () => {
    return (<>

        <section id="Home">
            <Waves /> 
            {/* <Shapes />   */}

            <div className='container container__home'>
                <h3>Welcom To My Website</h3>
                <p>Hover over the edges to navigate around</p>
                <p id='p2'>... Or use the mini map if you're lazy :D</p>
            </div>
            
        </section> 
        
    </>)
}

export default Home
