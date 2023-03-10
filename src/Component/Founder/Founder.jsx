import React from 'react';
import "../Founder/Founder.scss";

import { Image } from "../../Assets/Images";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const Founder = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    arrows: true,

    responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          }
        },
      ]
  };
  return (
    <div className='founder'>
      <div className='founder_bg'>
          <div className='secondary_bg'></div>
          <div className='slider_wrapper'>
            <div className='founder_slider'>
              <h2 className='founder_heading text-center'>Meet our founders.</h2>
              <Slider {...settings}>
                <div className='slides'>
                  <div className='slides_card'>
                    <div className='slides_img'>
                      <img src={Image.Founder_first} alt='profile_image' />
                    </div>
                    <div className='founder_content'>
                      <div className='founder_logo'>
                        <p className='logo_name text-center'>Logo</p>
                      </div>
                      <h6 className='founder_heading_six'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.”</h6>
                      <div className='founder_intro'>
                        <h6 className='founder_name'><strong>Anna Johnson,</strong></h6>
                        <h6 className='founder_company'>Founder at Company Name</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='slides'>
                  <div className='slides_card'>
                    <div className='slides_img'>
                      <img src={Image.Founder_second} alt='profile_image' />
                    </div>
                    <div className='founder_content'>
                      <div className='founder_logo'>
                        <p className='logo_name text-center'>Logo</p>
                      </div>
                      <h6 className='founder_heading_six'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.”</h6>
                      <div className='founder_intro'>
                        <h6 className='founder_name'><strong>John smith,</strong></h6>
                        <h6 className='founder_company'>Founder at Company Name</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='slides'>
                  <div className='slides_card'>
                    <div className='slides_img'>
                      <img src={Image.Founder_first} alt='profile_image' />
                    </div>
                    <div className='founder_content'>
                      <div className='founder_logo'>
                        <p className='logo_name text-center'>Logo</p>
                      </div>
                      <h6 className='founder_heading_six'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.”</h6>
                      <div className='founder_intro'>
                        <h6 className='founder_name'><strong>Anna Johnson,</strong></h6>
                        <h6 className='founder_company'>Founder at Company Name</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='slides'>
                  <div className='slides_card'>
                    <div className='slides_img'>
                      <img src={Image.Founder_second} alt='profile_image' />
                    </div>
                    <div className='founder_content'>
                      <div className='founder_logo'>
                        <p className='logo_name text-center'>Logo</p>
                      </div>
                      <h6 className='founder_heading_six'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.”</h6>
                      <div className='founder_intro'>
                        <h6 className='founder_name'><strong>John smith,</strong></h6>
                        <h6 className='founder_company'>Founder at Company Name</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Founder