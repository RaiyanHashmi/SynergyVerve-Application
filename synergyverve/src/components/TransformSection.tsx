"use client";
import React from "react";
import Image from "next/image";

import transform from "../../public/transform.jpg";
const TransformSection: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-secondary  shadow-lg">
      {/* Left Text Section */}
      <div className="md:w-1/2 p-6 flex justify-center">
        <div className="relative">
          <Image
            src={transform}
            width={400}
            height={300}
            alt="Synergy Verve"
            className="w-full max-w-sm md:max-w-md rounded-lg shadow-lg"
          />
         
        </div>
      </div>

      {/* Right Image Section */}
    
      <div className="md:w-2/3 p-6">
      <span className=" bg-accent text-white text-sm px-3 py-2 rounded-full my-5">
            Transformation 
          </span>
        <h2 className="text-6xl font-bold text-text ">
          Transform Your Marketing into Revenue with Synergy Verve
        </h2>
        <p className="text-xl text-gray mt-4">
          The expert team of Synergy Verve, believes in the power of data to
          drive smarter, more profitable decisions. With our innovative tools
          and strategies, you’ll get clear insights that help you make confident
          moves and grow your business.
        </p>
        <p className="text-xl text-gray mt-4">
          Our platform, Synergy Verve, connects the dots between your marketing
          activities and actual sales. By understanding which efforts bring in
          the revenue, you can confidently reinvest in what works and adjust the
          rest. With Synergy Verve, you’ll always know exactly where to focus to
          drive growth.
        </p>

       
       
      </div>
    </section>
  );
};

export default TransformSection;
