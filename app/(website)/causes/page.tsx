import CauseCard from '@/components/shared/CauseCard';
import Link from 'next/link';

const Causes = ({ img, tag, title, goal, slug, raised }: any) => {
  const causesData = [
    {
      img: '/assets/images/portrait-female-pediatrician-work.jpg',
      tag: 'Health',
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
    <>
      <div className="breadcrumb container-box flex flex-col justify-center mt-[135px]">
        <h2 className="text-blueColor font-semibold text-3xl">Causes</h2>
        <p className="text-darkGray">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
          esse?
        </p>
      </div>
      <div className="container-box ">
        <div className="flex flex-col gap-5 justify-center items-center text-center">
          <h1 className="font-bold text-5xl text-blueColor">Causes</h1>
          <p className="lg:px-20 px-0 text-lg text-darkGray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat non
            reprehenderit amet repudiandae cumque odit magnam recusandae.
            Deleniti, magni. Nobis! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Placeat
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-10 grid-cols-1 mt-20">
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
    </>
  );
};

export default Causes;
