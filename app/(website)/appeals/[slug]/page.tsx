"use client";

import Donor from "@/components/homepageComponent/Donor";
import { useParams } from "next/navigation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ApealCard } from "@/components/shared/ApealCard";
const Appeal = () => {
  const { slug } = useParams();

  // Mock data for demonstration purposes
  const appealsData = [
    {
      img: "/assets/images/portrait-female-pediatrician-work.jpg",
      tag: "Health",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      video: "/assets/images/My Video8.mp4",
      goal: 120000,
      raised: 100000,
      slug: "apeal-1",
      gallary: [
        "/assets/images/portrait-female-pediatrician-work.jpg",
        "/assets/images/portrait-female-pediatrician-work.jpg",
        "/assets/images/portrait-female-pediatrician-work.jpg",
      ],

      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa commodi tenetur optio dicta totam quae vero modi maxime. Totam assumenda, ea sequi provident nesciunt perferendis! Reprehenderit ad fugiat at perferendis maiores dicta officiis, alias voluptates provident delectus quod error nostrum voluptatum impedit, natus quos tempora! Natus, nemo quidem. Provident non ipsum in aliquam nihil ducimus delectus obcaecati amet fuga dolores animi saepe dignissimos aperiam corrupti ipsa iusto necessitatibus molestias magni aut aliquid distinctio, corporis nisi? Laborum incidunt quibusdam, eius beatae a reiciendis, ducimus ut similique neque voluptas alias, numquam nobis minima porro ad voluptatibus dolor voluptatum? Et, pariatur nesciunt quisquam ab dolorem ullam voluptates aut mollitia velit reprehenderit atque rerum hic tenetur aliquam voluptate quam adipisci nostrum placeat nobis officia dolore eius ex debitis. Illum eveniet illo, perspiciatis expedita laudantium natus placeat blanditiis nam dolorem deserunt earum nulla nesciunt incidunt! Facilis corrupti ea adipisci. Excepturi quam perferendis reiciendis, praesentium delectus, minima dolorem expedita esse omnis accusantium sint ipsa nobis dolores? Impedit assumenda natus doloremque error corrupti sequi hic fugit aspernatur adipisci architecto. Maiores blanditiis velit repellendus voluptatum, enim quibusdam accusamus impedit delectus officia perspiciatis autem. Obcaecati velit fugiat nam? Architecto, consequuntur! Libero ea alias, suscipit debitis reprehenderit in vero asperiores quas temporibus magni? Sit aperiam, dolore fugiat tempore cum doloribus illo libero reprehenderit laborum voluptatum, incidunt facilis atque consequatur excepturi adipisci sunt ipsum perspiciatis amet. Maiores doloremque maxime, molestiae vel iure, magnam reprehenderit earum minima atque, a ipsam! Aliquid illum ratione minus numquam enim debitis eaque excepturi facilis doloribus pariatur? Pariatur repellat laborum quo itaque incidunt iste dignissimos similique libero maxime, cupiditate consequuntur minus a veritatis culpa deleniti eos, aspernatur tempore aliquid doloremque cum! Facere cupiditate perferendis voluptate veritatis laboriosam, voluptatem exercitationem ipsum eius deserunt ad quam nostrum odio labore odit, officia, facilis quidem excepturi vel alias natus enim molestiae.",
    },
    {
      img: "/assets/images/portrait-female-pediatrician-work.jpg",
      tag: "Medical Aid",
      title: "Helping rural communities with healthcare support.",
      video: "/assets/images/My Video8.mp4",
      gallary: [
        "/assets/images/portrait-female-pediatrician-work.jpg",
        "/assets/images/portrait-female-pediatrician-work.jpg",
        "/assets/images/portrait-female-pediatrician-work.jpg",
      ],
      goal: 90000,
      raised: 45000,
      slug: "apeal-2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa commodi tenetur optio dicta totam quae vero modi maxime. Totam assumenda, ea sequi provident nesciunt perferendis! Reprehenderit ad fugiat at perferendis maiores dicta officiis, alias voluptates provident delectus quod error nostrum voluptatum impedit, natus quos tempora! Natus, nemo quidem. Provident non ipsum in aliquam nihil ducimus delectus obcaecati amet fuga dolores animi saepe dignissimos aperiam corrupti ipsa iusto necessitatibus molestias magni aut aliquid distinctio, corporis nisi? Laborum incidunt quibusdam, eius beatae a reiciendis, ducimus ut similique neque voluptas alias, numquam nobis minima porro ad voluptatibus dolor voluptatum? Et, pariatur nesciunt quisquam ab dolorem ullam voluptates aut mollitia velit reprehenderit atque rerum hic tenetur aliquam voluptate quam adipisci nostrum placeat nobis officia dolore eius ex debitis. Illum eveniet illo, perspiciatis expedita laudantium natus placeat blanditiis nam dolorem deserunt earum nulla nesciunt incidunt! Facilis corrupti ea adipisci. Excepturi quam perferendis reiciendis, praesentium delectus, minima dolorem expedita esse omnis accusantium sint ipsa nobis dolores? Impedit assumenda natus doloremque error corrupti sequi hic fugit aspernatur adipisci architecto. Maiores blanditiis velit repellendus voluptatum, enim quibusdam accusamus impedit delectus officia perspiciatis autem. Obcaecati velit fugiat nam? Architecto, consequuntur! Libero ea alias, suscipit debitis reprehenderit in vero asperiores quas temporibus magni? Sit aperiam, dolore fugiat tempore cum doloribus illo libero reprehenderit laborum voluptatum, incidunt facilis atque consequatur excepturi adipisci sunt ipsum perspiciatis amet. Maiores doloremque maxime, molestiae vel iure, magnam reprehenderit earum minima atque, a ipsam! Aliquid illum ratione minus numquam enim debitis eaque excepturi facilis doloribus pariatur? Pariatur repellat laborum quo itaque incidunt iste dignissimos similique libero maxime, cupiditate consequuntur minus a veritatis culpa deleniti eos, aspernatur tempore aliquid doloremque cum! Facere cupiditate perferendis voluptate veritatis laboriosam, voluptatem exercitationem ipsum eius deserunt ad quam nostrum odio labore odit, officia, facilis quidem excepturi vel alias natus enim molestiae.",
    },
  ];

  // Make sure the slug is not undefined before using it
  if (!slug) {
    return <div>Loading...</div>;
  }

  // Find the appeal based on the slug
  const appeal = appealsData.find((appeal) => appeal.slug === slug);

  if (!appeal) {
    return <div>Appeal not found</div>;
  }

  return (
    <>
      <div className=" mt-20">
        <div className="relative">
          <Image
            src={appeal.img}
            alt={appeal.title}
            height={0}
            width={0}
            sizes="100vw"
            className="w-full h-[500px] object-cover "
          />
          <div className="absolute inset-0 bg-black opacity-25"></div>

          <div className="absolute top-1/2 left-[100px] transform ">
            <h1 className="text-white font-semibold text-3xl">{appeal.tag}</h1>
            <p className="text-white text-lg"> {appeal.title}</p>
          </div>
        </div>

        <div className="">
          <Donor />
        </div>
      </div>
      <div className="container-box">
        <div className="flex flex-col gap-5">
          <div className="text-center">
            <span className="font-caveat text-2xl text-orangeColor   ">
              {appeal.tag}
            </span>
            <h2 className="font-bold text-3xl ">{appeal.title}</h2>
          </div>
          <div>
            <p className="text-darkGray leading-[28px] text-lg">
              {appeal.description}
            </p>
          </div>
        </div>
      </div>
      <div>
        <video className="w-full lg:h-[600px] h-auto object-cover" controls>
          <source src={appeal?.video} type="video/mp4" />
        </video>
      </div>
      <div className="container-box">
        <div className="grid lg:grid-cols-12 grid-cols-1  gap-20">
          {/* Left Column: Image Carousel */}
          <div className="w-full  lg:col-span-8 col-span-1">
            <Carousel>
              <CarouselContent>
                {appeal.gallary.map((img, index) => (
                  <CarouselItem key={index}>
                    <Image
                      src={img}
                      alt={`Gallery Image ${index + 1}`}
                      width={800}
                      height={400}
                      className="w-full h-[440px] object-cover rounded-lg"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="lg:block hidden">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            </Carousel>
          </div>

          {/* Right Column: Donation Tab */}
          <div className="bg-white p-6 shadow-lg rounded-lg lg:col-span-4 col-span-1">
            <h2 className="text-2xl font-semibold text-blueColor mb-4">
              Donate Now
            </h2>

            <div className="flex flex-col gap-3">
              <div className="flex justify-between text-lg">
                <span className="font-medium text-darkGray">Goal:</span>
                <span className="font-semibold text-lightOrange">
                  ₹{appeal.goal}
                </span>
              </div>
              <div className="flex justify-between text-lg">
                <span className="font-medium text-darkGray">Raised:</span>
                <span className="font-semibold text-green-600">
                  ₹{appeal.raised}
                </span>
              </div>
              <div className="flex justify-between text-lg">
                <span className="font-medium text-darkGray">Remaining:</span>
                <span className="font-semibold text-red-500">
                  ₹{appeal.goal - appeal.raised}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3 mt-4">
              <Input
                className=" rounded-3xl bg-transparent border border-inputColor py-6 px-4"
                placeholder="Enter Name"
              />
              <Input
                className=" rounded-3xl bg-transparent border border-inputColor py-6 px-4"
                placeholder="Enter Email"
              />

              <Input
                className="bg-transparent border border-inputColor rounded-full h-full font-semibold p-4 px-7"
                placeholder="Amount"
              ></Input>
              <Button className="bg-lightOrange rounded-3xl font-semibold py-6  px-5">
                Make A Donation
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-box">
        <h4 className="text-blueColor text-3xl font-semibold">
          Related Latest Appeals
        </h4>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 mt-10">
          {/* Display the latest appeals */}
          {appealsData
            .filter((item) => item.slug !== slug) // Exclude the current appeal
            .slice(0, 3) // Limit to the latest 3 appeals
            .map((appeal) => (
              <ApealCard
                key={appeal?.slug}
                img={appeal?.img}
                tag={appeal?.tag}
                title={appeal?.title}
                description={appeal?.description}
                goal={appeal?.goal}
                raised={appeal?.raised}
                slug={appeal?.slug}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Appeal;
