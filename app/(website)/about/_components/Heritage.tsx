import Image from "next/image";
import React from "react";

const Heritage = () => {
  return (
    <div className="container-box">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <Image
            src={"/assets/images/heritage.jpg"}
            alt="heritage"
            height={0}
            width={0}
            sizes="100vw"
            className="w-full h-[300px] rounded-md object-cover"
          />
        </div>
        <div>
          <div className="">
            <h2 className="lg:text-4xl text-2xl font-semibold text-blueColor text-center lg:text-start">
              Our Heritage
            </h2>
          </div>
          <p className="text-lg text-darkGray leading-[30px] mt-8">
            As the trust draws inspiration from its direct connection to
            Nizamuddin Dargah, we honor the values of its legacy—a beacon of
            spiritual enlightenment, compassion, and inclusivity. However, our
            work is not limited to the preservation of a specific tradition.
            Instead, it reflects the broader vision of addressing universal
            human needs and promoting harmony among diverse groups.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Heritage;
