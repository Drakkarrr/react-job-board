import { useState, useEffect } from 'react';
import Job from './Job';

const Joblisting = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch('http://localhost:8080/jobs/');
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log(`Error fetching data: ${error}`);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <section className='px-4 py-10 bg-blue-50'>
      <div className='m-auto container-xl lg:container'>
        <h2 className='mb-6 text-3xl font-bold text-center text-indigo-500'>
          {isHome ? 'Featured Jobs' : 'Browse All Jobs'}
        </h2>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
          {loading ? (
            <h1>Fetching data...</h1>
          ) : (
            <>
              {jobs.map((job) => (
                <Job key={job.id} job={job} />
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Joblisting;
