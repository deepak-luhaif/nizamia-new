import { Heart } from "lucide-react";
import React from "react";

import Image from "next/image";

const Events = () => {
  return (
    <div className="event container-box lg:mt-[400px] mt-[500px]">
      <div className=" ">
        <div>
          <div className="flex flex-row items-center text-center justify-center">
            <Heart className="text-orangeColor h-4 w-4" />
            <span className="font-caveat text-lg text-orangeColor ml-1">
              Foundational Principles
            </span>
          </div>
          <div>
            <h2 className="text-5xl font-semibold text-blueColor text-center ">
              Our Heritage and Values
            </h2>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg mt-14">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 items-center ">
          <div>
            <p className="text-xl text-darkGray">
              The Nizamia Charitable Trust is inspired by the legacy of Hazrat
              Nizamuddin Aulia, a symbol of unity and compassion whose teachings
              emphasized caring for all, irrespective of background. While the
              values of service and inclusion associated with this rich heritage
              shape our vision, our work extends universally, fostering
              interfaith harmony and addressing human needs on a broad scale.
            </p>
          </div>
          <div>
            <Image
              src={"/assets/images/heritage.jpg"}
              // src={'/assets/images/home/heritage.png'}
              alt="heritage"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-[300px] object-cover rounded-2xl"
              // className="w-full h-[300px] object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
