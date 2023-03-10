import React from 'react';
import "../Contactus/Contactus.scss";
import Skybutton from '../Skybutton/Skybutton';


const Contactus = () => {
  return (
    <div className='contactpage'>
        <div className='contact_bg'>
            <div className='container'>    
            <div className='contact_wrapper d-flex align-items-center justify-content-center flex-column'>
                <h2 className='contact_headingtwo text-center'>Subscribe to The Inside Line</h2>
                <h6 className='contact_headingsix text-center'>Receive curated thought leadership, best practices and advice from ecommerce founders and other industry experts.</h6>
                <div className='forms'>
                    <input type="email" id="email" name="email" placeholder='Your email address...' />
                    <div className='inputbutton'>
                        <Skybutton
                            skybtn_name='Sign Me Up'
                        />
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Contactus