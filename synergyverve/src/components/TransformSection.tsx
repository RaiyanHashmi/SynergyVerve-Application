"use client";
import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface TransformSectionProps {
  image: StaticImageData | string;
  imageAlt: string;
  tagText: string;
  title: string;
  description1: string;
  description2?: string; 
  description3?: string; 
  description4?: string; 
  imageOnLeft?: boolean; 
}

const TransformSection: React.FC<TransformSectionProps> = ({
  image,
  imageAlt,
  tagText,
  title,
  description1,
  description2,
  description3,
  description4,
  imageOnLeft = true,
}) => {
  // Create content sections
  const ImageSection = (
    <div className="md:w-1/2 p-6 flex justify-center">
      <div className="relative">
        <Image
          src={image}
          width={400}
          height={300}
          alt={imageAlt}
          className="w-full max-w-sm md:max-w-md rounded-lg shadow-lg"
        />
      </div>
    </div>
  );

  const ContentSection = (
    <div className="md:w-2/3 p-6">
      <span className="bg-primary text-white text-md px-3 py-3 rounded-full">
        {tagText}
      </span>
      <h2 className="text-6xl font-bold text-text mt-5">
        {title}
      </h2>
      <p className="text-xl text-gray mt-4">
        {description1}
      </p>
      {description2 && (
        <p className="text-xl text-gray mt-4">
          {description2}
        </p>
      )}
      {description3 && (
        <p className="text-xl text-gray mt-4">
          {description3}
        </p>
      )}
      {description4 && (
        <p className="text-xl text-gray mt-4">
          {description4}
        </p>
      )}
    </div>
  );

  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-secondary shadow-lg">
      {/* Conditionally order the content based on imageOnLeft prop */}
      {imageOnLeft ? (
        <>
          {ImageSection}
          {ContentSection}
        </>
      ) : (
        <>
          {ContentSection}
          {ImageSection}
        </>
      )}
    </section>
  );
};

export default TransformSection;