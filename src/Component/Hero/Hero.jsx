import React from 'react';

import "../Hero/Hero.scss";
import Skybutton from '../Skybutton/Skybutton';

import aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    aos.init({ duration:1000,delay:50,});
  }, []);
  return (
    <div className='hero'>
      <div className='Hero_wrapper'>
        <div className='secondery_bg'></div>
        <div className='dark_bg'></div>
        <div className='shape_first' data-aos="fade-right" data-aos-mirror="true" ></div>
        <div className='shape_second'  data-aos="fade-right" data-aos-mirror="true"></div>
        <div className='shape_third'></div>
        <div className='container'>
          <div className='hero-content'>
            <h1>Fast track your dream exit.</h1>
            <h3 className='hero_h3'>Fast track your dream exit.</h3>
            <h6 className="hero_h6">Whether you want to move on or build with us, we provide a frictionless and flexible acquisition exit—allowing you to pass the baton while preserving your legacy.</h6>
            <div className='hero_btn'>
            <Skybutton
              skybtn_name='Let’s Chat'
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero