import { Heart } from "lucide-react";
import React from "react";
import { WhyCard } from "../shared/WhyCard";
import Image from "next/image";
import Donate from "../shared/Donate";

const Why = () => {
  return (
    <div className="container-box lg:mt-0   ">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-10 items-center">
        <div>
          <div>
            <div className="flex flex-row items-center">
              <Heart className="text-orangeColor h-4 w-4" />
              <span className="font-caveat text-lg text-orangeColor ml-1">
                Get Involved
              </span>
            </div>
            <div>
              <h2 className="text-5xl font-semibold text-blueColor mt-2">
                Join Us
              </h2>
              <p className="text-lg  text-darkGray leading-[30px] mt-3">
                At the heart of our work lies a commitment to making the world a
                better place for everyone. By supporting the Nizamia Charitable
                Trust, you can help create a future where kindness, compassion,
                and dignity know no boundaries. Together, we can build a world
                that truly embodies the spirit of humanity.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:ml-10 ml-0">
          <Donate />
        </div>
      </div>
    </div>
  );
};

export default Why;
