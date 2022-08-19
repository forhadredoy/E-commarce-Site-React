
import React, { useState } from 'react';
import Button from './Button.module.css';

function Button11() {

    const [gmail, setGmail] = useState("");

    const handleChange1= (e)=>{
        setGmail(e.target.value);
    }
    return (
        <div className={Button.main4}>
            <div className={Button.main5}>
                <form>
                    <input value={gmail} type='gmail' placeholder='Enter Your Email' onChange={handleChange1} />
                </form>
                <button type='submit'> Submit</button>

            </div>

            <div className={Button.button11}>

                <div className={Button.container12}>
                    <h3> Customer Services</h3>
                    <p>Help Center</p>
                    <p> Report Abuse</p>
                    <p> Submit a Dispute</p>
                    <p>Submit a Dispute</p>
                    <p> Get Paid for Your Feedback</p>
                </div>

                <div className={Button.container12}>
                    <h3> About Us</h3>
                    <p>About Unic.com</p>
                    <p>About Us</p>
                    <p>About Alibaba Group</p>
                    <p>Submit a Dispute</p>
                    <p> Unic.com Blog</p>
                </div>

                <div className={Button.container12}>
                    <h3> Source On Unic.com</h3>
                    <p>Resources</p>
                    <p>All Categories</p>
                    <p>Ready to Ship</p>
                    <p>Request for Quotation</p>
                    <p>Buyer Partners</p>
                    <p>Alibaba.com Select</p>
                </div>

                <div className={Button.container12}>
                    <h3> Sell on Unic.com</h3>
                    <p>Supplier Memberships</p>
                    <p>Learning Center</p>
                    <p>Partner Program</p>
                </div>

                <div className={Button.container12}>
                    <h3> Trade Services</h3>
                    <p>Trade Assurance</p>
                    <p>Business Identity</p>
                    <p>Logistics Service</p>
                    <p>Production Monitoring & Inspection Services</p>
                    <p>Letter of Credit</p>
                </div>



            </div>




            
        </div>
    );
}

export default Button11;