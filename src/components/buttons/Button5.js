import React from 'react';
import camera from '../img/camera.jpg';
import matreess from '../img/mattress.jpg';
import microwave from '../img/microwave.jpg';
import pants from '../img/pants.jpg';
import pasta from '../img/pasta.jpg';
import shirt from '../img/shirt.jpg';
import tshirt from '../img/tshirt.png';
import Button from './Button.module.css';
function Button5() {
    return (
        <div>
             <div className={Button.button5}>

           
            <div className={Button.container6} id={Button.camera}>
                <img src={camera}/>
                <p>Cameras</p>

            </div>

            <div className={Button.container6} id={Button.shirt}>
                <img src={shirt}/>
                <p>DShirts</p>
            </div>

            <div className={Button.container6} id={Button.tshirt}>
                <img src={tshirt}/>
                <p>T-shirt</p>
            </div>

            <div className={Button.container6} id={Button.microwave}>
                <img src={microwave}/>
                <p>Microwave</p>
            </div>

            <div className={Button.container6} id={Button.pants}>
                <img src={pants}/>
                <p>Pants</p>
            </div>

            <div className={Button.container6} id={Button.pasta}>
                <img src={pasta}/>
                <p>Pastas</p>
            </div>

            <div className={Button.container6} id={Button.matres}>
                <img src={matreess}/>
                <p>Matreess </p>
            </div>
            

            </div>
            
            
            
        </div>
    );
}

export default Button5;