import { notFound } from 'next/navigation';

import Donor from '@/components/homepageComponent/Donor';
import Donate from '@/components/shared/Donate';
import { initiatives } from '@/constant/initiatives';
import Image from 'next/image';
import ImageGrid from './_components/image-grid';
import TwoLayoutGrid from './_components/two-layout-grid';

import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import styles from './_components/TwoLayoutGrid.module.css'; // Create this CSS file
import Slider from './_components/slider';

interface InitiativePageProps {
  params: {
    initiative: string;
  };
}

export function generateStaticParams() {
  return Object.keys(initiatives).map((initiative) => ({
    initiative,
  }));
}

export default function InitiativePage({ params }: InitiativePageProps) {
  const initiative = initiatives[params.initiative];

  if (!initiative) {
    notFound();
  }

  return (
    <>
      <div className=" lg:mt-24 mt-14">
        <div className="relative">
          <Image
            src={initiative.image}
            alt={initiative.title}
            height={0}
            width={0}
            sizes="100vw"
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-25"></div>

          <div className="absolute lg:top-1/2 top-11 lg:left-[100px] left-[40px] transform ">
            <h1 className="text-white font-semibold lg:text-3xl text-2xl">
              {initiative.title}
            </h1>
            <p className="text-white lg:text-lg text-base leading-[30px] lg:mt-2 mt-0">
              {initiative.tagline}
            </p>
          </div>
        </div>

        <div className="">
          <Donor />
        </div>
      </div>
      <div className="container-box   ">
        <div className="flex flex-col gap-5">
          <div className="text-center">
            <h2
              className={` ${styles.highlight} font-bold lg:text-6xl text-4xl text-blueColor `}
            >
              {initiative.title}
            </h2>
          </div>
          <div>
            <p className="text-darkGray leading-[28px] text-lg text-center lg:px-[100px] px-0">
              {initiative.description}
            </p>
          </div>
        </div>

        {/* <div className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {initiative.programs.map((item, index) => (
              <Card
                key={index}
                className="group  w-full rounded-lg overflow-hidden shadow-lg  h-[450px] cursor-pointer"
              >
                <div className="relative ">
                  <Image
                    src={item?.image ?? "/default-image.jpg"} // Fallback image
                    alt={item.title}
                    height={0}
                    width={0}
                    sizes="100vw"
                    className=" w-full h-60 object-cover"
                  />
                </div>

                <CardHeader>
                  <CardTitle className="text-xl text-blueColor font-semibold transition-colors duration-300 group-hover:text-darkBlue">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="">
                  <p className="text-lg text-darkGray">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div> */}

        <div className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-5">
            {initiative.programs.map((item, index) => (
              <TwoLayoutGrid
                title={item.title}
                description={item.description}
                imageSrc={item?.image ?? '/default-image.jpg'}
                buttonText1="Learn More"
                buttonText2="Donate"
                index={index}
                bulletPoints={item.bulletPoints}
              />
            ))}
          </div>
        </div>
      </div>

      {/* {initiative?.isImageGrid ? <Gallary /> : null} */}
      {initiative?.isImageGrid ? <ImageGrid /> : null}

      <div className=" container-box  rounded-md  overflow-hidden   ">
        <div className="flex flex-col items-center py-2  ">
          <div className="flex flex-row items-center">
            <Heart className="text-orangeColor h-4 w-4" />
            <span className="font-caveat text-lg text-orangeColor ml-1">
              {initiative?.sub_tagline}
            </span>
          </div>
          <div>
            <h1 className="lg:text-4xl text-2xl font-semibold text-blueColor text-center">
              {initiative?.sub_title}
            </h1>
          </div>
        </div>

        {initiative.video && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 ">
            {/* Left Column: Video */}
            <div className="relative">
              <video
                autoPlay
                loop
                controls
                className="w-full h-full object-cover rounded-lg shadow-md"
              >
                <source src={initiative.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Right Column: Text */}
            <div className="flex flex-col justify-center p-6 bg-white rounded-lg shadow-md">
              <p className="text-gray-600 leading-relaxed">
                {initiative?.video_tagline}
              </p>
              <Button className="bg-greenColor rounded-lg font-semibold  w-fit mt-4">
                Donate Now
              </Button>
            </div>
          </div>
        )}
      </div>

      <div className="bg-gray-100 px-6 py-6 rounded-lg shadow-md mx-auto max-w-4xl text-center  ">
        <p className="text-xl md:text-2xl font-semibold italic text-[#fe9c3c] leading-relaxed">
          "{initiative?.quote}"
        </p>
      </div>

      <div className="container-box grid lg:grid-cols-2 grid-cols-1 gap-14  ">
        <div className="  h-full">
          <Slider images={initiative.gallary} />
        </div>
        <div>
          <Donate />
        </div>
      </div>
    </>
  );
}
