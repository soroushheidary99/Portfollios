import React from 'react'
import './Skills.css'
import Waves from './parts/Waves.jsx'

import {SiKeras} from 'react-icons/si'
import {SiTensorflow} from 'react-icons/si'
import {SiReact} from 'react-icons/si'
import {SiCss3} from 'react-icons/si'
import {SiHtml5} from 'react-icons/si'
import {SiPytorch} from 'react-icons/si'
import {SiMongodb} from 'react-icons/si'
import {SiDocker} from 'react-icons/si'
import {SiTailwindcss} from 'react-icons/si'
import {SiTypescript} from 'react-icons/si'
import {SiTableau} from 'react-icons/si'
import {SiOpslevel} from 'react-icons/si'
import {SiBootstrap} from 'react-icons/si'
import {SiPlotly} from 'react-icons/si'





const Skills = () => {
    
    function toggle_box(x, y=false){
        var arr = ['a', 'b', 'c', 'd'];
        arr.forEach(e => {
            if(e===x){
                const el = document.getElementById(e);
                el.style.opacity = 1 - el.style.opacity;
            }else{
                const el = document.getElementById(e);
                el.style.opacity = 0;
            }
        })
    }
    return (<>
        
        <section id="Skills">
            <Waves />
            <div className='skills_container'>
                <button onClick={() => toggle_box('a')} className='skill_dropdown'>Familiar</button>
                <button onClick={() => toggle_box('b')} className='skill_dropdown'>Intermediate</button>
                <button onClick={() => toggle_box('c')} className='skill_dropdown'>Advanced</button>
                <button onClick={() => toggle_box('d')} className='skill_dropdown'>Eager To Learn :D</button>
            </div>   
            <div className='skill_box' id='a'>
                <div className='skill_desc'>Docker</div>
                <div className='skill_desc'>Apache Spark</div>
                <div className='skill_desc'>Dask</div>
                <div className='skill_desc'>Tableau</div>
                <div className='skill_desc'>MongoDB</div>
                <div className='skill_desc'>SASS</div>
                <div className='skill_desc'>Tailwind</div>
                <div className='skill_desc'>Dask</div>
                <div className='skill_desc'></div>
                <div className='skill_desc'></div>
            </div>
            <div className='skill_box' id='b'>
                <div className='skill_desc'>Tensorflow</div>
                <div className='skill_desc'>Git</div>
                <div className='skill_desc'>NLTK</div>
                <div className='skill_desc'>CSS</div>
                <div className='skill_desc'>gensim</div>
                <div className='skill_desc'>HTML</div>
                <div className='skill_desc'>OpenCV</div>
                <div className='skill_desc'>React.js</div>
                <div className='skill_desc'>Librosa</div>
                <div className='skill_desc'>C#</div>
            </div>
            <div className='skill_box' id='c'>
                <div className='skill_desc'>Python</div>
                <div className='skill_desc'>Matplotlib</div>
                <div className='skill_desc'>Pyplot</div>
                <div className='skill_desc'>Keras API</div>
                <div className='skill_desc'>SciPy</div>
                <div className='skill_desc'>Numpy</div>
                <div className='skill_desc'></div>
                <div className='skill_desc'></div>
                <div className='skill_desc'></div>
                <div className='skill_desc'></div>
            </div>
            <div className='skill_box' id='d'>
                <div className='skill_desc'>VIM</div>
                <div className='skill_desc'>Pytorch</div>
                <div className='skill_desc'>Making Dashboards</div>
                <div className='skill_desc'>Dart</div>
                <div className='skill_desc'>Bash Script</div>
                <div className='skill_desc'>React-Native</div>
                <div className='skill_desc'>Assembly</div>
                <div className='skill_desc'>Design Patterns</div>
                <div className='skill_desc'></div>
                <div className='skill_desc'></div>
            </div>
        </section> 
        
    </>)
}

export default Skills
