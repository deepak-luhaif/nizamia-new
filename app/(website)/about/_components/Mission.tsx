import React from "react";
import {
  HandIcon as Hands,
  Heart,
  GraduationCap,
  Home,
  SquarePlus,
  HandPlatter,
} from "lucide-react";

const Mission = () => {
  return (
    <div className="container-box ">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 mt-10">
        <div>
          <div className="">
            <h2 className="lg:text-4xl text-2xl font-semibold text-blueColor text-center lg:text-start">
              Our Mission
            </h2>
          </div>
          <p className="text-lg text-darkGray leading-[30px] mt-8">
            Guided by the principles of dignity, inclusion, and hope, we aim to
            create meaningful, lasting change through impactful initiatives in
            healthcare, education, empowerment, and poverty alleviation. Every
            step we take reflects the universal values of compassion and service
            that have been passed down through generations, reminding us of the
            shared responsibility to support those in need.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div className="bg-white p-3 rounded-lg shadow-md text-center">
            <SquarePlus className="w-12 h-12 mx-auto mb-4 text-greenColor" />
            <h3 className="font-semibold mb-2">Healthcare Support</h3>
            <p className="text-sm text-darkGray">
              A vital lifeline for those in need.
            </p>
          </div>
          <div className="bg-white p-3 rounded-lg shadow-md text-center">
            <Heart className="w-12 h-12 mx-auto mb-4 text-greenColor" />
            <h3 className="font-semibold mb-2">Skills Training</h3>
            <p className="text-sm text-darkGray">
              Empowering people for better futures.
            </p>
          </div>
          <div className="bg-white p-3 rounded-lg shadow-md text-center">
            <GraduationCap className="w-12 h-12 mx-auto mb-4 text-greenColor" />
            <h3 className="font-semibold mb-2">Education</h3>
            <p className="text-sm text-darkGray">
              A key to ending the poverty cycle.
            </p>
          </div>
          <div className="bg-white p-3 rounded-lg shadow-md text-center">
            <HandPlatter className="w-12 h-12 mx-auto mb-4 text-greenColor" />
            <h3 className="font-semibold mb-2">Feeding Programs</h3>
            <p className="text-sm text-darkGray">
              Ensuring no one sleeps hungry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
