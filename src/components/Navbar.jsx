import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navlinks = [
    { title: 'Home', url: '/' },
    { title: 'Jobs', url: '/jobs' },
    { title: 'Add Job', url: '/add-job' },
  ];

  const activeLink = navlinks.url === window.location.pathname;

  return (
    <nav className='bg-indigo-700 border-b border-indigo-500'>
      <div className='px-2 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-20'>
          <div className='flex items-center justify-center flex-1 md:items-stretch md:justify-start'>
            <Link className='flex items-center flex-shrink-0 mr-4' to='/'>
              {/* <img
                  className='w-auto h-10'
                  src='images/logo.png'
                  alt='React Jobs'
                /> */}
              <h1 className='hidden ml-2 text-2xl font-bold text-white md:block'>
                ReactJobBoard
              </h1>
            </Link>
            <div className='md:ml-auto'>
              <div className='flex space-x-2'>
                {navlinks.map((link) => (
                  <Link
                    key={link.title}
                    to={link.url}
                    className='px-3 py-2 text-[18px] font-medium text-white rounded-md hover:bg-indigo-500'>
                    {link.title}
                  </Link>
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
