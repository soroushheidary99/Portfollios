import React from 'react'
import './Home.css'
import Waves from './parts/Waves.jsx'
import {NonavLeft, NonavTop, NonavBot, NonavRight} from './parts/Nonav'

const Home = () => {
    function changeTheme(x) {
        if(x==1){
            document.documentElement.style.setProperty('--color-primary', 'rgb(142, 255, 253)');
            document.documentElement.style.setProperty('--color-secondary', 'rgba(211, 16, 65, 0.785)');
            document.documentElement.style.setProperty('--color-tertiary', 'rgb(4, 0, 90)');
            document.documentElement.style.setProperty('--color-tertiary-bright', 'rgb(34, 0, 156)');
            document.documentElement.style.setProperty('--color-p', 'black');
        }else if(x==2){
            document.documentElement.style.setProperty('--color-primary', 'indigo');
            document.documentElement.style.setProperty('--color-secondary', 'yellow');
            document.documentElement.style.setProperty('--color-tertiary', '#55c79d');
            document.documentElement.style.setProperty('--color-tertiary-bright', '#00ffa2');
            document.documentElement.style.setProperty('--color-p', 'white');
        }
    }
    return (<>
        <NonavTop />
        <NonavRight />
        <NonavLeft />
        <NonavBot />
        <section id="Home">


            <Waves /> 
            <div className='container container__home'>
                <h3>Welcom To My Website</h3>
                <p>Hover over the edges to navigate around</p>
                <p id='p2_home'>... Or use the mini map if you're lazy :D</p>
                <div className='container__themes'>
                    <div className='theme' id='theme_1' onClick={() => changeTheme(1)}></div>
                    <div className='theme' id='theme_2' onClick={() => changeTheme(2)}></div>
                </div>
            </div>
            
        </section> 
        
    </>)
}

export default Home
