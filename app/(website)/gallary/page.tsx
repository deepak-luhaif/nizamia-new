'use client';

import Image from 'next/image';
import { useState } from 'react';

const images = [
  '/assets/images/portrait-female-pediatrician-work.jpg',
  '/assets/images/man-two-children-are-cooking-food-kitchen.jpg',
  '/assets/images/portrait-female-pediatrician-work.jpg',
  '/assets/images/man-two-children-are-cooking-food-kitchen.jpg',
  '/assets/images/portrait-female-pediatrician-work.jpg',
  '/assets/images/man-two-children-are-cooking-food-kitchen.jpg',
  '/assets/images/portrait-female-pediatrician-work.jpg',
  '/assets/images/man-two-children-are-cooking-food-kitchen.jpg',
  '/assets/images/portrait-female-pediatrician-work.jpg',
  '/assets/images/man-two-children-are-cooking-food-kitchen.jpg',
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="breadcrumb container-box flex flex-col justify-center mt-[135px]">
        <h2 className="text-blueColor font-semibold text-3xl">Gallary</h2>
        <p className="text-darkGray">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
          esse?
        </p>
      </div>
      <div className="container-box">
        {/* Grid Layout for Images */}
        <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-3 gap-10">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative cursor-pointer rounded-lg overflow-hidden shadow-md transform transition duration-300 hover:scale-105"
              onClick={() => setSelectedImage(img)}
            >
              <Image
                src={img}
                alt={`Gallery Image ${index + 1}`}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-56 object-cover"
              />
            </div>
          ))}
        </div>

        {/* Modal for Enlarged Image */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl mx-auto p-4">
              <button
                className="absolute top-4 right-10 text-white text-6xl "
                onClick={() => setSelectedImage(null)}
              >
                &times;
              </button>
              <Image
                src={selectedImage}
                alt="Selected"
                width={900}
                height={600}
                className="w-auto h-auto max-h-[80vh] mx-auto rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
