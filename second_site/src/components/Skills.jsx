import React from 'react'
import './Skills.css'
import Button from './parts/Button.jsx'
import Waves from './parts/Waves.jsx'
import Shapes from './parts/Shapes.jsx'
import Checkbox from './parts/Checkbox.jsx'

const Skills = () => {
    var eve = 0;
    eve = document.addEventListener('click', func(eve));
    function func(eve){
        console.log(eve)
    }

    return (<>

        <section id="Skills">
            <div className='auxilaryContainer'>
                <h3>Skills</h3>
                <Waves />

                <div className='container__skills'>

                    <div onClick={()=>null} className='container__skill csl'>
                        <div className='skills'>
                            <div className='skill'>asca</div>
                            <div className='skill'>s1d</div>
                            <div className='skill'>1sd1</div>
                            <div className='skill'>12d</div>
                        </div>
                    </div>
                    <div onClick={()=>null} className='container__skill csr'>
                        <div className='skills'>
                            <div className='skill'>awd</div>
                            <div className='skill'>d1d</div>
                            <div className='skill'>d12</div>
                            <div className='skill'>sd1</div>
                        </div>
                    </div>

                </div>
                
            </div>
        </section> 
        
    </>)
}

export default Skills
