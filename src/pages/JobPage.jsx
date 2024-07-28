import { useState, useEffect } from 'react';
import { useParams, useLoaderData } from 'react-router-dom';
import Loader from '@/components/Loader';

const JobPage = () => {
  // const [job, setJob] = useState([]);
  // const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const job = useLoaderData();

  // useEffect(() => {
  //   const fetchJob = async () => {
  //     try {
  //       const res = await fetch(`/api/jobs/${id}`);
  //       const data = await res.json();
  //       setJob(data);
  //     } catch (error) {
  //       console.log(`Error fetching data: ${error}`);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchJob();
  // }, []);

  return (
    <h1>
      {job.title} id: {id}
    </h1>
  );
};

const jobLoader = async (id) => {
  const res = await fetch(`/api/jobs/${id}`);
  const data = await res.json();
  return data;
};

export { JobPage as default, jobLoader };
