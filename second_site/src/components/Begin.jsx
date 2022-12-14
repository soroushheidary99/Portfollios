import React from 'react'
import { useEffect } from 'react';
import './Begin.css'
import { useScrollBy } from "react-use-window-scroll";
import Button from './parts/Button.jsx'



function Begin() {
    const scrollBy = useScrollBy();
    var y_init = window.innerHeight;
    var x_init = window.innerWidth;
    useEffect(() => {scrollBy({ top: y_init, left: x_init, behavior: "instant"})}, [] );

    function Begin(){
        let t1 = setTimeout(() => {document.documentElement.style.setProperty('--beginopacity', '0')}, '0');
        let t2 = setTimeout(() => {document.getElementById("beginPage").remove()}, '750');
        return (
            () => t1.then(t2)
        ) 
    }
    const closeTab = () => {
        // window.close
      };

    return (
        <div className='beginPage' id='beginPage'>
            <p className='begin_p'>This site is still under development, and I am still new to the web dev world, project pictures need time to load, though i will add lazy loading in future</p>
            <p className='begin_p begin_p2'>Also be sure to checkout the game of life section, personally i think the Conway's Game of Life is beyond underrated</p>
            <div className='begin_buttons'>
                <Button id='BeginButton' onClick={() => Begin()}>I Undrestand :D</Button>
                <Button id='BeginButton' onClick={closeTab(true)}> No :/</Button>
            </div>
        </div>
    )
}

export default Begin
