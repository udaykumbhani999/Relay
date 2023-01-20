import React from 'react';

import "../Hero/Hero.scss";
import Skybutton from '../Skybutton/Skybutton';


const Hero = () => {
  return (
    <div className='hero'>
        <div className='row'>
            <div className='col col-8 shape'>
              <div className='container hero_ct'>
                <div className='hero-content'>
                  <h1>Fast track your dream exit.</h1>
                  <h3 className='hero_h3'>We buy ecommerce SaaS companies just like yours.</h3>
                  <h6 className='hero_h6'>Whether you want to move on or build with us, we provide a frictionless and flexible acquisition exit—allowing you to pass the baton while preserving your legacy.</h6>
                  <Skybutton
                    skybtn_name={'Let’s Chat'}
                  />
                </div>
              </div>
            </div>
            <div className='col col-4'>
              <div className='row'>
                <div className='col col-8'></div>
                <div className='col col-4'></div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Hero