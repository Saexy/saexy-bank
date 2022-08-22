import React from 'react';

import './style.css'

const Input = (props) => {
    const type = props.type != null && props.type != undefined ? props.type : ""
    const theme = props.theme != null && props.theme != undefined ? props.theme : ""
    const width = props.width != null && props.width != undefined ? props.width : ""
    const label = props.label != null && props.label != undefined ? props.label : ""
    const placeholder = props.placeholder != null && props.placeholder != undefined ? props.placeholder : ""
    
    return (
        <div className={`inputgroup ${theme}`} style={{width: width}}>
            {label != "" && 
                <div className="label">{label}</div>
            }
            <input type={type} className='text' placeholder={placeholder} onChange={props.onChange}/>
        </div>
    )
}
 
export default Input;