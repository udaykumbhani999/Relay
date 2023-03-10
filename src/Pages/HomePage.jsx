import React from 'react';

import Header from '../Component/Header/Header';
import Hero from '../Component/Hero/Hero';
import Why_sell from '../Component/Why_sell/Why_sell';
import What_look from '../Component/What_look/What_look';
import Time from '../Component/Time/Time';
import Timeline from '../Component/Timeline/Timeline';
import Founder from '../Component/Founder/Founder';
import Expertes from '../Component/Expertes/Expertes';
import Contactus from '../Component/Contactus/Contactus';
import Footer from '../Component/Footer/Footer';





const HomePage = () => {
  return (
    <div className='homepage'>
        <Header />
        <Hero />
        <Why_sell />
        <What_look />
        <Time />
        <Timeline />
        <Founder />
        <Expertes />
        <Contactus />
        <Footer />
    </div>
  )
}

export default HomePage