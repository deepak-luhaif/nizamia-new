'use client';

import { Globe, Users, Undo2 } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export const ApealCard = ({ img, tag, title, goal, raised }: any) => {
  const progressPercentage = (raised / goal) * 100;

  return (
    <div className='bg-white shadow-lg transform transition duration-300 hover:scale-105'>
      <div className='relative w-full'>
        {/* Image with Border */}
        <div className='relative w-full h-48'>
          <Image
            src={img}
            alt='card-img'
            height={0}
            sizes='100vw'
            width={0}
            className='h-full w-full object-cover'
          />
          {/* Progress Border */}
          <div className='absolute -bottom-1 left-0 w-full h-1 '>
            <div
              className='h-full bg-lightOrange relative'
              style={{ width: `${progressPercentage}%` }}
            >
              {/* Percentage Card at the end of border */}
              <div className='absolute right-0 transform translate-x-1/2 bg-lightOrange text-white p-1 text-xs'>
                {progressPercentage.toFixed(0)}%
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='p-5 flex flex-col '>
        <span className='font-caveat text-lg text-greenColor'>{tag}</span>
        <p className='text-xl text-blueColor'>{title}</p>
        <div className='flex flex-row items-center gap-5 mt-3'>
          <div className='flex flex-col'>
            <div className='flex flex-row gap-1 items-center'>
              <Globe className='text-darkGray w-3 h-3' />
              <span className='text-xs text-darkGray'>Goal</span>
            </div>
            <span className='text-base text-lightOrange font-semibold'>
              ₹{goal}
            </span>
          </div>
          <div className='flex flex-col'>
            <div className='flex flex-row gap-1 items-center'>
              <Users className='text-darkGray w-3 h-3' />
              <span className='text-xs text-darkGray'>Raised</span>
            </div>
            <span className='text-base text-lightOrange font-semibold'>
              ₹{raised}
            </span>
          </div>
          <div className='flex flex-col'>
            <div className='flex flex-row gap-1 items-center'>
              <Undo2 className='text-darkGray w-3 h-3' />
              <span className='text-xs text-darkGray'>To Go</span>
            </div>
            <span className='text-base text-lightOrange font-semibold'>
              ₹{goal - raised}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
