import React from 'react';
import jobs from '@/data/jobs.json';
import Job from './Job';

const Joblisting = ({ isHome = false }) => {
  const jobsCut = jobs.slice(0, 3);
  const jobListing = isHome ? jobsCut : jobs;

  return (
    <section className='px-4 py-10 bg-blue-50'>
      <div className='m-auto container-xl lg:container'>
        <h2 className='mb-6 text-3xl font-bold text-center text-indigo-500'>
          {isHome ? 'Featured Jobs' : 'Browse All Jobs'}
        </h2>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
          {jobListing.map((job) => (
            <Job key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Joblisting;
