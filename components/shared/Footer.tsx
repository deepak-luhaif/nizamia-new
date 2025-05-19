'use client';
import { useEffect, useState } from 'react';
import {
  Mail,
  Phone,
  ArrowUp,
  MoveUp,
  Instagram,
  InstagramIcon,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import SocialMediaIcons from '../social-icons';

export default function Footer() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  return (
    <>
      <div className='footer relative mt-20  '>
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className='bg-lightOrange cursor-pointer h-[50px] w-[50px] rounded-full p-3 flex items-center justify-center absolute top-[-20px] left-1/2 -translate-x-1/2 '
        >
          <MoveUp className='text-white w-5 h-5' />
        </div>
        <div className='container mx-auto lg:px-10 px-4'>
          <div className='      py-8 grid grid-cols-1 lg:grid-cols-4 gap-10 lg:top-[190px] top-[60px] absolute  '>
            {/* About Us */}
            <div>
              <h3 className='text-lg font-semibold text-white'>About Us</h3>
              <p className=' mt-2 text-sm text-footerColor'>
                Founded by Syed Dr. Mohd Ali Nizami, a descendant of Hazrat
                Nizamuddin Aulia (RA), Nizamia Charitable Trust upholds love,
                unity, and compassion, believing that serving humanity is the
                highest devotion.
              </p>
              <div className='mt-4 space-y-2 text-sm'>
                <div className='flex items-center gap-2'>
                  <Phone className='w-4 h-4 text-white' />
                  <span className='text-footerColor'>+91 8527583935 </span>
                </div>
                <div className='flex items-center gap-2'>
                  <Mail className='w-4 h-4 text-white' />
                  <span className='text-footerColor'>
                    support@nizamiatrust.org.in
                  </span>
                </div>
              </div>
            </div>

            {/* Our Pages */}
            <div>
              <h3 className='text-lg font-semibold text-white'>Our Pages</h3>
              <ul className='text-footerColor text-sm space-y-2 mt-2 flex flex-col gap-2'>
                <Link href={'/'}>
                  <li>Home</li>
                </Link>
                <Link href={'/about'}>
                  <li>Who We Are</li>
                </Link>
                <Link href={'/media'}>
                  <li>Knowledge Hub</li>
                </Link>
                <Link href={'/contact'}>
                  <li>Contact</li>
                </Link>
              </ul>
            </div>

            {/* Causes */}
            <div>
              <h3 className='text-lg font-semibold text-white'>What We Do</h3>
              <ul className='text-footerColor text-sm space-y-2 mt-2 grid grid-cols-2'>
                <li>
                  <Link
                    href='/what-we-do/feeding-programs'
                    className='hover:text-white'
                  >
                    Feeding programs
                  </Link>
                </li>
                <li>
                  <Link
                    href='/what-we-do/healthcare-support'
                    className='hover:text-white'
                  >
                    Healthcare support
                  </Link>
                </li>
                <li>
                  <Link
                    // href="/what-we-do/education-skills-training"
                    href='/what-we-do/education'
                    className='hover:text-white'
                  >
                    Education Skills training
                  </Link>
                </li>
                <li>
                  <Link
                    href='/what-we-do/women-empowerment'
                    className='hover:text-white'
                  >
                    Women empowerment
                  </Link>
                </li>
                <li>
                  <Link
                    // href="/what-we-do/emergency-and-seasonal-relief"
                    href='/what-we-do/emergency-relief'
                    className='hover:text-white'
                  >
                    Emergency and seasonal relief
                  </Link>
                </li>
                <li>
                  <Link
                    href='/what-we-do/water-accessibility'
                    className='hover:text-white'
                  >
                    Water accessibility
                  </Link>
                </li>
                <li>
                  <Link
                    // href="/what-we-do/inspiring-charity-gifts"
                    href='/what-we-do/inspiring-charity-gift'
                    className='hover:text-white'
                  >
                    Inspiring Charity Gifts
                  </Link>
                </li>
              </ul>
            </div>

            {/* News Feed */}
            <div className='mx-auto'>
              <h3 className='text-lg font-semibold text-white  mb-4'>
                Social Media
              </h3>

              <SocialMediaIcons />
              {/* <div className="mt-2 space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center gap-3">
                <Image
                  src="/assets/images/portrait-female-pediatrician-work.jpg"
                  alt="News"
                  className="w-12 h-12 object-cover rounded-lg"
                  height={0}
                  width={0}
                  sizes="100vw"
                />
                <div className="text-sm">
                  <p className="text-gray-400">
                    Charity &nbsp; August 24, 2024
                  </p>
                  <p className="text-white font-medium">
                    Tips how to repair your be yourself
                  </p>
                </div>
              </div>
            ))}
          </div> */}
            </div>

            {/* <div className="border border-red-500">
          <SocialMediaIcons />
        </div> */}
          </div>
        </div>
      </div>

      <div className='bg-darkBlue p-7   w-full text-white text-center font-roboto '>
        Copyright by @ Nizamia Charitable Trust 2025
      </div>
      <div className='fixed bottom-4 right-4'>
        <Link
          href={
            'https://www.instagram.com/nizamia_charitable_trust?igsh=M3NuMjY4OHBoNTN6'
          }
        >
          <Image
            src={'/assets/icons/Instagram.svg'}
            alt='instagram'
            height={0}
            width={0}
            sizes='100vw'
            className='w-16 h-16 animate-bounce '
          />
        </Link>
      </div>
      <div className='fixed bottom-4 left-4'>
        <Link
          href={
            'https://www.instagram.com/nizamia_charitable_trust?igsh=M3NuMjY4OHBoNTN6'
          }
        >
          <Image
            src={'/assets/icons/Facebook.svg'}
            alt='instagram'
            height={0}
            width={0}
            sizes='100vw'
            className='w-16 h-16 animate-bounce '
          />
        </Link>
      </div>
    </>
  );
}
