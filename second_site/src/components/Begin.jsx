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
        
    return (
        <div className='beginPage' id='beginPage'>
            <Button id='BeginButton' onClick={() => Begin()}>Begin?</Button>
        </div>
    )
}

export default Begin
