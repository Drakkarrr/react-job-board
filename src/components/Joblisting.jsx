import { useState, useEffect } from 'react';
import Job from './Job';
import Loader from './Loader';

const Joblisting = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs';
      try {
        setLoading(true);
        const res = await fetch(apiUrl);
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
        {loading ? (
          <Loader loading={loading} />
        ) : (
          <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
            {jobs.map((job) => (
              <Job key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Joblisting;
