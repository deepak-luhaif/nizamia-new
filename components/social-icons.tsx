import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  FacebookIcon,
} from 'lucide-react';
import Link from 'next/link';

const SocialMediaIcons = () => {
  return (
    <div className='flex gap-4 justify-start items-center'>
      <Link
        href='#'
        className='p-2 rounded-lg transition-all duration-200 hover:bg-gray-200 bg-gray-100'
        aria-label='Facebook'
      >
        <FacebookIcon className='w-4 h-4 text-gray-700' />
      </Link>
      {/* <Link
        href='#'
        className='p-2 rounded-lg transition-all duration-200 hover:bg-gray-200 bg-gray-100'
        aria-label='Twitter'
      >
        <Twitter className='w-4 h-4 text-gray-700' />
      </Link> */}
      <Link
        href='https://www.instagram.com/nizamia_charitable_trust?igsh=M3NuMjY4OHBoNTN6'
        className='p-2 rounded-lg transition-all duration-200 hover:bg-gray-200 bg-gray-100'
        aria-label='Instagram'
      >
        <Instagram className='w-4 h-4 text-gray-700' />
      </Link>
      {/* <Link
        href='#'
        className='p-2 rounded-lg transition-all duration-200 hover:bg-gray-200 bg-gray-100'
        aria-label='LinkedIn'
      >
        <Linkedin className='w-4 h-4 text-gray-700' />
      </Link> */}
    </div>
  );
};

export default SocialMediaIcons;
