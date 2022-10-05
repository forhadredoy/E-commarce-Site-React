import React from 'react';
import ten from '../img/02.jpg';
import one from "../img/18.jpg";
import two from '../img/19.jpg';
import three from '../img/20.jpg';
import five from '../img/22.jpg';
import four from '../img/24.jpg';
import seven from '../img/25.jpg';
import eight from '../img/26.jpg';
import nine from '../img/27.jpg';
import six from '../img/31.jpg';
import Button12 from './Button12';
import './Card.css';


function Button13() {
    let box =document.querySelector('.product-container')

    const handleClick = () =>{
        let width = box.clientWidth;
        box.scrollLeft =box.scrollLeft - width/2

    }

    const handleClick1 =()=>{
        let width = box.clientWidth;
        box.scrollLeft =box.scrollLeft + width/2


    }

    
    return (
        <div className='product-carousel'>
             <button className="prev" onClick={handleClick}><p> {"<"} </p></button>
            <button className="next" onClick={handleClick1}><p> {">"} </p></button>
          

           <div className='product-container'>
          <Button12 cardno ="1"   src={one}
      width="auto"
      height="465" inf="Shoes"/>
             <Button12 cardno ="1"   src={two}
      width="auto"
      height="465" inf ="Shoes"/>
         <Button12 cardno ="1"   src={three}
      width="auto"
      height="465" inf="jersiey"/>
         <Button12 cardno ="1"   src={four}
      width="auto"
      height="265" inf="Iphone 14"/>
         <Button12 cardno ="1"   src={five}
      width="auto"
      height="265" inf="T Shirt"/>
         <Button12 cardno ="1"   src={six}
      width="auto"
      height="265" inf= "Ring"/>
         <Button12 cardno ="1"   src={seven}
      width="auto"
      height="265"
      inf="PC"/>
         <Button12 cardno ="1"   src={eight}
      width="auto"
      height="265" inf = "Clock"/>
         <Button12 cardno ="1"   src={nine}
      width="auto"
      height="265" inf= "Bag"/>
         <Button12 cardno ="1"   src={ten}
      width="auto"
      height="265" inf = "Watch"/>
        

           </div>
            
        </div>
    );
}

export default Button13;