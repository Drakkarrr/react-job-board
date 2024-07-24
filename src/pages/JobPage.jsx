import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '@/components/Loader';

const JobPage = () => {
  const [job, setJob] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(`/api/jobs/${id}`);
        const data = await res.json();
        setJob(data);
      } catch (error) {
        console.log(`Error fetching data: ${error}`);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, []);

  return loading ? (
    <Loader loading={loading} />
  ) : (
    <>
      {job.title} id: {id}
    </>
  );
};

export default JobPage;
