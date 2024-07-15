import React from 'react';

const Navbar = () => {
  const navlinks = [
    { title: 'Home', url: '/index.html' },
    { title: 'Jobs', url: '/jobs.html' },
    { title: 'Add Job', url: '/add-job.html' },
  ];

  const activeLink = navlinks.url === window.location.pathname;

  return (
    <nav className='bg-indigo-700 border-b border-indigo-500'>
      <div className='px-2 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-20'>
          <div className='flex items-center justify-center flex-1 md:items-stretch md:justify-start'>
            <a
              className='flex items-center flex-shrink-0 mr-4'
              href='/index.html'>
              {/* <img
                  className='w-auto h-10'
                  src='images/logo.png'
                  alt='React Jobs'
                /> */}
              <h1 className='hidden ml-2 text-2xl font-bold text-white md:block'>
                ReactJobBoard
              </h1>
            </a>
            <div className='md:ml-auto'>
              <div className='flex space-x-2'>
                {navlinks.map((link) => (
                  <a
                    key={link.title}
                    href={link.url}
                    className='px-3 py-2 text-[18px] font-medium text-white rounded-md hover:bg-indigo-500'>
                    {link.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
