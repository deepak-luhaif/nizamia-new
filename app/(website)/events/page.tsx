'use client';
import EventCard from '@/components/shared/EventsCard';
import Link from 'next/link';

const Event = ({ img, title, slug, description }: any) => {
  const eventsData = [
    {
      img: '/assets/images/portrait-female-pediatrician-work.jpg',

      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',

      slug: 'event-1',
    },
    {
      img: '/assets/images/portrait-female-pediatrician-work.jpg',

      title: 'Helping rural communities with healthcare support.',

      slug: 'event-2',
    },
  ];
  return (
    <>
      <div className="breadcrumb container-box flex flex-col justify-center mt-[135px]">
        <h2 className="text-blueColor font-semibold text-3xl">Events</h2>
        <p className="text-darkGray">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
          esse?
        </p>
      </div>
      <div className="container-box grid lg:grid-cols-3 grid-cols-1 gap-10 ">
        {eventsData.map((event, index) => (
          <Link key={index} href={`/events/${event.slug}`}>
            <EventCard key={index} img={event.img} title={event.title} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Event;
