import React, {useState} from 'react';
import logOn from '../media/Windows XP Logon Sound.mp3';
import Style from '../Styles/desktop.module.css';
import Window from '../modules/Window/Window';

const Desktop = () => {
    const [audio] = useState(new Audio(logOn));
    const [play, setPlay] = useState(true);
    if(play){
        audio.play();
        setPlay(false);
    }

    return(
        <div className={Style.background}>
            <Window>

            </Window>
            
        </div>
    )
}

export default Desktop;