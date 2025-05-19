import { Check, Heart } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Gallary } from "./Gallary";

const About = () => {
  return (
    <div className="container-box ">
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-10">
        <div className="">
          <Gallary />
        </div>
        <div className="flex flex-col lg:pl-20  gap-3 ">
          <div className="flex flex-row items-center">
            <Heart className="text-orangeColor h-4 w-4" />
            <span className="font-caveat text-lg text-orangeColor ml-1">
              About Us
            </span>
          </div>
          <div>
            <h2 className="text-5xl font-semibold text-blueColor ">
              A Legacy of Service and Compassion
            </h2>
          </div>
          <div>
            <h5 className="text-darkGray text-lg leading-[30px]">
              The Nizamia Charitable Trust was founded by Syed Dr. Mohd Ali
              Nizami, a descendant of Hazrat Nizamuddin Aulia, whose teachings
              of love, compassion, and service to humanity have inspired
              countless generations. Deeply rooted in this heritage, the trust
              embodies a universal mission: to uplift those in need, regardless
              of caste, creed, or religion, and to foster a sense of unity
              through service.
            </h5>
          </div>
          <div>
            <h5 className="text-darkGray text-lg leading-[30px] mt-5">
              While drawing inspiration from this spiritual lineage, the
              organization is focused on addressing urgent and diverse community
              needs in an inclusive and impactful way, ensuring no one is left
              behind.
            </h5>
          </div>
          {/* <div className='flex flex-row gap-6'>
            <ul className='flex flex-col gap-4 mt-6'>
              <li className='flex flex-row gap-2 items-center'>
                <Check className='text-greenColor w-5 h-5' />
                <p>Lorem ipsum dolor emit</p>
              </li>
              <li className='flex flex-row gap-2 items-center'>
                <Check className='text-greenColor w-5 h-5' />
                <p>Lorem ipsum dolor emit</p>
              </li>
              <li className='flex flex-row gap-2 items-center'>
                <Check className='text-greenColor w-5 h-5' />
                <p>Lorem ipsum dolor emit</p>
              </li>
            </ul>
            <div className='relative h-32 mt-6'>
         
              <Image
                src='/assets/images/portrait-female-pediatrician-work.jpg'
                alt='quote'
                sizes='100vw'
                height={0}
                width={0}
                className='h-full w-full object-cover'
              />

              
              <div className='absolute inset-0 bg-orangeColor bg-opacity-80 flex items-center justify-center'>
                <p className='text-white text-lg text-center'>
                  Life is long lesson in humanity
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
