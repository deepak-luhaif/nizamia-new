'use client';
import MediaCard from '@/components/shared/MediaCard';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react';

const Media = () => {
  const mediaData = [
    {
      img: '/assets/images/portrait-female-pediatrician-work.jpg',

      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',

      slug: 'media-1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa commodi tenetur optio dicta totam quae vero modi maxime. Totam assumenda, ea sequi provident nesciunt perferendis! Reprehenderit ad fugiat at perferendis maiores dicta officiis, alias voluptates provident delectus quod error nostrum voluptatum impedit, natus quos tempora! Natus, nemo quidem. Provident non ipsum in aliquam nihil ducimus delectus obcaecati amet fuga dolores animi saepe dignissimos aperiam corrupti ipsa iusto necessitatibus molestias magni aut aliquid distinctio, corporis nisi? Laborum incidunt quibusdam, eius beatae a reiciendis, ducimus ut similique neque voluptas alias, numquam nobis minima porro ad voluptatibus dolor voluptatum? Et, pariatur nesciunt quisquam ab dolorem ullam voluptates aut mollitia velit reprehenderit atque rerum hic tenetur aliquam voluptate quam adipisci nostrum placeat nobis officia dolore eius ex debitis. Illum eveniet illo, perspiciatis expedita laudantium natus placeat blanditiis nam dolorem deserunt earum nulla nesciunt incidunt! Facilis corrupti ea adipisci. Excepturi quam perferendis reiciendis, praesentium delectus, minima dolorem expedita esse omnis accusantium sint ipsa nobis dolores? Impedit assumenda natus doloremque error corrupti sequi hic fugit aspernatur adipisci architecto. Maiores blanditiis velit repellendus voluptatum, enim quibusdam accusamus impedit delectus officia perspiciatis autem. Obcaecati velit fugiat nam? Architecto, consequuntur! Libero ea alias, suscipit debitis reprehenderit in vero asperiores quas temporibus magni? Sit aperiam, dolore fugiat tempore cum doloribus illo libero reprehenderit laborum voluptatum, incidunt facilis atque consequatur excepturi adipisci sunt ipsum perspiciatis amet. Maiores doloremque maxime, molestiae vel iure, magnam reprehenderit earum minima atque, a ipsam! Aliquid illum ratione minus numquam enim debitis eaque excepturi facilis doloribus pariatur? Pariatur repellat laborum quo itaque incidunt iste dignissimos similique libero maxime, cupiditate consequuntur minus a veritatis culpa deleniti eos, aspernatur tempore aliquid doloremque cum! Facere cupiditate perferendis voluptate veritatis laboriosam, voluptatem exercitationem ipsum eius deserunt ad quam nostrum odio labore odit, officia, facilis quidem excepturi vel alias natus enim molestiae.',
    },
    {
      img: '/assets/images/portrait-female-pediatrician-work.jpg',

      title: 'Helping rural communities with healthcare support.',

      slug: 'media-2',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa commodi tenetur optio dicta totam quae vero modi maxime. Totam assumenda, ea sequi provident nesciunt perferendis! Reprehenderit ad fugiat at perferendis maiores dicta officiis, alias voluptates provident delectus quod error nostrum voluptatum impedit, natus quos tempora! Natus, nemo quidem. Provident non ipsum in aliquam nihil ducimus delectus obcaecati amet fuga dolores animi saepe dignissimos aperiam corrupti ipsa iusto necessitatibus molestias magni aut aliquid distinctio, corporis nisi? Laborum incidunt quibusdam, eius beatae a reiciendis, ducimus ut similique neque voluptas alias, numquam nobis minima porro ad voluptatibus dolor voluptatum? Et, pariatur nesciunt quisquam ab dolorem ullam voluptates aut mollitia velit reprehenderit atque rerum hic tenetur aliquam voluptate quam adipisci nostrum placeat nobis officia dolore eius ex debitis. Illum eveniet illo, perspiciatis expedita laudantium natus placeat blanditiis nam dolorem deserunt earum nulla nesciunt incidunt! Facilis corrupti ea adipisci. Excepturi quam perferendis reiciendis, praesentium delectus, minima dolorem expedita esse omnis accusantium sint ipsa nobis dolores? Impedit assumenda natus doloremque error corrupti sequi hic fugit aspernatur adipisci architecto. Maiores blanditiis velit repellendus voluptatum, enim quibusdam accusamus impedit delectus officia perspiciatis autem. Obcaecati velit fugiat nam? Architecto, consequuntur! Libero ea alias, suscipit debitis reprehenderit in vero asperiores quas temporibus magni? Sit aperiam, dolore fugiat tempore cum doloribus illo libero reprehenderit laborum voluptatum, incidunt facilis atque consequatur excepturi adipisci sunt ipsum perspiciatis amet. Maiores doloremque maxime, molestiae vel iure, magnam reprehenderit earum minima atque, a ipsam! Aliquid illum ratione minus numquam enim debitis eaque excepturi facilis doloribus pariatur? Pariatur repellat laborum quo itaque incidunt iste dignissimos similique libero maxime, cupiditate consequuntur minus a veritatis culpa deleniti eos, aspernatur tempore aliquid doloremque cum! Facere cupiditate perferendis voluptate veritatis laboriosam, voluptatem exercitationem ipsum eius deserunt ad quam nostrum odio labore odit, officia, facilis quidem excepturi vel alias natus enim molestiae.',
    },
  ];
  const { slug } = useParams();
  if (!slug) {
    return <div>Loading...</div>;
  }

  // Find the cause based on the slug
  const media = mediaData.find((media) => media.slug === slug);

  if (!media) {
    return <div>event not found</div>;
  }

  return (
    <>
      <div className=' lg:mt-20 mt-10'>
        <div className='relative'>
          <Image
            src={media.img}
            alt={media.title}
            height={0}
            width={0}
            sizes='100vw'
            className='w-full h-[500px] object-cover '
          />
          <div className='absolute inset-0 bg-black opacity-25'></div>
        </div>
      </div>
      <div className='container-box '>
        <h1 className='lg:text-3xl text-2xl capitalize text-center text-blueColor'>
          {media.title}
        </h1>
        <p className='text-darkGray leading-[28px] text-lg mt-5'>
          {media.description}
        </p>{' '}
      </div>
      <div className='container-box'>
        <h4 className='text-blueColor text-3xl font-semibold'>Related Media</h4>
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 mt-10'>
          {/* Display the latest appeals */}
          {mediaData
            .filter((item) => item.slug !== slug) // Exclude the current appeal
            .slice(0, 3) // Limit to the latest 3 appeals
            .map((media) => (
              <MediaCard
                key={media?.slug}
                img={media?.img}
                title={media?.title}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Media;
