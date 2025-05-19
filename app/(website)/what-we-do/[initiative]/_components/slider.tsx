"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

interface CarouselProps {
  images: string[];
}

export default function Slider({ images }: CarouselProps) {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 3000,
          stopOnInteraction: false,
        }),
      ]}
    >
      <CarouselContent>
        {images.map((img, index) => (
          <CarouselItem key={index}>
            <Image
              src={img}
              alt={`Gallery Image ${index + 1}`}
              height={0}
              width={0}
              sizes="100vw"
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="lg:block hidden">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
}
