import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import tshirt from '../img/bag1.jpg';
import cat from '../img/catfood1.jpg';
import dog from '../img/dogfood1.jpg';
import pendrive from '../img/pendrive.jpg';
import shoes from '../img/shoes1.jpg';
import ssd from '../img/ssd1.jpg';
import Button from './Button.module.css';


function Button7() {

    let navigate  = useNavigate();

    const handleClick=()=>{
        navigate("../success", { replace: true },);


    }
    return (
        <div className={Button.button7}>

            <div className={Button.container8} onClick={handleClick}>
                <img src={shoes}/>
                <p>this is nice shoes </p>
                <p>$210</p>
                <i className={Button.fontAwesome2}>  <FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></i>
                
            </div>

            <div className={Button.container8}>
                <img src={pendrive}/>
                <p>pendrive of hp</p>
                <p>$20</p>
                <i className={Button.fontAwesome2}>  <FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></i>
                
            </div>

            <div className={Button.container8}>
                <img src={tshirt}/>
                <p>bag</p>
                <p>$33</p>
                <i className={Button.fontAwesome2}>  <FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></i>
                
            </div>

            <div className={Button.container8}>
                <img src={ssd}/>
                <p>high speed SSD</p>
                <p>$70</p>
                <i className={Button.fontAwesome2}>  <FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></i>
                
            </div>

            <div className={Button.container8}>
                <img src={cat}/>
                <p>healthy cat food</p>
                <p>$10</p>
                <i className={Button.fontAwesome2}>  <FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></i>
                
            </div>

            <div className={Button.container8}>
                <img src={dog}/>
                <p>Healthy dog food </p>
                <p>$10</p>
                <i className={Button.fontAwesome2}>  <FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></i>
               
                
            </div>
            
        </div>
    );
}

export default Button7;