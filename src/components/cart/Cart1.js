import React, { useState } from 'react';
import Cart from './Cart.module.css';

function Cart1() {
    const[code,setCode] =useState("")


    const handleSubmit=(event)=>{
        event.preventDefault();
            console.log(code)
    }

    return (
        <div className={Cart.intro1}on>
            <div className={Cart.container1}>
                <form onSubmit={handleSubmit}>
                    <label>Submit Your Business Cart</label>
                    <input value = {code} type='text'  onChange={(e)=>setCode(e.target.value)} />
                    <input type="submit" className={Cart.btn}/>

                </form>
                
            </div>
            
            
        </div>
    );
}

export default Cart1;