import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HomeCards from '@/components/HomeCards';
import Joblisting from '@/components/Joblisting';
import ViewAllJobs from '@/components/ViewAllJobs';

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
      <ViewAllJobs />
    </>
  );
};

export default App;
