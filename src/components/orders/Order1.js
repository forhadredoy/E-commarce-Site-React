import { Button } from 'bootstrap';
import React, { useState } from 'react';
import Order from './order.module.css';


function Order1() {
    const [text,setText] =useState('')
       const [text1,setText1] =useState('')
       const [text2,setText2] =useState('')
       const [text3,setText3] =useState('')
       const [text4,setText4] =useState('')
       const [text5,setText5] =useState('')
       const [text6,setText6] =useState('')
       const [text7,setText7] =useState('')

       const handleSubmit=(event)=>{
        event.preventDefault();
    console.log(text,text1,text2,text3,text4,text5,text6,text7)
    }
       
    
    
    return (
       
              <div className={Order.intro}>
            <div className={Order.container}>
                <form onSubmit={handleSubmit} className={Button.form}> 
                    <label>Full Name  </label>
                <input type="text" value={text} placeholder="search" onChange={(e)=>setText(e.target.value)}/>

                <label>Phone Number </label>
                <input type="text" value={text1} placeholder="search" onChange={(e)=>setText1(e.target.value)}/>

                <label>Bulding/Houseno/floor /Street </label>
                <input type="text" value={text2} placeholder="search" onChange={(e)=>setText2(e.target.value)}/>

                <label>Colony / Suburb / Locality / Landmark </label>
                <input type="text" value={text3} placeholder="search" onChange={(e)=>setText3(e.target.value)}/>

                <label>Region </label>

                <select value={text4} onChange={(e)=>setText4(e.target.value)}>
               
                    <option value="Dhaka">Dhaka</option>
                    <option value="Chittagong">Chittagong</option>
                     <option value="Rajsahi">Rajsahi</option>
                     <option value="Barishal">Barishal</option>
                     <option value="Rangpur">Rangpur</option>
                     <option value="Sylet">Sylet</option>
                     <option value="Khulna">Khulna</option>
                 </select>

                 <label>City</label>
                <input type="text" value={text5} placeholder="search" onChange={(e)=>setText5(e.target.value)}/>
                <label>Area</label>
                <input type="text" value={text6} placeholder="search" onChange={(e)=>setText6(e.target.value)}/>
                <label>Adress</label>
                <input type="text" value={text7} placeholder="search" onChange={(e)=>setText7(e.target.value)}/>

                <input type="submit"  className={Order.btn}/>

             

                </form>
                

            </div>

            
        </div>
            
    )
}

export default Order1;