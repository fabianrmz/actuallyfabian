import React, { useState } from 'react';
import {
    Link
  } from "react-router-dom";
import Style from '../../Styles/start.module.css'

const UserXP = (props) => {
    const name = props.name;
    const image = props.image;
    const link = props.link;
    const [pointer, setPointer] = useState(false);
    let selected = {};
    if(pointer){
        selected = {"border":"2px solid #C9AF2D"};
    }else{
        selected = {};
    }
    
    return (
        
        <div className={Style.profile}>
            <Link to={link}>
            <img  alt={"img"} src={image}  style={selected}
                onMouseEnter={() => setPointer(true)}
                onMouseLeave={() => setPointer(false)} />
                </Link>
            <p>{name}</p>
        </div>
    )
}

export default UserXP;