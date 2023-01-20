import React from 'react';
import "../Why_sell/Why_sell.scss";


const Why_sell = () => {
  return (
    <div className='whysell'>
        <div className='row'>
            <div className='col col-2'>
              <div className='shapebox'></div>
            </div>
            <div className='col col-10'>
              <div className='sell_content row'>
                <div className='col col-2 sellbox'></div>
                <div className='col col-10 sellbox2'>
                  <div className='sellbox_content'>
                    <h2 className='why_sell-title'>Why sell to Relay?</h2>
                    <div className='feature_boxs'>
                      <div className='feature'>
                        <h4 className='f_p-text'>Flexible transaction terms</h4>
                        <h6 className='f_para'>Whether you want to stay or you're ready to move on, you choose what's right for your company and team.</h6>
                      </div>
                      
                      <div className='feature'>
                        <h4 className='f_p-text'>Simple, fast exit</h4>
                        <h6 className='f_para'>We offer a seamless, speedy exit and can close a deal in as little as one month.</h6>
                      </div>
                      
                      <div className='feature'>
                        <h4 className='f_p-text'>Made for (and by) ecommerce founders</h4>
                        <h6 className='f_para'>From building companies of our own to helping others scale theirs, we know how to help you navigate a profitable exit.</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Why_sell