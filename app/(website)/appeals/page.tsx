import { ApealCard } from '@/components/shared/ApealCard';
import Link from 'next/link';

const Appeals = ({ img, tag, title, goal, raised }: any) => {
  const appealsData = [
    {
      img: '/assets/images/portrait-female-pediatrician-work.jpg',
      tag: 'He>alth',
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
      goal: 120000,
      raised: 100000,
      slug: 'apeal-1',
    },
    {
      img: '/assets/images/portrait-female-pediatrician-work.jpg',
      tag: 'Medical Aid',
      title: 'Helping rural communities with healthcare support.',
      goal: 90000,
      raised: 45000,
      slug: 'apeal-2',
    },
  ];
  return (
    <>
      <div className="breadcrumb container-box flex flex-col justify-center mt-[135px]">
        <h2 className="text-blueColor font-semibold text-3xl">Appeals</h2>
        <p className="text-darkGray">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
          esse?
        </p>
      </div>
      <div className="container-box ">
        <div className="flex flex-col gap-5 justify-center items-center text-center">
          <h1 className="font-bold text-5xl text-blueColor">Appeals</h1>
          <p className="lg:px-20 px-0 text-lg text-darkGray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat non
            reprehenderit amet repudiandae cumque odit magnam recusandae.
            Deleniti, magni. Nobis! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Placeat
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-10 grid-cols-1 mt-20">
          {appealsData.map((appeal, index) => (
            <Link key={index} href={`/appeals/${appeal.slug}`}>
              <ApealCard
                key={index}
                img={appeal.img}
                tag={appeal.tag}
                title={appeal.title}
                goal={appeal.goal}
                raised={appeal.raised}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Appeals;
