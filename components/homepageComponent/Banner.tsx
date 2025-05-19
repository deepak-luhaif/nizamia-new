"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export function Banner() {
  const banners = [
    {
      src: "/assets/images/banner-image-new.png",
      tagline:
        "Transform Lives with Meaningful Giving, \na Gift that Endures Forever!",
    },
    {
      src: "/assets/images/banner-2.png",
      tagline:
        "Ending Poverty by Empowering Lives \nThrough Quality Education!",
    },
    {
      // src: "/assets/images/banner-3.png",
      // src: "/assets/images/shoot/DSC08909.jpg",
      src: "/assets/images/women-empowerment-banner.png",
      tagline:
        "Empowering Women, Strengthening Communities \nfor a Better Future!",
    },
  ];

  return (
    <Carousel
      plugins={[Autoplay({ delay: 2000 })]} // Auto-play every 6 seconds
      opts={{ loop: true }}
    >
      <CarouselContent>
        {banners.map((banner, index) => (
          <CarouselItem key={index} className="relative">
            <Image
              src={banner.src}
              alt={`Banner ${index + 1}`}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full  h-full object-cover "
            />
            <h4 className="absolute top-1/3 left-5 md:left-20 lg:left-32 lg:text-[42px] text-xs font-semibold text-blueColor px-6 py-3 rounded-md lg:max-w-[600px] max-w-[200px] leading-tight whitespace-pre-line">
              {banner.tagline}
            </h4>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Navigation Buttons */}
      {/* <CarouselPrevious className='absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md' />
      <CarouselNext className='absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md' /> */}
    </Carousel>
  );
}
