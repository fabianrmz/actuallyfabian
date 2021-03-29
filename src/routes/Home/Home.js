import React from 'react';
import './Home.css';
import kirby from './mascot.gif'
import MyButton from './MyButton/MyButton';

import myCV from './Fabian Ramirez CV.pdf';

const Home = () => {

    

    return(
        <div className="container">
            

           

            <div className="window"> 
                <div className="header">
                    <p>Fabian's links! <a type={'button'} href={'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO'}><button type="button" className="closeX">X</button></a></p>  
                </div>
                <div className="message">
                    <p>Where do you want to go?</p>


                    <div className="buttons">
                        
                            <MyButton name={'Twitter'} link={'https://twitter.com/ActuallyFabian'}/>
                            <MyButton name={'My CV'} link={myCV}/>
                            <MyButton name={'Git'} link={'https://github.com/fabianrmz'}/>
                            <MyButton name={'Linked In'} link={'https://www.linkedin.com/in/fabian-ramirez-gonzalez/'}/>
                            
                        
                        
                    </div>
                    <hr></hr>
                    <div className="buttonContent">
                        <a type={"button"} href={"/soyadmin"}>
                            <button>
                                CONTINUE
                            </button>
                        </a>
                        
                    </div>
                </div>
            </div>
            
            
            

            <div className="imageWrapper">
                <img alt="img" src={kirby}/>
            </div>

          
        </div>
    )
}

export default Home;