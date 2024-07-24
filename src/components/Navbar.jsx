import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const navlinks = [
    { title: 'Home', url: '/' },
    { title: 'Jobs', url: '/jobs' },
    { title: 'Add Job', url: '/add-job' },
  ];

  const activeLink = ({ isActive }) =>
    isActive
      ? 'px-3 py-2 text-[18px] font-medium text-white rounded-md bg-black'
      : 'px-3 py-2 text-[18px] font-medium text-white rounded-md hover:bg-indigo-500';

  return (
    <nav className='bg-indigo-700 border-b border-indigo-500'>
      <div className='px-2 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-20'>
          <div className='flex items-center justify-center flex-1 md:items-stretch md:justify-start'>
            <NavLink className='flex items-center flex-shrink-0 mr-4' to='/'>
              {/* <img
                  className='w-auto h-10'
                  src='images/logo.png'
                  alt='React Jobs'
                /> */}
              <h1 className='hidden ml-2 text-2xl font-bold text-white md:block'>
                ReactJobBoard
              </h1>
            </NavLink>
            <div className='md:ml-auto'>
              <div className='flex space-x-2'>
                {navlinks.map((link) => (
                  <NavLink
                    key={link.title}
                    to={link.url}
                    className={activeLink}>
                    {link.title}
                  </NavLink>
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
