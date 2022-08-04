import React, {useState} from 'react'
import './Projects1.css'
import Button from './parts/Button.jsx'
import Waves from './parts/Waves.jsx'






const Projects1 = () => {

    const p_list = ['parag1', 'parag2', 'parag3', 'awdawdaw', 'awdawawd', 'awdawdawdawd'];
    const i_list = ['./../assets/pc1.jpg', './../Assets/pn1.png', './../Assets/pn2.png', './../Assets/pn3.png', './../Assets/pn4.png', './../Assets/pe1.png'];
    const l_list = ['https://github.com/', 'https://github.com/', 'https://github.com/', 'https://github.com/', 'https://github.com/', 'https://github.com/'];
    const n_card = p_list.length;

    const [card, setCard] = useState(0);
   
    
    function onClickPlay(e){
        // let elem = document.querySelector('.cards');
        // elem.style.animation = 'anim 2s linear'
    }
    document.addEventListener('click',e => onClickPlay(e));
    

    return (<>
        <section id="Projects1">
            <Waves />
            <h3>Projects1 - Computer Vision Related</h3>
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
                        <Button className='cards__button'>
                            <a href={l_list[card % n_card]} target="_blank"> Github </a>
                        </Button>
                    </div>
                </div>

                

                
            </div>
        </section> 
        
    </>)
}

export default Projects1
