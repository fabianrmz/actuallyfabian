import React, {useState} from 'react';
import Style from '../Styles/start.module.css'
import winLogo from '../media/winLogo.png';
import UserXP from '../modules/UserXP/UserXP';
import duckPic from '../media/duck.png';
import startUp from '../media/Windows XP Startup.mp3';
import profilePic from '../media/profileFabian.jpg';
//import iconShutdown from '../media/shut_down.png';
const Start = () => {

    const [audio] = useState(new Audio(startUp));
    const [play, setPlay] = useState(true);

    if(play){
        audio.play();
        setPlay(false);
    }
    return (
        <div className={Style.background} >
            <div className={Style.topHeader}></div>
            <div className={Style.container}>
                <div className={Style.half}>
                    <img alt={"img"} src={winLogo}/>
                    <p className={Style.sub}>To begin, click my user name</p>
                </div>
                <div className={Style.half}>
                    <UserXP name={"Fabián Ramírez"} image={profilePic} link={"/desktop"}/>
                    <UserXP name={"Another User"} image={duckPic} link={"/"}/>
                </div>
               
            </div>
            <div className={Style.bottomFooter}>
                
                    
                
                <div className={Style.message2}>
                    <p>After you log on you can't add or change accounts. Just leave.</p>
                </div>
                    
               
            </div>
           
        </div>
    )
}

export default Start;