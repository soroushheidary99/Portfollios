
import './Projects2.css'
import React, {useState} from 'react'
import Button from './parts/Button.jsx'
import Waves from './parts/Waves.jsx'

import pic_1 from './../assets/airbnb.png'
import pic_2 from './../assets/recom-spotify.png'
import pic_3 from './../assets/corona2.png'
import pic_4 from './../assets/umap.png'
import pic_5 from './../assets/img-comp.png'
import pic_6 from './../assets/audio-spectral.png'

const Projects2 = () => {

    const p_list = ['AirBnB dataset is collected over the newyork city hotel-bookings, this is a good start for EDA purposes as it contains clear-features + geo-spatial data I also gathered some additional data using googlemap API, the report walks you through',
     'Spotify Dataset: practicing reccomender systems using DimensionReducition + Clusterings, around 8 different variations',
     'Covid-19 dataset captures global responses to the covid virus, through this EDA I learned many different visualization techniques and storytelling tips, also tried out interactive and animated visualizations such as virus-spread over time on global mapping using Plotly library, plotly express is a noob-friendly API which is recommended if you are new',
     'This Dataset is synthetic but was based on realworld data, no feature discriptions was provided, though it was a good practice for learning how umap and hdbscan could come in handy when trying to extract and visualize clusterings in high dimentional (around 30 features) data',
     'Image Compression Using k-means Clustering Technique, comparing to other techniques in the paper such as DTC or CartesianSampling, the Image was reduced', 
     'Auditory Data Preprocessing and feature extraction, this project uses librosa library to extract features from auditory data such as spectograms and heatmaps, two main approaches are taken into account for emotion detection, one uses LSTMs without the engineered features, the other is a CNN over feature engineered features'];
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
        <section id="Projects2">
            <Waves />
            <h3>Analysis & Transformation</h3>
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

export default Projects2
