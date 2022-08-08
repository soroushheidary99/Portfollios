
import './Projects2.css'
import React, {useState} from 'react'
import Button from './parts/Button.jsx'
import Waves from './parts/Waves.jsx'
import Shapes from './parts/Shapes.jsx'
import Checkbox from './parts/Checkbox.jsx'

import pic_1 from './../assets/dask.png'
import pic_2 from './../assets/snn.png'
import pic_4 from './../assets/web.png'
import pic_5 from './../assets/game_pixel.png'
import pic_6 from './../assets/game_ai.png'
import pic_3 from './../assets/fandogh.png'

const Projects3 = () => {

    const p_list = ['using different multi_processing approaches and comparing the results such as dask and pyspark', 
    'this was a facsinating course about computational neuroscience, building a spiking neural network from scratch, the project is divided into 3 sections which will go through building an individual neuron to conncted populations, simulating STDP learning rule', 
    'deployed services such as outlier detector and interpolation services into the fandogh could provider',
    'this is my first front-end project, Using HTML/plain CSS/React.js', 
    'Pixelated game built as a term project for computer graphics course, some sprites are self-made', 
    'AI course final project, all the sprites are self made, the GUI was then used as a template for the rest of the class', ];
    const i_list = [pic_1, pic_2, pic_3, pic_4, pic_5, pic_6];
    const l_list = ['https://github.com/', 'https://github.com/', 'https://github.com/', 'https://github.com/', 'https://github.com/', 'https://github.com/'];
    const n_card = p_list.length;

    const [card, setCard] = useState(0);
   
    
    function onClickPlay(e){
        // let elem = document.querySelector('.cards');
        // elem.style.animation = 'anim 2s linear'
    }
    document.addEventListener('click',e => onClickPlay(e));
    

    return (<>
        <section id="Projects3">
            <Waves />
            <h3>Software Engineering / Miscellaneous</h3>
            <div className='auxilaryContainer'>

                <div className='cards'>
                    <div className='card__image__container'>
                        <img className='card__image' src={i_list[card % n_card]}></img>
                    </div>

                    <div className='card__info'>
                        <p>{p_list[card % n_card]}</p>
                    </div>

                    <div className='cards__buttons__container'>
                        <Button className='cards__button' onClick={() => setCard(card + 1)}> Next </Button>
                        <Button className='cards__button' onClick={() => setCard(card - 1)}> Previous </Button>
                        <Button className='cards__button'>
                            <a href={l_list[card % n_card]} target="_blank" className='project_link'> Github </a>
                        </Button>
                    </div>
                </div>

                

                
            </div>
        </section> 
        
    </>)
}

export default Projects3
