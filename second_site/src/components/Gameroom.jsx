import React from 'react'
import './Gameroom.css'
import Button from './parts/Button.jsx'
import Waves from './parts/Waves.jsx'
import Shapes from './parts/Shapes.jsx'
import Checkbox from './parts/Checkbox.jsx'

const Gameroom = () => {
    return (<>

        <section id="Gameroom">
            <div className='auxilaryContainer'>
                <h3>Game Room :D</h3>
                <Waves />
                
            </div>
        </section> 
        
    </>)
}

export default Gameroom
