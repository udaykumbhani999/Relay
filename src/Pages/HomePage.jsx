import React from 'react';

import Header from '../Component/Header/Header';
import Hero from '../Component/Hero/Hero';
import Why_sell from '../Component/Why_sell/Why_sell';



const HomePage = () => {
  return (
    <div className='homepage'>
        <Header />
        <Hero />
        <Why_sell />
    </div>
  )
}

export default HomePage