"use client";
import React from "react";
import { Meteors } from "./ui/meteors";
import Image from "next/image";

export function RevenueDrive() {
  const cardData = [
    {
      title: "Bring More Visitors to Your Website",
      description: [
        "SEO that gets you noticed online",
        "Local SEO to attract nearby customers",
        "Ecommerce SEO to boost product sales",
        "Content that engages and converts",
      ],
      image: "/ring.png", // Replace with actual image path
    },
    {
      title: "Convert Visitors into Customers",
      description: [
        "PPC campaigns that make the most of your budget",
        "Social ads to grow your audience fast",
        "Programmatic advertisements that reach the right people",
        "Geofencing to connect with local buyers",
      ],
      image: "/cube.png", // Replace with actual image path
    },
    {
      title: "Retain Customers & Increase Loyalty",
      description: [
        "Smart analytics to guide your decisions",
        "Call tracking so you never miss a lead",
        "Lead management tools to close deals faster",
      ],
      image: "/star.png", // Replace with actual image path
    },
    {
      title: "Optimize & Scale Your Business",
      description: [
        "Website designs that leave a lasting impression",
        "CRO to turn visitors into loyal customers",
        "Landing pages that drive action",
        "Social media management to build brand loyalty",
      ],
      image: "/tube.png", // Replace with actual image path
    },
  ];

  return (
    <>
      <h2 className="text-center text-xl md:text-4xl text-black dark:text-white md:text-6xl mt-7 font-bold">
        How We Drive Revenue
      </h2>
      <p className="text-center md:text-lg font-normal text-neutral-700 dark:text-neutral-200 max-w-4xl mt-2 mx-auto">
        Looking to grow your business? Our personalized marketing strategies are
        built by experts and powered by data to help you reach your revenue
        goals. Say goodbye to the hassle of working with multiple agencies.
        Let&apos;s get you the results you deserve.
      </p>

      {/* Container for Cards - Flex Row */}
      <div className="py-20 flex flex-wrap justify-center text-center gap-6 w-full px-8">
        {cardData.map((card, index) => (
          <div key={index} className="relative w-full max-w-xs">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] rounded-full blur-3xl" />
            <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-center items-center">
              {/* Card Image */}
              <Image
                src={card.image}
                alt={card.title}
                width={125}
                height={125}
                className="object-cover rounded-full mb-4 relative z-50"
              />

              <h4 className="font-bold text-xl text-primary mb-4 relative z-50">
                {card.title}
              </h4>

              {/* List Items for Description */}
              <ul className="list-disc pl-5 text-white mb-4 relative z-50 text-left">
                {card.description.map((item, i) => (
                  <li key={i} className="text-base">
                    {item}
                  </li>
                ))}
              </ul>

              {/* Meteor Effect */}
              <Meteors number={20} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
