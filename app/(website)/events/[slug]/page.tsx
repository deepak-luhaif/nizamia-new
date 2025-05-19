'use client';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react';

const Event = () => {
  const eventsData = [
    {
      img: '/assets/images/portrait-female-pediatrician-work.jpg',

      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',

      slug: 'event-1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa commodi tenetur optio dicta totam quae vero modi maxime. Totam assumenda, ea sequi provident nesciunt perferendis! Reprehenderit ad fugiat at perferendis maiores dicta officiis, alias voluptates provident delectus quod error nostrum voluptatum impedit, natus quos tempora! Natus, nemo quidem. Provident non ipsum in aliquam nihil ducimus delectus obcaecati amet fuga dolores animi saepe dignissimos aperiam corrupti ipsa iusto necessitatibus molestias magni aut aliquid distinctio, corporis nisi? Laborum incidunt quibusdam, eius beatae a reiciendis, ducimus ut similique neque voluptas alias, numquam nobis minima porro ad voluptatibus dolor voluptatum? Et, pariatur nesciunt quisquam ab dolorem ullam voluptates aut mollitia velit reprehenderit atque rerum hic tenetur aliquam voluptate quam adipisci nostrum placeat nobis officia dolore eius ex debitis. Illum eveniet illo, perspiciatis expedita laudantium natus placeat blanditiis nam dolorem deserunt earum nulla nesciunt incidunt! Facilis corrupti ea adipisci. Excepturi quam perferendis reiciendis, praesentium delectus, minima dolorem expedita esse omnis accusantium sint ipsa nobis dolores? Impedit assumenda natus doloremque error corrupti sequi hic fugit aspernatur adipisci architecto. Maiores blanditiis velit repellendus voluptatum, enim quibusdam accusamus impedit delectus officia perspiciatis autem. Obcaecati velit fugiat nam? Architecto, consequuntur! Libero ea alias, suscipit debitis reprehenderit in vero asperiores quas temporibus magni? Sit aperiam, dolore fugiat tempore cum doloribus illo libero reprehenderit laborum voluptatum, incidunt facilis atque consequatur excepturi adipisci sunt ipsum perspiciatis amet. Maiores doloremque maxime, molestiae vel iure, magnam reprehenderit earum minima atque, a ipsam! Aliquid illum ratione minus numquam enim debitis eaque excepturi facilis doloribus pariatur? Pariatur repellat laborum quo itaque incidunt iste dignissimos similique libero maxime, cupiditate consequuntur minus a veritatis culpa deleniti eos, aspernatur tempore aliquid doloremque cum! Facere cupiditate perferendis voluptate veritatis laboriosam, voluptatem exercitationem ipsum eius deserunt ad quam nostrum odio labore odit, officia, facilis quidem excepturi vel alias natus enim molestiae.',
    },
    {
      img: '/assets/images/portrait-female-pediatrician-work.jpg',

      title: 'Helping rural communities with healthcare support.',

      slug: 'event-2',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa commodi tenetur optio dicta totam quae vero modi maxime. Totam assumenda, ea sequi provident nesciunt perferendis! Reprehenderit ad fugiat at perferendis maiores dicta officiis, alias voluptates provident delectus quod error nostrum voluptatum impedit, natus quos tempora! Natus, nemo quidem. Provident non ipsum in aliquam nihil ducimus delectus obcaecati amet fuga dolores animi saepe dignissimos aperiam corrupti ipsa iusto necessitatibus molestias magni aut aliquid distinctio, corporis nisi? Laborum incidunt quibusdam, eius beatae a reiciendis, ducimus ut similique neque voluptas alias, numquam nobis minima porro ad voluptatibus dolor voluptatum? Et, pariatur nesciunt quisquam ab dolorem ullam voluptates aut mollitia velit reprehenderit atque rerum hic tenetur aliquam voluptate quam adipisci nostrum placeat nobis officia dolore eius ex debitis. Illum eveniet illo, perspiciatis expedita laudantium natus placeat blanditiis nam dolorem deserunt earum nulla nesciunt incidunt! Facilis corrupti ea adipisci. Excepturi quam perferendis reiciendis, praesentium delectus, minima dolorem expedita esse omnis accusantium sint ipsa nobis dolores? Impedit assumenda natus doloremque error corrupti sequi hic fugit aspernatur adipisci architecto. Maiores blanditiis velit repellendus voluptatum, enim quibusdam accusamus impedit delectus officia perspiciatis autem. Obcaecati velit fugiat nam? Architecto, consequuntur! Libero ea alias, suscipit debitis reprehenderit in vero asperiores quas temporibus magni? Sit aperiam, dolore fugiat tempore cum doloribus illo libero reprehenderit laborum voluptatum, incidunt facilis atque consequatur excepturi adipisci sunt ipsum perspiciatis amet. Maiores doloremque maxime, molestiae vel iure, magnam reprehenderit earum minima atque, a ipsam! Aliquid illum ratione minus numquam enim debitis eaque excepturi facilis doloribus pariatur? Pariatur repellat laborum quo itaque incidunt iste dignissimos similique libero maxime, cupiditate consequuntur minus a veritatis culpa deleniti eos, aspernatur tempore aliquid doloremque cum! Facere cupiditate perferendis voluptate veritatis laboriosam, voluptatem exercitationem ipsum eius deserunt ad quam nostrum odio labore odit, officia, facilis quidem excepturi vel alias natus enim molestiae.',
    },
  ];
  const { slug } = useParams();
  if (!slug) {
    return <div>Loading...</div>;
  }

  // Find the cause based on the slug
  const event = eventsData.find((event) => event.slug === slug);

  if (!event) {
    return <div>event not found</div>;
  }

  return (
    <>
      <div className=' mt-20'>
        <div className='relative'>
          <Image
            src={event.img}
            alt={event.title}
            height={0}
            width={0}
            sizes='100vw'
            className='w-full h-[500px] object-cover '
          />
          <div className='absolute inset-0 bg-black opacity-25'></div>

          {/* <div className='absolute top-1/2 left-[100px] transform '>
            <p className='text-white text-lg'> {event.title}</p>
          </div> */}
        </div>
      </div>
      <div className='container-box '>
        <h1 className='text-3xl capitalize text-center'>{event.title}</h1>
        <p className='text-darkGray leading-[28px] text-lg mt-5'>
          {event.description}
        </p>{' '}
      </div>
    </>
  );
};

export default Event;
