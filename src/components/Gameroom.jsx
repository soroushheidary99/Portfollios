import React, {useEffect} from 'react'
import './Gameroom.css'
import Gameoflife from './game/Gameoflife.jsx'

const Gameroom = () => {
    
    return (<>
        <section id='Gameroom'>
            <div className='container__game'>
                <Gameoflife />
            </div>
        </section> 
    </>)
}

export default Gameroom
