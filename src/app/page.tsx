import Banner from '@/components/HomePage/Banner';
import Fitlogs from '@/components/HomePage/Fitlogs';
import React from 'react';

const HomePage = () => {
  return (
    <div className='px-5 md:px-8 lg:px-16 xl:px-24'>
      <Banner></Banner>
      <Fitlogs></Fitlogs>
    </div>
  );
};

export default HomePage;