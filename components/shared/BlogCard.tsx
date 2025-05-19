import { URL } from '@/constants';
import Image from 'next/image';
import React from 'react';

const BlogCard = () => {
  return (
    <div className=' border border-gray-400 border-opacity-60 rounded-lg overflow-hidden  h-full cursor-pointer hover:shadow-2xl'>
      <Image
        className='lg:h-52 md:h-36 w-full object-cover object-center'
        src={'/assets/images/who.jpg'}
        alt='blog-img'
        width={500}
        height={500}
      />

      <div className='px-4 py-2 '>
        <p className='tracking-tighter text-xs title-font font-semibold text-darkBlue mb-1'>
          31/01/25
        </p>
        <h1 className='title-font text-lg font-bold text-black mb-2'>
          Lorem ipsum dolor sit.
        </h1>

        <div className='flex items-center flex-wrap '>
          <a
            className=' font-medium px-7 py-2 rounded-full text-darkBlue border border-darkBlue hover:bg-darkBlue hover:text-white'
            href={'/'}
          >
            Read Article
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

export const VerticalBlogCard = () => {
  return (
    <div className='  group relative cursor-pointer  flex-grow h-full '>
      <div className=' border border-gray-400 border-opacity-60 rounded-lg overflow-hidden h-full group-hover:shadow-2xl'>
        <div className='p-2'>
          <h2 className='title-font text-lg font-bold text-gray-900 mb-2'>
            Lorem ipsum dolor sit amet consectetur.
          </h2>

          <p className=' mb-2 leading-relaxed text-clip line-clamp-2  text-gray-400 text-xs'></p>

          <div className=' items-center flex-wrap hidden   group-hover:flex   tranisition duration-300 ease-in-out'>
            <a
              className=' font-medium px-7 py-2 rounded-full text-pink-500 border border-pink-500 hover:bg-pink-500 hover:text-white'
              href={'/'}
            >
              Read Article
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
