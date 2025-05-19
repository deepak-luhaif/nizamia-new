'use client';

// import { Gallary } from "@/app/(website)/about/_components/Gallary";
import { Heart } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

import { useState } from 'react';
import { X } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    src: '/assets/images/what-we-do/healthcare/grid/Health_01.jpg',
    alt: 'Gallery Image 1',
    width: 520,
    height: 380,
  },
  {
    id: 2,
    src: '/assets/images/shoot/healthcare/1.png',
    alt: 'Gallery Image 2',
    width: 400,
    height: 500,
  },
  {
    id: 3,
    src: '/assets/images/what-we-do/healthcare/grid/Health_03.jpg',
    alt: 'Gallery Image 3',
    width: 400,
    height: 300,
  },
  {
    id: 4,
    src: '/assets/images/what-we-do/healthcare/grid/Health_05.jpg',
    alt: 'Gallery Image 4',
    width: 400,
    height: 500,
  },
  {
    id: 5,
    src: '/assets/images/shoot/healthcare/5.jpg',
    alt: 'Gallery Image 5',
    width: 500,
    height: 350,
  },
  {
    id: 6,
    src: '/assets/images/shoot/healthcare/14.jpg',
    alt: 'Gallery Image 6',
    width: 350,
    height: 450,
  },
  {
    id: 7,
    src: '/assets/images/shoot/healthcare/18.jpg',
    alt: 'Gallery Image 7',
    width: 400,
    height: 400,
  },

  {
    id: 9,
    src: '/assets/images/shoot/healthcare/9.jpg',
    alt: 'Gallery Image 9',
    width: 500,
    height: 420,
  },

  {
    id: 11,
    src: '/assets/images/what-we-do/healthcare/grid/Health_07.jpg',
    alt: 'Gallery Image 11',
    width: 400,
    height: 300,
  },
  {
    id: 11,
    src: '/assets/images/what-we-do/healthcare/grid/Health_06.jpg',
    alt: 'Gallery Image 11',
    width: 400,
    height: 300,
  },
];

// const ImageGrid = () => {
//   const [selectedImage, setSelectedImage] = useState<
//     (typeof galleryImages)[0] | null
//   >(null);

//   const openLightbox = (image: (typeof galleryImages)[0]) => {
//     setSelectedImage(image);
//   };

//   const closeLightbox = () => {
//     setSelectedImage(null);
//   };

