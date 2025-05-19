import Image from 'next/image';

export default function EventCard({ img, title, slug }: any) {
  return (
    <div className='w-full'>
      <div className='bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer'>
        <Image
          src={img}
          alt='Media Card'
          height={0}
          width={0}
          sizes='100vw'
          className='w-full h-56 object-cover'
        />
        <div className='p-4'>
          <h3 className='text-lg font-semibold text-blueColor'>{title}</h3>
        </div>
      </div>
    </div>
  );
}
