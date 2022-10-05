import React from 'react';
import duster from '../img/duster.jpg';
import femaledress from '../img/femaledress.jpeg';
import garbez from '../img/garbez.jpeg';
import labels from '../img/labels.jpeg';
import mobile from '../img/mobile.jpg';
import tablets from '../img/tablets.jpeg';
import watch from '../img/watch.jpg';
import Button from './Button.module.css';

function Button4() {
    return (
        <div className={Button.main3}>
            <h3>Catagories</h3>
            <div className={Button.button4}>

           
            <div className={Button.container5} id={Button.watch}>
                <img src={watch}/>
                <p>Watch</p>

            </div>

            <div className={Button.container5} id={Button.duster}>
                <img src={duster}/>
                <p>Duster</p>
            </div>

            <div className={Button.container5} id={Button.mobile}>
                <img src={mobile}/>
                <p>Mobiles</p>
            </div>

            <div className={Button.container5} id={Button.beauty}>
                <img src={femaledress}/>
                <p>Beauty </p>
            </div>

            <div className={Button.container5} id={Button.garbez}>
                <img src={garbez}/>
                <p>Garbage</p>
            </div>

            <div className={Button.container5} id={Button.tablets}>
                <img src={tablets}/>
                <p>Tablets</p>
            </div>

            <div className={Button.container5} id={Button.labels}>
                <img src={labels}/>
                <p>Labels</p>
            </div>
          

            </div>
            
            
            
        </div>
    );
}

export default Button4;