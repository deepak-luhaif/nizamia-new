import { Heart } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Gallary } from "./Gallary";

const About = () => {
  return (
    <div className="container-box">
      <div className="flex flex-col items-center">
        <div className="flex flex-row items-center">
          <Heart className="text-orangeColor h-4 w-4" />
          <span className="font-caveat text-lg text-orangeColor ml-1">
            About Us
          </span>
        </div>
        <div>
          <h1 className="lg:text-5xl text-2xl font-semibold text-blueColor text-center">
            A Legacy of Service and Compassion
          </h1>
        </div>
      </div>
      <div className="grid lg:grid-cols-12 grid-cols-1 gap-10 mt-10">
        <div className="col-span-1 lg:col-span-8">
          <Gallary />
        </div>
        <div className="   col-span-1 lg:col-span-4">
          <p className="text-darkGray text-lg leading-[30px]">
            Rooted in the timeless message of love, unity, and compassion, the
            Nizamia Charitable Trust was founded by Syed Dr. Mohd Ali Nizami, a
            direct descendant of the revered Hazarat Nizamuddin Aulia (RA). With
            this profound heritage as our guiding inspiration, we are driven by
            the belief that serving humanity is the highest form of devotion.
            While we take pride in this sacred lineage, our mission transcends
            the boundaries of history and geography, focusing on addressing
            critical needs and uplifting communities across all backgrounds.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
