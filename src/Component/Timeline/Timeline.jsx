import React from 'react';
import "../Timeline/Timeline.scss";

import aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



// import 'animate.css';
import Skybutton from '../Skybutton/Skybutton';


const Timeline = () => {
    useEffect(() => {
        aos.init({ duration:1000,delay:50,});
      }, []);
  return (
    <div className='timeline'>
        <div className='tl_bgblack'>
            <div className='tl_main'>
                <div className='tl_container'>
                    <div className='tl_wrapper'>
                        <div className='box'>
                            <div className='tl_content'>
                                <h3 className='heading_three'>Get a response in 1 day...</h3>
                                <h6 className='heading_six'>Within 24 hours we'll set up a call to learn more about your business and goals.</h6>
                            </div>
                        </div>
                        <div className='box boxs' data-aos="fade-right" data-aos-mirror="true">
                            <div className='tl_content'>
                                <h3 className='heading_three'>an offer in 1 week...</h3>
                                <h6 className='heading_six'>We'll provide quick feedback on our level of interest. If we plan to move forward, you'll receive a letter of intent with our price, terms, and timeline.</h6>
                            </div>
                        </div>
                        <div className='box boxs' data-aos="fade-right" data-aos-mirror="true">
                            <div className='tl_content'>
                                <h3 className='heading_three'>and close in 30 days.</h3>
                                <h6 className='heading_six'>After signing, due diligence and legal documentation will be completed within 3 weeks. Then you're off on your next adventure.</h6>
                            </div>
                        </div>
                    </div>
                    <div className='timline_btn text-center'>
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

export default Timeline