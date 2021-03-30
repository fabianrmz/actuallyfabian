import React from 'react';
import Style from './Window.module.css';
import userIcon from './userIcon.png';

const Window = () =>{

    return (
        <div className={Style.windowContainer}>
            <div className={Style.topWindow}>
                <div className={Style.captionWindow}>
                    <img alt={"img"} src={userIcon}/>
                    <p>Welcome to my profile!</p>
                </div>
            
                <div className={Style.closeX}>
                        <p>X</p>
                </div>
                <div className={Style.windowBlueOption}>
                        <p>□</p>
                </div>
                <div className={Style.windowBlueOption}>
                        <p>_</p>
                </div>
                <div className={Style.windowContent}>
                    This page is in working progress
                </div>
            </div>
            
            <div>

            </div>
        
        </div>
    )
}
export default Window;
