import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import headphone from '../img/headphone1.jpg';
import mobile from '../img/iphone1.png';
import leptopbettery from '../img/leptopbettery1.jpg';
import psticker from '../img/psticker1.jpg';
import sunglass from '../img/sunglass1.jpg';
import urna from '../img/urna1.jpg';
import Button from './Button.module.css';




function Button10() {
    return (
        <div className={Button.button10}>

        <div className={Button.container11}>
            <img src={mobile}/>
            <p>quality iphone 11</p>
            <p>$700</p>
            <i className={Button.fontAwesome2}>  <FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></i>
            
        </div>
        
        <div className={Button.container11}>
            <img src={ urna}/>
            <p>this is silky dupatta</p>
            <p>$20</p>
            <i className={Button.fontAwesome2}>  <FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></i>
            
        </div>
        
        <div className={Button.container11}>
            <img src={ sunglass }/>
            <p>black sunglass </p>
            <p>$10</p>
            <i className={Button.fontAwesome2}>  <FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></i>
            
        </div>
        
        <div className={Button.container11}>
            <img src={headphone}/>
            <p>quality headphone</p>
            <p>$30</p>
            <i className={Button.fontAwesome2}>  <FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></i>
            
        </div>
        
        <div className={Button.container11}>
            <img src={ psticker }/>
            <p> programming sticker</p>
            <p>$7</p>
            <i className={Button.fontAwesome2}>  <FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></i>
            
        </div>
        
        <div className={Button.container11}>
            <img src={leptopbettery}/>
            <p> leptop bettery</p>
            <p>$50</p>
            <i className={Button.fontAwesome2}>  <FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></i>
           
            
        </div>
        
        </div>
                    
    );
}

export default Button10;