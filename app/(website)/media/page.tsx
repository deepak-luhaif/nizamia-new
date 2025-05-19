'use client';
import BreadCrumb from '@/components/shared/BreadCrumb';
import EventCard from '@/components/shared/EventsCard';
import Link from 'next/link';

const Media = ({ img, title, slug }: any) => {
  const mediaData = [
    {
      img: '/assets/images/portrait-female-pediatrician-work.jpg',

      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',

      slug: 'media-1',
    },
    {
      img: '/assets/images/portrait-female-pediatrician-work.jpg',

      title: 'Helping rural communities with healthcare support.',

      slug: 'media-2',
    },
  ];
  return (
    <>
      <BreadCrumb
        name="Knowledge Hub"
        tagline="We believe genuine devotion is found in serving humanity with love."
      />
      <div className="container-box grid lg:grid-cols-3 grid-cols-1 gap-10  ">
        {mediaData.map((media, index) => (
          <Link key={index} href={`/media/${media.slug}`}>
            <EventCard key={index} img={media.img} title={media.title} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Media;
