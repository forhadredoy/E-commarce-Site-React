import React, { useState } from 'react';
import Message from './Message.module.css';

function Message1() {
    const [text,setText] =useState('')
    return (
        <div className={Message.intro}>
            <div className={Message.container}>
                <form> 
                <input type="text" value={text} placeholder="search" onChange={(e)=>setText(e.target.value)}/>
                </form>
                <p>No message now!</p>

            </div>

            
        </div>
    );
}

export default Message1;