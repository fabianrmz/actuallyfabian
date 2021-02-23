import React from 'react';


const MyButton = (props) => {
    const style = {
        'cursor': 'pointer',
        'width': '100px',
    };

    return(
        <>
            <li style={style} >
                <a type={'button'} href={props.link} >
                {props.name}
                </a>
            </li>
        </>
    )
}

export default MyButton;