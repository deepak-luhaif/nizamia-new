import { Calendar, IndianRupee, User } from 'lucide-react';
import Image from 'next/image';

export default function CauseCard({ img, tag, title, goal, raised }: any) {
  return (
    <div className='max-w-sm rounded-2xl shadow-lg bg-white overflow-hidden transform transition duration-300 hover:scale-105'>
      {/* Image Section */}

      <Image
        src={img}
        alt='cause'
        sizes='100vw'
        height={0}
        width={0}
        className='w-full h-56 object-cover'
      />

      {/* Content Section */}
      <div className='p-5'>
        {/* Category */}
        <p className='text-orangeColor font-caveat'>{tag}</p>

        {/* Title */}
        <h3 className='text-xl font-semibold text-gray-900 mt-1'>{title}</h3>

        <div className='flex flex-row items-center justify-between gap-5 mt-3'>
          <div className='flex flex-col'>
            <div className='flex flex-row gap-1 items-center'>
              <span className='text-xs text-darkGray'>Goal</span>
            </div>
            <span className='text-base text-lightOrange font-semibold'>
              ₹{goal}
            </span>
          </div>
          <div className='flex flex-col'>
            <div className='flex flex-row gap-1 items-center'>
              <span className='text-xs text-darkGray'>Raised</span>
            </div>
            <span className='text-base text-greenColor font-semibold'>
              ₹{raised}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
