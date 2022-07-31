import React from 'react'
import { useScrollBy } from "react-use-window-scroll";
import './Navmap.css'

function Navmap() {
    


    const scrollBy = useScrollBy();
    return (
        <>
            <button className='navbtn' id='down' onClick={() => scrollBy({ top: window.innerHeight, behavior: "smooth" })}>down</button>
            <button className='navbtn' id='up' onClick={() => scrollBy({ top: -window.innerHeight, behavior: "smooth" })}> up </button>
            <button className='navbtn' id='right' onClick={() => scrollBy({ left: window.innerWidth, behavior: "smooth" })}> right </button>
            <button className='navbtn' id='left' onClick={() => scrollBy({ left: -window.innerWidth, behavior: "smooth" })}> left </button>    
        </>
    )
}

export default Navmap
