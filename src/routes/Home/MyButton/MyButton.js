import React, { useState } from 'react';
import arrow from './arrow.gif';
import './MyButton.css';
const MyButton = (props) => {
    const [pointing, setPointing] = useState(false);
    const style = {
        'cursor': 'pointer',
        'width': '100px',
    };

    const mouseEnter = () => {
        setPointing(true)
    };
    const mouseLeave = () => {
        setPointing(false)
    };
   

    return(
        <div className="buttonStyle">
            {pointing? <img alt="img" className="arrow" src={arrow}/>  :null}
                <a  type={'button'} href={props.link} >
               
                    <button 
                        onMouseEnter={() => mouseEnter()} 
                        onMouseLeave={() => mouseLeave()} 
                        style={style}>
                        {props.name}
                    </button>
                    
                </a>
                
            
        </div>
    )
}

export default MyButton;