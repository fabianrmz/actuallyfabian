import {React, useState} from 'react';
import Style from './Window.module.css';
import userIcon from './userIcon.png';
import profilePic from './profilePhoto.jpg';
import profilePic2 from './profilePic2.jpg';
const Window = () =>{

    const [mouseOver, setMouseOver] = useState(false);

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
                    <div className={Style.imageContainer} >
                        {mouseOver ? <img alt={"img"} src={profilePic2}   onMouseEnter={() => setMouseOver(true)} onMouseLeave={() => setMouseOver(false)}/> : <img alt={"img"} src={profilePic} onMouseEnter={() => setMouseOver(true)} onMouseLeave={() => setMouseOver(false)} />}
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
