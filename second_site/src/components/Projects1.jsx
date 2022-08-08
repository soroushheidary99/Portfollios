import React, {useState} from 'react'
import './Projects2.css'
import Button from './parts/Button.jsx'
import Waves from './parts/Waves.jsx'


import pic_1 from './../assets/cnn-image-preprocessing.png'
import pic_2 from './../assets/cnn-housepred.png'
import pic_3 from './../assets/cnn-leaf.png'
import pic_4 from './../assets/nlp2.png'
import pic_5 from './../assets/nlp1.png'
import pic_6 from './../assets/ts.png'



const Projects1 = () => {

    const p_list = ['Street Sign Classification, comparing different cnn archituctures for street sign classification, final results of 96% accuracy, the data did not provided much challenge though',
     'hybrid CNN-ANN model for house-prediction using numerical data alongside of pictures', 
     'Leaf Classification based on a paper, using pre-trained MobileNetV2 model for feature extraction only to be fed to a SVM Classifier', 
     'NLP data prepration such as tokenizing, stemming and lemmatizing', 
     'using Word2Vec Models to create embedding systems for language models, visualizing the embedded space via dimension reduction techniques', 
     'time series forcasting, comparing different models such 4 variations of AutoRegressive models and LSTM based Approaches'];
    const i_list = [pic_1, pic_2, pic_3, pic_4, pic_5, pic_6];
    const l_list = ['https://github.com/soroushheidary99/Neural-Network-Course/tree/main/Project%202(CNN)', 
                    'https://github.com/soroushheidary99/Neural-Network-Course/tree/main/Project%203(CNN%20%2B%20MLP)', 
                    'https://github.com/soroushheidary99/Computer-Vision/tree/main/Leaf%20Detection%20Using%20CNN-SVM', 
                    'https://github.com/soroushheidary99/Natural-Language-Processing/tree/main/NLP%20-%201', 
                    'https://github.com/soroushheidary99/Natural-Language-Processing/tree/main/NLP%20-%202', 
                    'https://github.com/soroushheidary99/Data-Mining-Course/tree/main/6%20-%20Time%20Series/Myself'];
    const n_card = p_list.length;

    const [card, setCard] = useState(2);
   
    
    function onClickPlay(e){
        // let elem = document.querySelector('.cards');
        // elem.style.animation = 'anim 2s linear'
    }
    document.addEventListener('click',e => onClickPlay(e));
    

    return (<>
        <section id="Projects1">
            <Waves />
            <h3>Modeling Related</h3>
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

export default Projects1
