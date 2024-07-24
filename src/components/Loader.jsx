import React from 'react';
import { MoonLoader } from 'react-spinners';

const Loader = ({ loading }) => {
  return (
    <MoonLoader
      className='block my-[100px] mx-auto'
      color='#1531aa'
      loading={loading}
      size={60}
      speedMultiplier={1}
    />
  );
};

export default Loader;
