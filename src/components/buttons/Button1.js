import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Button from './Button.module.css';

function Button1() {
    return (

        <div className={Button.button1}>

            <div className={Button.container}>
            <FontAwesomeIcon icon={faBars} className={Button.fontawesome1} /><li>Categories</li>
                <li>Ready to Ship</li>
                <li>Personal protective</li>
                <li>Trade Shows</li>
                <li> Buyer central</li>
                <li>Sell on Unic.com</li>
                <li className={Button.help}>Help</li>
                <li className={Button.optional}>English-USD</li>
                <li className={Button.optional}>Ship to</li>

            </div>

        </div>
       
    );
}

export default Button1;