import React from 'react';
import travis from './travis.gif';
import './SoyAdmin.css';
const SoyAdmin = () => {
    const style = {
        'text-align': 'center',
    }
    const stylePointer = {
        'cursor': 'pointer',
    }

    

   
    return(
        <div style={style}>
            Admin test

            <div>
                <img alt="img" className="imageTravis" src={travis}/>
            </div>
            <div>
                <a type={"button"} href={"/"}>
                    <button style={stylePointer}>
                        Go Back
                    </button>
                </a>
            </div>
        </div>
    )
}

export default SoyAdmin;