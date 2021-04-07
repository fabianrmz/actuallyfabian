import React from 'react';
import Style from './Window.module.css';
import userIcon from './userIcon.png';
import profilePic from './profilePhoto.jpg';
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
                    <div className={Style.imageContainer}>
                        <img alt={"img"} src={profilePic}/>
                    </div>
                    <div className={Style.textContainer}>
                        <p>Fabián Ramírez </p>
                        <p>Computer Systems Engineer Student (8th semester)</p>
                        <p>Tec de Monterrey, Campus GDL</p>
                        
                    </div>
                    
                </div>
            </div>
            
            <div>

            </div>
        
        </div>
    )
}
export default Window;
