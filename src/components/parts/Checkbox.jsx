import React from 'react'
import './Checkbox.css'

const Checkbox = () => {
    return (
    <>
        <div className="bg-container">
            
            <input type="checkbox" id="_checkbox" />
            <label htmlFor="_checkbox">
                <div id="tick_mark" />
            </label>
        </div>
    </>

    )
}

export default Checkbox
