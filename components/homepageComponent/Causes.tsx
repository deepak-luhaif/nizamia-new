import { Heart } from 'lucide-react';
import React from 'react';
import CauseCard from '../shared/CauseCard';
import Link from 'next/link';

const Causes = ({ tag, title, img, goal, raised }: any) => {
  const causesData = [
    {
      img: '/assets/images/portrait-female-pediatrician-work.jpg',
      tag: 'He>alth',
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
      goal: 120000,
      slug: 'cause-1',
      raised: '90000',
    },
    {
      img: '/assets/images/portrait-female-pediatrician-work.jpg',
      tag: 'Medical Aid',
      title: 'Helping rural communities with healthcare support.',
      goal: 90000,
      slug: 'cause-2',
      raised: '30000',
    },
  ];
  return (
    <div className='container-box '>
      <div>
        <div className='flex flex-row items-center text-center justify-center'>
          <Heart className='text-orangeColor h-4 w-4' />
          <span className='font-caveat text-lg text-orangeColor ml-1'>
            Causes
          </span>
        </div>
        <div>
          <h2 className='text-5xl font-semibold text-blueColor text-center '>
            Latest Causes
          </h2>
        </div>
      </div>
      <div className='grid lg:grid-cols-4 grid-cols-1 gap-8 mt-10'>
        {causesData.map((cause, index) => (
          <Link key={index} href={`/causes/${cause.slug}`}>
            <CauseCard
              key={index}
              img={cause.img}
              tag={cause.tag}
              title={cause.title}
              goal={cause.goal}
              raised={cause.raised}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Causes;
