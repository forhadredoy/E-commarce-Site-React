import { faFacebook, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Modal from 'react-modal';
import Sign from './Sign.module.css';

function Sign1() {
    const [gmail,setGmail] =useState("");
    const [pass,setPass] =useState("")
    const [modalIsopen,setModalISopen] =useState(false)


    const handleSubmit=(event)=>{
        event.preventDefault();
    console.log(pass,gmail)
    }

    const handleClick=()=>{

        setModalISopen(true);


    }
    return (

              <div className={Sign.intro}>


<div className={Sign.container}>
    <h2>Unic.com</h2>
 <button>Start Shopping</button>
 <p>Search Pens</p>
 <p>challanges</p>
 <p>Spark</p>
 <p>Codepen</p>


</div>

<div className={Sign.container1}>
    <h2>Unic.com </h2>
    <h1>Log In</h1>
    
    <form onSubmit={handleSubmit}>
        <input value={gmail} name="" type='gmail' className={Sign.input1} placeholder='Enter your Email' onChange={(e)=>setGmail(e.target.value)}/>
        
        <input value={pass} name="" type='password' className={Sign.input1} placeholder='Enter New Password' onChange ={(e)=>setPass(e.target.value)}/>
        <input type='submit' value="Log In" disabled={!gmail || !pass } className={Sign.input2} onClick ={handleClick} />
       
    </form>

</div>

<Modal isOpen={modalIsopen} onRequestClose={()=>(setModalISopen(false))} className={Sign.modal}>
    <div  className={Sign.modal1}>
    <h1>Thank you </h1>
    <div className={Sign.modal2}>
       
       
        <button onClick={()=> setModalISopen(false)} className={Sign.btn8}>Close</button>
        <button className={Sign.btn7}>Yes I am In</button>
        
    </div>
    </div>

</Modal>


<div className={Sign.container2}>

    <button className={Sign.btn1}><FontAwesomeIcon icon={faGoogle} className={Sign.font}></FontAwesomeIcon>Log In With Google </button>
    <button className={Sign.btn2}> <FontAwesomeIcon icon ={faFacebook} className={Sign.font}></FontAwesomeIcon>Log In With Facebook</button>
    <button className={Sign.btn3}> <FontAwesomeIcon icon={faTwitter} className={Sign.font}></FontAwesomeIcon>Log IN With Twitter</button>

</div>

</div>

        
       
       
    );
}

export default Sign1;