//   return (
//     <div className="container-box border border-red-500">
//       <div className="flex flex-col items-center">
//         <div className="flex flex-row items-center">
//           <Heart className="text-orangeColor h-4 w-4" />
//           <span className="font-caveat text-lg text-orangeColor ml-1">
//             Healing Together
//           </span>
//         </div>
//         <div>
//           <h1 className="lg:text-5xl text-2xl font-semibold text-blueColor text-center">
//             Compassion in Action: Medical Aid for All.
//           </h1>
//         </div>
//       </div>
//       <div className="grid grid-cols-12 gap-10 mt-10    w-[100px]">
//         <div className="col-span-12">
//           <div className="relative">
//             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 rounded-xl  ">
//               {galleryImages.map((image, index) => (
//                 <div
//                   key={image.id}
//                   className={`cursor-pointer transition-all duration-300 hover:z-10 hover:scale-105 w-full h-full ${
//                     index % 5 === 0 ? "col-span-2 row-span-2" : ""
//                   }`}
//                   onClick={() => openLightbox(image)}
//                 >
//                   <div
//                     className={`relative w-full h-full border-4 border-white bg-white shadow-md hover:shadow-xl transition-shadow duration-300 ${
//                       index % 2 === 0 ? "rotate-1" : "-rotate-1"
//                     }`}
//                   >
//                     <Image
//                       src={image.src || "/placeholder.svg"}
//                       alt={image.alt}
//                       width={image.width}
//                       height={image.height}
//                       className="object-cover w-full h-full"
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* {selectedImage && (
//               <div
//                 className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
//                 onClick={closeLightbox}
//               >
//                 <div
//                   className="relative max-w-4xl max-h-[90vh] w-full"
//                   onClick={(e) => e.stopPropagation()}
//                 >
//                   <button
//                     className="absolute top-2 right-2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
//                     onClick={closeLightbox}
//                   >
//                     <X className="h-6 w-6" />
//                     <span className="sr-only">Close</span>
//                   </button>
//                   <div className="relative h-auto max-h-[90vh] w-full flex items-center justify-center">
//                     <Image
//                       src={selectedImage.src || "/placeholder.svg"}
//                       alt={selectedImage.alt}
//                       width={selectedImage.width}
//                       height={selectedImage.height}
//                       className="max-h-[90vh] w-auto object-contain"
//                     />
//                   </div>
//                 </div>
//               </div>
//             )} */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ImageGrid;

// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { X } from "lucide-react";

// // Gallery images array (18 images)
// const galleryImages = [
//   {
//     id: 1,
//     src: "/assets/images/oldpicks/1-01.png",
//     alt: "Gallery Image 1",
//     width: 520,
//     height: 380,
//   },
//   {
//     id: 2,
//     src: "/assets/images/oldpicks/1-02.png",
//     alt: "Gallery Image 2",
//     width: 400,
//     height: 500,
//   },
//   {
//     id: 3,
//     src: "/assets/images/oldpicks/1-03.png",
//     alt: "Gallery Image 3",
//     width: 400,
//     height: 300,
//   },
//   {
//     id: 4,
//     src: "/assets/images/oldpicks/1-04.png",
//     alt: "Gallery Image 4",
//     width: 400,
//     height: 500,
//   },
//   {
//     id: 5,
//     src: "/assets/images/oldpicks/1-05.png",
//     alt: "Gallery Image 5",
//     width: 500,
//     height: 350,
//   },
//   {
//     id: 6,
//     src: "/assets/images/oldpicks/1-06.png",
//     alt: "Gallery Image 6",
//     width: 350,
//     height: 450,
//   },
//   {
//     id: 7,
//     src: "/assets/images/oldpicks/1-07.png",
//     alt: "Gallery Image 7",
//     width: 400,
//     height: 400,
//   },
//   {
//     id: 8,
//     src: "/assets/images/oldpicks/1-08.png",
//     alt: "Gallery Image 8",
//     width: 480,
//     height: 350,
//   },
//   {
//     id: 9,
//     src: "/assets/images/oldpicks/1-09.png",
//     alt: "Gallery Image 9",
//     width: 500,
//     height: 420,
//   },
//   {
//     id: 10,
//     src: "/assets/images/oldpicks/1-10.png",
//     alt: "Gallery Image 10",
//     width: 450,
//     height: 380,
//   },
//   {
//     id: 11,
//     src: "/assets/images/oldpicks/1-11.png",
//     alt: "Gallery Image 11",
//     width: 400,
//     height: 300,
//   },
//   {
//     id: 12,
//     src: "/assets/images/oldpicks/1-12.png",
//     alt: "Gallery Image 12",
//     width: 350,
//     height: 500,
//   },
//   {
//     id: 13,
//     src: "/assets/images/oldpicks/1-13.png",
//     alt: "Gallery Image 13",
//     width: 500,
//     height: 450,
//   },
//   {
//     id: 14,
//     src: "/assets/images/oldpicks/1-14.png",
//     alt: "Gallery Image 14",
//     width: 400,
//     height: 350,
//   },
//   {
//     id: 15,
//     src: "/assets/images/oldpicks/1-15.png",
//     alt: "Gallery Image 15",
//     width: 420,
//     height: 400,
//   },
//   {
//     id: 16,
//     src: "/assets/images/oldpicks/1-16.png",
//     alt: "Gallery Image 16",
//     width: 400,
//     height: 500,
//   },
//   {
//     id: 17,
//     src: "/assets/images/oldpicks/1-17.png",
//     alt: "Gallery Image 17",
//     width: 500,
//     height: 380,
//   },
//   {
//     id: 18,
//     src: "/assets/images/oldpicks/1-18.png",
//     alt: "Gallery Image 18",
//     width: 450,
//     height: 420,
//   },
// ];

function Gallary() {
  const [selectedImage, setSelectedImage] = useState<
    (typeof galleryImages)[0] | null
  >(null);

  const openLightbox = (image: (typeof galleryImages)[0]) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className='mb-4 container-box'>
      <>
        <div className='flex flex-col items-center py-8'>
          <div className='flex flex-row items-center'>
            <Heart className='text-orangeColor h-4 w-4' />
            <span className='font-caveat text-lg text-orangeColor ml-1'>
              Healing Together
            </span>
          </div>
          <div>
            <h1 className='lg:text-4xl text-2xl font-semibold text-blueColor text-center'>
              Compassion in Action: Medical Aid for All
            </h1>
          </div>
        </div>
      </>

      <div className='relative '>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-0 rounded-xl'>
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`cursor-pointer transition-all duration-300 hover:z-10 hover:scale-105 ${
                index % 5 === 0 ? 'col-span-2 row-span-2' : ''
              }`}
              onClick={() => openLightbox(image)}
            >
              <div
                className={`relative w-full h-full border-4 border-white bg-white shadow-md hover:shadow-xl transition-shadow duration-300 ${
                  index % 2 === 0 ? 'rotate-1' : '-rotate-1'
                }`}
              >
                <Image
                  src={image.src || '/placeholder.svg'}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className='object-cover w-full h-full'
                />
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div
            className='fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4'
            onClick={closeLightbox}
          >
            <div
              className='relative max-w-4xl max-h-[90vh] w-full'
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className='absolute top-2 right-2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors'
                onClick={closeLightbox}
              >
                <X className='h-6 w-6' />
                <span className='sr-only'>Close</span>
              </button>
              <div className='relative h-auto max-h-[90vh] w-full flex items-center justify-center'>
                <Image
                  src={selectedImage.src || '/placeholder.svg'}
                  alt={selectedImage.alt}
                  width={selectedImage.width}
                  height={selectedImage.height}
                  className='max-h-[90vh] w-auto object-contain'
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Gallary;
