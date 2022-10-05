import React, { useState } from 'react';
import Cart from './Cart.module.css';

function Cart1() {
    const[code,setCode] =useState("")


    const handleSubmit=(event)=>{
        event.preventDefault();
            alert(code)
    }

    return (
        <div className={Cart.intro1}on>
            <div className={Cart.container1}>
                <form onSubmit={handleSubmit}>
                    <label>Submit Your Business Cart</label>
                    <input value = {code} type='number'  onChange={(e)=>setCode(e.target.value)} />
                    <input type="submit"  disabled={!code} className={Cart.btn}/>

                </form>
                
            </div>
            
            
        </div>
    );
}

export default Cart1;