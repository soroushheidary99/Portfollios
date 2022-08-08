import React from 'react'
import './Services.css'
import Waves from './parts/Waves.jsx'
import {MdDoubleArrow} from 'react-icons/md'

const txt1 = 'DeepLeaarning / Modeling';
const txt2 = 'Data Analysis / Data Engineering';
const txt3 = 'Software Engineering / Data Engineering';


const Services = () => {
    function toggle_text(x){
        // const element = document.getElementById(x);
        // if(x=='pyramid_1'){
        //     element.textContent=txt1;
        // }
        // else if(x=='pyramid_2'){
        //     element.textContent=txt2;
        // }
        // else if(x=='pyramid_3'){
        //     element.textContent=txt3;
        // }    
        }
    
    return (<>
        <section id="Services">
            <Waves className='waveChanger2'/> 
            <div className='auxilaryContainer_Services'>
                <p>We all know about the famouse Data Science Pyramid, this is my undrestanding of it, hover over each part for a quick peek</p>
                <div className='pyramid'>
                    <div id='pyramid_1' onPointerOver={() => toggle_text('pyramid_1')} className='pyramid_part pyramid_head'>
                        <div className='pyramid_icons'><MdDoubleArrow className='pyramid_icons pi1'/></div>
                        <div className='pyramid_desc'>Deep Learning Engineering</div>
                        <div className='pyramid_desc'>Machine Learning Engineering</div>
                        <div className='pyramid_desc'>A/B Testing</div>
                        <div class='pyramid_title'>Learn & Optimize: Research through modeling</div>
                    </div>
                    <div id='pyramid_2' onPointerOver={() => toggle_text('pyramid_2')} className='pyramid_part pyramid_body'>
                        <div className='pyramid_icons'><MdDoubleArrow className='pyramid_icons pi2'/></div>
                        <div className='pyramid_desc'>Dashboard Creation</div>
                        <div className='pyramid_desc'>Feature Engineering</div>
                        <div className='pyramid_desc'>Insight Extraction</div>
                        <div className='pyramid_desc'>Data Aggrigations</div>
                        <div className='pyramid_desc'>Data Wrangling</div>
                        <div className='pyramid_desc'>Data Cleaning</div>
                        <div class='pyramid_title'>Explore & Transform: Flourish Data & Extract insights</div>
                    </div>
                    <div id='pyramid_3' onPointerOver={() => toggle_text('pyramid_3')} className='pyramid_part pyramid_foot'>
                        <div className='pyramid_icons'><MdDoubleArrow className='pyramid_icons pi3'/></div>
                        <div className='pyramid_desc'>Parallel Data Preprocessing</div>
                        <div className='pyramid_desc'>Big Data technologies</div>
                        <div className='pyramid_desc'>DevOps / MLOps</div>
                        <div className='pyramid_desc'>Software Engineering</div>
                        <div class='pyramid_title'>Adquisition: Collect, Store & Stream Data</div>
                    </div>
                </div>

            </div>
        </section> 
    </>)
}


export default Services
