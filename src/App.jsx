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

      <section className='max-w-lg px-6 m-auto my-10'>
        <a
          href='jobs.html'
          className='block px-6 py-4 text-center text-white bg-black rounded-xl hover:bg-gray-700'>
          View All Jobs
        </a>
      </section>
    </>
  );
};

export default App;
