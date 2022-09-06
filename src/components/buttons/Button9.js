import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import bag from '../img/bag2.jpg';
import bala from '../img/bala1.jpg';
import bodyshpre from '../img/bodyspre1.jpg';
import mobile from '../img/mobile.jpg';
import painjebi from '../img/painjebi1.jpg';
import watch from '../img/watch.jpg';
import Button from './Button.module.css';

function Button9() {
    return (
        <div className={Button.button9}>

        <div className={Button.container10}>
            <img src={mobile}/>
            <p>nice andoid mobile</p>
            <p>$250</p>
            <i className={Button.fontAwesome2}>  <FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></i>
            
        </div>
        
        <div className={Button.container10}>
            <img src={ bodyshpre}/>
            <p>body spree </p>
            <p>$10</p>
            <i className={Button.fontAwesome2}>  <FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></i>
            
        </div>
        
        <div className={Button.container10}>
            <img src={ painjebi }/>
            <p>Awesome painjebi</p>
            <p>$30</p>
            <i className={Button.fontAwesome2}>  <FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></i>
            
        </div>
        
        <div className={Button.container10}>
            <img src={bala}/>
            <p>flexible bala</p>
            <p>$20</p>
            <i className={Button.fontAwesome2}>  <FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></i>
            
        </div>
        
        <div className={Button.container10}>
            <img src={ bag }/>
            <p>cute bag</p>
            <p>$10</p>
            <i className={Button.fontAwesome2}>  <FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></i>
            
        </div>
        
        <div className={Button.container10}>
            <img src={watch}/>
            <p>quality watch </p>
            <p>$10</p>
            <i className={Button.fontAwesome2}>  <FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></i>
           
            
        </div>
        
        </div>
                    
            
            );
      
    
}

export default Button9;