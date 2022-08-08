import React, {useState, useEffect} from 'react'
import './Navminimap.css'


import {BsFillPinMapFill} from 'react-icons/bs'
import {RiHome5Line} from 'react-icons/ri'
import {RiContactsLine} from 'react-icons/ri'
import {RiGameLine} from 'react-icons/ri'
import {AiOutlinePhone} from 'react-icons/ai'
import {FaLaptopCode} from 'react-icons/fa'
import {GiMuscleUp} from 'react-icons/gi'
import {RiServiceLine} from 'react-icons/ri'



    

function Navminimap() {
        
//     function MapToggle(d){
//         if(d=='false'){
//             document.documentElement.style.setProperty('--mapDisplay', 'none');
//         }else{
//             document.documentElement.style.setProperty('--mapDisplay', 'grid');
//         }
        
//     }

    
    function MapToggle(){
        
        let d = getComputedStyle(document.documentElement).getPropertyValue('--mapDisplay')
        let t1 = null;
        let t2 = null;
        
        if(d==='grid'){
            t1 = setTimeout(() => {document.documentElement.style.setProperty('--mapOpacity', '0')}, '0');
            t2 = setTimeout(() => {document.documentElement.style.setProperty('--mapDisplay', 'none')}, '300');
        }else{
            t2 = setTimeout(() => {document.documentElement.style.setProperty('--mapOpacity', '1')}, '300');
            t1 = setTimeout(() => {document.documentElement.style.setProperty('--mapDisplay', 'grid')}, '0');
            }
        return (
            () => t1.then(t2)
            ) 
        }
    return (
        <>
            <button onClick={() => MapToggle()} className='mapGrid'><BsFillPinMapFill className='icons'/></button> 
            
            <div className='gridmap' id='minimap'>
                <div class='mapdescription'>
                    <div className='desc'><RiHome5Line className='icons'/> Home</div>
                    <div className='desc'><GiMuscleUp className='icons'/> Skills</div>
                    <div className='desc'><RiContactsLine className='icons'/> About</div>
                    <div className='desc'><AiOutlinePhone className='icons'/> Contact</div>
                    <div className='desc'><RiServiceLine className='icons'/> Services</div>
                    <div className='desc'><FaLaptopCode className='icons'/> Projects</div>
                </div>
                <a className='cells desccell'></a>
                <a className='cells desccell'></a>
                <a className='cells desccell'></a>
                <a className='cells desccell'></a>
                <a className='cells desccell'></a>
                <a className='cells'></a>
                <a href='#Home' className='cells' onClick={() => MapToggle()}><RiHome5Line className='icon-big' /></a>
                <a href='#About' className='cells' onClick={() => MapToggle()}><RiContactsLine className='icons' /></a>
                <a href='#Contact' className='cells' onClick={() => MapToggle()}><AiOutlinePhone className='icon-big'/></a>
                <a className='cells'></a>
                <a className='cells'></a>
                <a href='#Skills' className='cells' onClick={() => MapToggle()}><GiMuscleUp className='icon-big' /></a>
                <a className='cells'></a>
                <a className='cells'></a>
                <a className='cells'></a>
                <a href='#Projects1' className='cells' onClick={() => MapToggle()}><FaLaptopCode className='icons' /></a>
                <a href='#Services' className='cells' onClick={() => MapToggle()}><RiServiceLine className='icon-big' /></a>
                <a href='#Projects2' className='cells' onClick={() => MapToggle()}><FaLaptopCode className='icons' /></a>
                <a className='cells'></a>
                <a className='cells'></a>
                <a className='cells'></a>
                <a href='#Projects3' className='cells' onClick={() => MapToggle()}><FaLaptopCode className='icon-big'/></a>
                <a className='cells'></a>
                <a className='cells'></a>
                <a href='#Gameroom' className='cells' onClick={() => MapToggle()}><RiGameLine className='icon-big'/></a>
            </div>
        </>
    )
}

export default Navminimap
