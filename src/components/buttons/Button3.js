import React from 'react';
import shopping from '../img/shopping.jpg';
import Button from './Button.module.css';

function Button3() {
    return (
        <div className={Button.button3}>


            <div className={Button.container3}>
                
                <h1>Unic.com</h1>
                <h3>Shop don't stop</h3>
                <button>Shop now</button>

            </div>
            
            <div className={Button.container4}>

                <img src={shopping}/>


            </div>

            

    

            
        </div>
    );
}

export default Button3;