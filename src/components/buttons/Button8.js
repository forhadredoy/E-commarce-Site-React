import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import borka from '../img/borka.jpg';
import dress from '../img/dress1.jpg';
import hijab from '../img/hijab1.jpg';
import microwave from '../img/microwave.jpg';
import mobilecharger from '../img/mobilecarger1.jpg';
import tshirt from '../img/tshirt1.jpg';
import Button from "./Button.module.css";

function Button8() {
    return (
   
            <div className={Button.button8}>

<div className={Button.container9}>
    <img src={dress}/>
    <p>quality dress for female</p>
    <p>$20</p>
    <i className={Button.fontAwesome2}>  <FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></i>
    
</div>

<div className={Button.container9}>
    <img src={tshirt}/>
    <p>quality tshirt for boy</p>
    <p>$10</p>
    <i className={Button.fontAwesome2}>  <FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></i>
    
</div>

<div className={Button.container9}>
    <img src={microwave}/>
    <p>electronics microwave parts</p>
    <p>$40</p>
    <i className={Button.fontAwesome2}>  <FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></i>
    
</div>

<div className={Button.container9}>
    <img src={mobilecharger}/>
    <p>samsung mobile charger</p>
    <p>$10</p>
    <i className={Button.fontAwesome2}>  <FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></i>
    
</div>

<div className={Button.container9}>
    <img src={hijab}/>
    <p>hijab for girl</p>
    <p>$10</p>
    <i className={Button.fontAwesome2}>  <FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></i>
    
</div>

<div className={Button.container9}>
    <img src={borka}/>
    <p>borka for girl</p>
    <p>$40</p>
    <i className={Button.fontAwesome2}>  <FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></i>
   
    
</div>

</div>
            
    
    );
}

export default Button8;