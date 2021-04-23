import React from 'react';
import Style from '../Styles/start.module.css'
import winLogo from '../media/winLogo.png';
import UserXP from '../modules/UserXP/UserXP';

import duckPic from '../media/duck.png';
import profilePic from '../media/profileFabian.jpg';
import gitHubLogo from '../media/gitLogo.png';
import linkedInLogo from '../media/linkedInLogo.png';
import myCV from '../media/CV2021.pdf';
//import iconShutdown from '../media/shut_down.png';
const Start = () => {

    
    return (
        <div className={Style.background} >
            <div className={Style.topHeader}></div>
            <div className={Style.container}>
                <div className={[Style.half, Style.halfLeft].join(" ")}>
                    <img alt={"img"} src={winLogo}/>
                    <p className={Style.sub}>To begin, click my user name</p>
                </div>
                <div className={Style.half}>
                    <UserXP name={"Fabián Ramírez"} image={profilePic} link={"/desktop"}/>
                    <UserXP name={"My CV"} image={duckPic} link={myCV} />
                    <UserXP name={"Github Profile"} image={gitHubLogo} link={"https://github.com/fabianrmz"}/>
                    <UserXP name={"LinkedIn Profile"} image={linkedInLogo} link={"https://www.linkedin.com/in/fabian-ramirez-gonzalez/"}/>
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