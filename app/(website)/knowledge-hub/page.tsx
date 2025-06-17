'use client';

import { useState } from 'react';
import Image from 'next/image';
import BreadCrumb from '@/components/shared/BreadCrumb';
import { Dialog, DialogContent } from '@/components/ui/dialog'; // if using ShadCN

const images = [
  '/assets/images/gallary/1.jpg',
  '/assets/images/gallary/2.jpg',
  '/assets/images/gallary/3.jpg',
  '/assets/images/gallary/4.jpg',
  '/assets/images/gallary/5.jpg',
  '/assets/images/gallary/6.jpg',
  // '/assets/images/gallary/7.jpg',
  '/assets/images/gallary/8.jpg',
  '/assets/images/gallary/9.jpg',
  '/assets/images/gallary/10.jpg',
  '/assets/images/gallary/11.jpg',
  '/assets/images/gallary/12.jpg',
  '/assets/images/gallary/13.jpg',
  '/assets/images/gallary/14.jpg',
  '/assets/images/gallary/15.jpg',
  '/assets/images/gallary/16.jpg',
  '/assets/images/gallary/17.jpg',
  '/assets/images/gallary/18.jpg',
  '/assets/images/gallary/19.jpg',
  '/assets/images/gallary/20.jpg',
  '/assets/images/gallary/21.jpg',
  '/assets/images/gallary/22.jpg',
  '/assets/images/gallary/23.jpg',
  '/assets/images/gallary/24.jpg',
  '/assets/images/gallary/25.jpg',
  '/assets/images/gallary/26.jpg',
  '/assets/images/gallary/27.jpg',
  '/assets/images/gallary/28.jpg',
  '/assets/images/gallary/29.jpg',
  '/assets/images/gallary/30.jpg',
  '/assets/images/gallary/31.jpg',
  '/assets/images/gallary/32.jpg',
  '/assets/images/gallary/33.jpg',
  '/assets/images/gallary/34.jpg',
  '/assets/images/gallary/35.jpg',
  '/assets/images/gallary/36.jpg',
  '/assets/images/gallary/37.jpg',
  '/assets/images/gallary/38.jpg',
  '/assets/images/gallary/39.jpg',
  '/assets/images/gallary/40.jpg',
  '/assets/images/gallary/41.jpg',
  '/assets/images/gallary/42.jpg',
  '/assets/images/gallary/43.jpg',
];

const KnowledgeHub = () => {
  const [open, setOpen] = useState(false);
  const [activeImg, setActiveImg] = useState('');
  const [imageInfo, setImageInfo] = useState({
    src: '',
    width: 0,
    height: 0,
  });
  const handleImageClick = (src: string) => {
    const img = new window.Image();
    img.src = src;
    img.onload = () => {
      setImageInfo({
        src,
        width: img.width,
        height: img.height,
      });
      setOpen(true);
    };
  };

  return (
    <>
      <BreadCrumb
        name='Knowledge Hub'
        tagline='We believe genuine devotion is found in serving humanity with love.'
      />

      <div className='container-box grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 py-10'>
        {images?.map((img, idx) => (
          <div key={idx} className='cursor-pointer'>
            <Image
              src={img}
              alt={`Gallery Image ${idx + 1}`}
              width={0}
              height={0}
              sizes='100vw'
              className='h-[350px] lg:w-[350px] w-full rounded-lg object-cover hover:opacity-90 transition-all duration-300'
              onClick={() => handleImageClick(img)}
            />
          </div>
        ))}
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className='max-w-4xl p-0 overflow-hidden flex justify-center items-center'>
          <Image
            src={imageInfo.src}
            alt='Full Image'
            width={0}
            height={0}
            sizes='100vw'
            className={`h-auto object-contain ${
              imageInfo.height > imageInfo.width
                ? 'max-h-[80vh] w-auto'
                : 'w-full h-auto'
            }`}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default KnowledgeHub;
