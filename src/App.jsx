import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HomeCards from '@/components/HomeCards';
import Joblisting from './components/Joblisting';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero
        heading='React jobs globally'
        subHeading='Find an all in one place for react jobs api worldwide'
      />
      <HomeCards />
      <Joblisting />
    </>
  );
};

export default App;
