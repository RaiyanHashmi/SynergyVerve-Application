"use client";
import React from "react";
import  Button  from "./button";

export function CareersSection() {
  const teamMembers = [
    { name: "Member 1", image: "/person1.jpg" },
    { name: "Member 2", image: "/person2.jpg" },
    { name: "Member 3", image: "/person3.jpg" },
    { name: "Member 4", image: "/person4.jpg" },
    { name: "Member 4", image: "/person5.jpg" },
    
  ];

  return (
    <section className=" bg-secondary rounded-3xl p-10 m-6 mx-20 md:p-16">
      <div className="flex flex-row items-start">
        {/* Left Column - 40% */}
        <div className="w-2/5">
          <span className="bg-primary text-text px-4 py-1 text-sm font-semibold rounded-full">
            Careers
          </span>
          <h2 className="text-6xl md:text-6xl font-bold text-text dark:text-white mt-4">
            Careers at SynergyVerve
          </h2>
        </div>

        {/* Right Column - 60% */}
        <div className="w-3/5">
          <p className="text-lg text-text mt-8 ps-4 dark:text-gray-300 max-w-3xl">
            Synergy Verve is more than just a digital marketing agency. It's a place
            for growth, creativity, and passion. Our expert marketers, designers,
            developers, and data analysts work together to create some of the most
            innovative work on the web. If you're passionate about digital marketing
            and ready to make an impact, check out our open positions.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="flex w-3/5 items-center  space-x-[-25px] mt-12">
        {teamMembers.map((member, index) => (
          <div key={index} className="relative  w-25 h-25 md:w-25 md:h-25">
            <img
              src={member.image}
              alt={member.name}
              className="w-25 h-25 rounded-full  object-cover border-4 border-white shadow-md"
            />
            
          </div>
        ))}
      </div>

      {/* Call to Action Button */}
      <a
        href="/careers"
        className="mt-6 inline-block bg-primary hover:bg-primary text-text font-semibold px-6 py-3 rounded-lg transition-all h-25 w-25"
      >
        View Open Positions →
      </a>
      
    </section>
  );
}
