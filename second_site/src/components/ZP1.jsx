import React from 'react'
import './ZP1.css'
import Button from './parts/Button.jsx'
import Waves from './parts/Waves.jsx'
import Shapes from './parts/Shapes.jsx'
import Checkbox from './parts/Checkbox.jsx'

const ZP1 = () => {
    return (<>

        <section id="ZP1">
            <Waves />

            <div className='container container__11'>
                <p>Just to check if you're on board...</p>
                <Checkbox />
            </div>
        </section> 
        
    </>)
}

export default ZP1
