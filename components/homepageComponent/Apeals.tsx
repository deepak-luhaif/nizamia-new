"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Heart } from "lucide-react";
import React from "react";
import Image from "next/image";
import { ProductCard } from "../shared/ProjectCard";
import Autoplay from "embla-carousel-autoplay";

const projects = [
  {
    id: "1",
    image: "/assets/images/home/food-distribution.jpeg",
    title: "Feeding Programs",
    desc: "Offering cooked meals and food packages to vulnerable individuals and families.",
    route: "what-we-do/feeding-programs",
  },
  {
    id: "2",
    image: "/assets/images/home/dispensary.jpeg",
    title: "Healthcare Support",
    desc: "Facilitating medical aid, including surgeries, community health camps, and essential care services.",
    route: "/what-we-do/healthcare-support",
  },
  {
    id: "3",
    image: "/assets/images/home/women-empowerment.jpeg",
    title: "Women Empowerment",
    desc: "Equipping women with skills training and resources for financial independence.",
    route: "/what-we-do/women-empowerment",
  },
  {
    id: "4",
    image: "/assets/images/home/seasonal.jpeg",
    title: "Seasonal Relief",
    desc: "Providing winter essentials like blankets, warm meals, and supplies to help families during harsh weather.",
    route: "/what-we-do/emergency-relief",
  },
  {
    id: "5",
    image: "/assets/images/home/water-plant.jpg",
    title: "Water Accessibility",
    desc: "Setting up drinking water plants to ensure safe, sustainable water access for all.",
    route: "/what-we-do/water-accessibility",
  },
];

const Apeals = ({ image, title, desc }: any) => {
  return (
    <div className="container-box map  lg:mb-0">
      <div className="pb-16 relative">
        <div>
          <div className="flex flex-row items-center text-center justify-center">
            <Heart className="text-orangeColor h-4 w-4" />
            <span className="font-caveat text-lg text-orangeColor ml-1">
              Why Choose Us
            </span>
          </div>
          <div>
            <h2 className="text-5xl font-semibold text-blueColor text-center ">
              What We Do
            </h2>
          </div>

          <div>
            <p className="text-lg  text-darkGray leading-[30px] text-center mt-3">
              The trust’s initiatives are designed to provide immediate relief
              while also empowering communities for long-term resilience
            </p>
          </div>
        </div>
        <div className="mt-10">
          <Carousel
            plugins={[Autoplay({ delay: 3000 })]} // Autoplay every 3 seconds
            opts={{ loop: true, align: "center" }}
            className=""
          >
            <CarouselContent className="">
              {projects.map((project) => (
                <CarouselItem
                  key={project.id}
                  className=" md:basis-1/3 sm:basis-1/2 basis-full pl-10"
                >
                  <ProductCard
                    image={project.image}
                    title={project.title}
                    desc={project.desc}
                    route={project.route}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation Buttons */}
            {/* <CarouselPrevious className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md' />
            <CarouselNext className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md' /> */}
          </Carousel>
        </div>
        <div className="bg-white lg:absolute bottom-[-450px] w-full shadow-md block mt-10 lg:mt-0">
          <div className="grid lg:grid-cols-2 grid-cols-1 ">
            <div>
              <Image
                src={"/assets/images/shoot/healthcare/9.jpg"}
                // src={'/assets/images/volunteer.png'}
                alt="volunteer"
                sizes="100vw"
                height={0}
                width={0}
                className="w-full h-full "
              />
            </div>
            <div className="flex flex-col p-8 gap-3">
              <div className="flex flex-row items-center">
                <Heart className="text-orangeColor h-4 w-4" />
                <span className="font-caveat text-lg text-orangeColor ml-1">
                  Core Purpose
                </span>
              </div>
              <div>
                <h2 className="text-5xl font-semibold text-blueColor ">
                  Our Mission
                </h2>
              </div>
              <div>
                <h5 className="text-darkGray text-lg leading-[30px]">
                  Guided by the timeless principles of humanity and compassion,
                  the Nizamia Charitable Trust is dedicated to improving lives
                  and creating sustainable change. Our mission is to provide
                  relief, opportunity, and dignity to all, reflecting the belief
                  that service to humanity transcends boundaries and is the
                  essence of true devotion.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apeals;
