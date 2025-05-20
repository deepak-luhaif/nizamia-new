import Donor from '@/components/homepageComponent/Donor';
import Image from 'next/image';
import React from 'react';

const Banner = () => {
  return (
    <div className=' lg:mt-24 mt-14'>
      <div className='relative'>
        <Image
          src='/assets/images/what-we-do/charity/Inspiring Charity Gifts Banner 2.png'
          alt='charity'
          height={0}
          width={0}
          sizes='100vw'
          className='w-full h-full object-cover '
        />
        <div className='absolute inset-0 bg-black opacity-25'></div>

        <div className='absolute top-1/2 lg:left-[100px] left-[40px] transform '>
          <h1 className='text-white font-semibold text-3xl'>
            Inspiring Charity Gifts{' '}
          </h1>
          <p className='text-white text-lg leading-[30px] mt-2'>
            Transforming Lives Through Meaningful Giving, A gift that keeps on
            giving.
          </p>
        </div>
      </div>

      <div className=''>
        <Donor />
      </div>
    </div>
  );
};

export default Banner;
