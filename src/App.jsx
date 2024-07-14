import React from 'react';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />

      <section className='py-20 mb-4 bg-indigo-700'>
        <div className='flex flex-col items-center px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h1 className='text-4xl font-extrabold text-white sm:text-5xl md:text-6xl'>
              Become a React Dev
            </h1>
            <p className='my-4 text-xl text-white'>
              Find the React job that fits your skills and needs
            </p>
          </div>
        </div>
      </section>

      <section className='py-4'>
        <div className='m-auto container-xl lg:container'>
          <div className='grid grid-cols-1 gap-4 p-4 rounded-lg md:grid-cols-2'>
            <div className='p-6 bg-gray-100 rounded-lg shadow-md'>
              <h2 className='text-2xl font-bold'>For Developers</h2>
              <p className='mt-2 mb-4'>
                Browse our React jobs and start your career today
              </p>
              <a
                href='/jobs.html'
                className='inline-block px-4 py-2 text-white bg-black rounded-lg hover:bg-gray-700'>
                Browse Jobs
              </a>
            </div>
            <div className='p-6 bg-indigo-100 rounded-lg shadow-md'>
              <h2 className='text-2xl font-bold'>For Employers</h2>
              <p className='mt-2 mb-4'>
                List your job to find the perfect developer for the role
              </p>
              <a
                href='/add-job.html'
                className='inline-block px-4 py-2 text-white bg-indigo-500 rounded-lg hover:bg-indigo-600'>
                Add Job
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className='px-4 py-10 bg-blue-50'>
        <div className='m-auto container-xl lg:container'>
          <h2 className='mb-6 text-3xl font-bold text-center text-indigo-500'>
            Browse Jobs
          </h2>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
            <div className='relative bg-white shadow-md rounded-xl'>
              <div className='p-4'>
                <div className='mb-6'>
                  <div className='my-2 text-gray-600'>Full-Time</div>
                  <h3 className='text-xl font-bold'>Senior React Developer</h3>
                </div>

                <div className='mb-5'>
                  We are seeking a talented Front-End Developer to join our team
                  in Boston, MA. The ideal candidate will have strong skills in
                  HTML, CSS, and JavaScript...
                </div>

                <h3 className='mb-2 text-indigo-500'>$70 - $80K / Year</h3>

                <div className='mb-5 border border-gray-100'></div>

                <div className='flex flex-col justify-between mb-4 lg:flex-row'>
                  <div className='mb-3 text-orange-700'>
                    <i className='text-lg fa-solid fa-location-dot'></i>
                    Boston, MA
                  </div>
                  <a
                    href='job.html'
                    className='h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm'>
                    Read More
                  </a>
                </div>
              </div>
            </div>

            <div className='relative bg-white shadow-md rounded-xl'>
              <div className='p-4'>
                <div className='mb-6'>
                  <div className='my-2 text-gray-600'>Remote</div>
                  <h3 className='text-xl font-bold'>
                    Front-End Engineer (React)
                  </h3>
                </div>

                <div className='mb-5'>
                  Join our team as a Front-End Developer in sunny Miami, FL. We
                  are looking for a motivated individual with a passion...
                </div>

                <h3 className='mb-2 text-indigo-500'>$70K - $80K / Year</h3>

                <div className='mb-5 border border-gray-100'></div>

                <div className='flex flex-col justify-between mb-4 lg:flex-row'>
                  <div className='mb-3 text-orange-700'>
                    <i className='text-lg fa-solid fa-location-dot'></i>
                    Miami, FL
                  </div>
                  <a
                    href='job.html'
                    className='h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm'>
                    Read More
                  </a>
                </div>
              </div>
            </div>

            <div className='relative bg-white shadow-md rounded-xl'>
              <div className='p-4'>
                <div className='mb-6'>
                  <div className='my-2 text-gray-600'>Remote</div>
                  <h3 className='text-xl font-bold'>React.js Developer</h3>
                </div>

                <div className='mb-5'>
                  Are you passionate about front-end development? Join our team
                  in vibrant Brooklyn, NY, and work on exciting projects that
                  make a difference...
                </div>

                <h3 className='mb-2 text-indigo-500'>$70K - $80K / Year</h3>

                <div className='mb-5 border border-gray-100'></div>

                <div className='flex flex-col justify-between mb-4 lg:flex-row'>
                  <div className='mb-3 text-orange-700'>
                    <i className='text-lg fa-solid fa-location-dot'></i>
                    Brooklyn, NY
                  </div>
                  <a
                    href='job.html'
                    className='h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm'>
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
