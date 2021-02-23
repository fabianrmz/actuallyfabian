import React from 'react';
import './Home.css';
import kirby from './mascot.gif'
import MyButton from './MyButton/MyButton';

const Home = () => {

    

    return(
        <div className="container">
            <h1>Don't look at me...</h1>

           

            <div className="window"> 
                <div className="header">
                    <p>Follow the links! <a type={'button'} href={'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO'}><button type="button" className="closeX">X</button></a></p>  
                </div>
                <div className="message">
                    <p>Where do you want to go?</p>


                    <div className="buttons">
                        <ul>
                            <MyButton name={'Myself'} link={'https://twitter.com/ActuallyFabian'}/>
                            <MyButton name={'My CV'} link={''}/>
                            <MyButton name={'Git'} link={'https://github.com/fabianrmz'}/>
                            <MyButton name={'Linked In'} link={'https://www.linkedin.com/in/fabian-ramirez-gonzalez/'}/>
                        </ul>
                        
                        
                    </div>
                    <div className="buttonContent">
                        <a type={"button"} href={"/soyadmin"}>
                            <button>
                                LET'S FLY!!
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