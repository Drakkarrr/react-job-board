import React from 'react';
import Hero from '@/components/Hero';
import HomeCards from '@/components/HomeCards';
import Joblisting from '@/components/Joblisting';
import ViewAllJobs from '@/components/ViewAllJobs';

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <Joblisting isHome={true} />
      <ViewAllJobs />
    </>
  );
};

export default HomePage;
