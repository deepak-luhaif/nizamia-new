"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";

export function ProductCard({ image, title, desc, route }: any) {
  const router = useRouter();

  const handleClick = (route: string) => {
    router.push(route);
  };
  return (
    <Card
      onClick={() => handleClick(route)}
      className="group  w-full rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 h-[400px] cursor-pointer"
    >
      <div className="relative w-full h-48 object-cover">
        <Image
          src={image}
          alt="Card Image"
          layout="fill"
          objectFit="cover"
          className="transition-opacity duration-300 group-hover:opacity-8   "
        />
      </div>

      <CardHeader>
        <CardTitle className="text-xl text-blueColor font-semibold transition-colors duration-300 group-hover:text-darkBlue">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="">
        <p className="text-lg text-darkGray">{desc}</p>
      </CardContent>
    </Card>
  );
}
