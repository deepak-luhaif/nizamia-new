import { TagIcon } from "lucide-react";
import React from "react";

const BreadCrumb = ({ name, tagline }: any) => {
  return (
    <div className=" relative breadcrumb  container-box flex flex-col justify-center lg:mt-[96px] mt-[50px]">
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="absolute ">
        <h2 className="text-white font-semibold text-3xl">{name}</h2>
        <p className="text-white">{tagline}</p>
      </div>
    </div>
  );
};

export default BreadCrumb;
