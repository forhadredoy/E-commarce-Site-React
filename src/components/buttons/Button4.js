import React from 'react';
import duster from '../img/duster.jpg';
import femaledress from '../img/femaledress.jpeg';
import garbez from '../img/garbez.jpeg';
import labels from '../img/labels.jpeg';
import mobile from '../img/mobile.jpg';
import sanitizers from '../img/sanitizer.jpg';
import tablets from '../img/tablets.jpeg';
import watch from '../img/watch.jpg';
import Button from './Button.module.css';

function Button4() {
    return (
        <div className={Button.main3}>
            <h3>Catagories</h3>
            <div className={Button.button4}>

           
            <div className={Button.container5}>
                <img src={watch}/>
                <p>Watches and Accesories</p>

            </div>

            <div className={Button.container5}>
                <img src={duster}/>
                <p>Duster and dust cloths</p>
            </div>

            <div className={Button.container5}>
                <img src={mobile}/>
                <p>Mobiles</p>
            </div>

            <div className={Button.container5}>
                <img src={femaledress}/>
                <p>Beauty and Wellness</p>
            </div>

            <div className={Button.container5}>
                <img src={garbez}/>
                <p>Garbage and Recycling Bins</p>
            </div>

            <div className={Button.container5}>
                <img src={tablets}/>
                <p>Tablets</p>
            </div>

            <div className={Button.container5}>
                <img src={labels}/>
                <p>Labels</p>
            </div>
            <div className={Button.container5}>
                <img src={sanitizers }/>
                <p>sanitizers</p>
            </div>

            </div>
            
            
            
        </div>
    );
}

export default Button4;