import React from 'react';


const MyButton = (props) => {
    const style = {
        'cursor': 'pointer',
        'width': '100px',
    };

    return(
        <div className="buttonStyle">
            
                <a  type={'button'} href={props.link} >
                    <button style={style}>
                        {props.name}
                    </button>
                </a>
            
        </div>
    )
}

export default MyButton;