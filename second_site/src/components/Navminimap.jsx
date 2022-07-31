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
    // useEffect(() => {MapToggle(mapdisplay)}, [mapdisplay])


    
    function MapToggle(){
        
        let d = getComputedStyle(document.documentElement).getPropertyValue('--mapDisplay')
        console.log(d);
        let t1 = null;
        let t2 = null;
        
        if(d=='grid'){
            t1 = setTimeout(() => {document.documentElement.style.setProperty('--mapOpacity', '0')}, '0');
            t2 = setTimeout(() => {document.documentElement.style.setProperty('--mapDisplay', 'none')}, '300');
        }else if(d=='none'){
            t2 = setTimeout(() => {document.documentElement.style.setProperty('--mapOpacity', '1')}, '300');
            t1 = setTimeout(() => {document.documentElement.style.setProperty('--mapDisplay', 'grid')}, '0');
            }
        return (
            t1.then(t2)
            ) 
        }
    return (
        <>
            <button onClick={() => MapToggle()} className='mapGrid'><BsFillPinMapFill/></button>    
            <gridmap id='minimap'>
                <a className='cells'></a>
                <a className='cells'></a>
                <a className='cells'></a>
                <a className='cells'></a>
                <a className='cells'></a>
                <a className='cells'></a>
                <a href='#Home' className='cells'><RiHome5Line className='icon-big'/></a>
                <a href='#About' className='cells'><RiContactsLine /></a>
                <a href='#Contact' className='cells'><AiOutlinePhone className='icon-big'/></a>
                <a className='cells'></a>
                <a className='cells'></a>
                <a href='#Skills' className='cells'><GiMuscleUp className='icon-big' /></a>
                <a className='cells'></a>
                <a className='cells'></a>
                <a className='cells'></a>
                <a href='#Projects1' className='cells'><FaLaptopCode /></a>
                <a href='#Services' className='cells'><RiServiceLine className='icon-big' /></a>
                <a href='#Projects2' className='cells'><FaLaptopCode /></a>
                <a className='cells'></a>
                <a className='cells'></a>
                <a className='cells'></a>
                <a href='#Projects3' className='cells'><FaLaptopCode className='icon-big'/></a>
                <a className='cells'></a>
                <a className='cells'></a>
                <a href='#Gameroom' className='cells'><RiGameLine className='icon-big'/></a>
            </gridmap>
        </>
    )
}

export default Navminimap
