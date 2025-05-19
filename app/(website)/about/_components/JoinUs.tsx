import Donate from '@/components/shared/Donate';
import React from 'react';

const JoinUs = () => {
  return (
    <div className='container-box'>
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-10 '>
        <div className='lg:w-2/3 w-full'>
          <div className=''>
            <h2 className='lg:text-4xl tetx-2xl text-center lg:text-start font-semibold text-blueColor '>
              Join Us
            </h2>
          </div>
          <p className='text-lg text-darkGray leading-[30px] mt-5'>
            At Nizamia Charitable Trust, we believe that true devotion lies in
            service to humanity. We invite you to join hands with us in our
            mission to create a{' '}
            <strong className='font-semibold'>
              brighter and more compassionate world—where every individual is
              empowered, cared for, and uplifted. Together, we can turn this
              vision into a reality.
            </strong>
          </p>
        </div>
        <div>
          <Donate />
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
