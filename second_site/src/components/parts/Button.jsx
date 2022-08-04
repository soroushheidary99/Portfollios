import React from 'react'
import './Button.css'

const Button = (props) => {
    let fontSize = 'font-size:' + props.fontSize;
    return (
        <button className='coolBeans' onClick={props.onClick} fontSize={props.fontSize}>
            
            {props.children}
            
        </button>
    )
}

export default Button
