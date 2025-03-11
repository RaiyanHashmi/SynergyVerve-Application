"use client";
import React from "react";
import Image from "next/image";
import { Meteors } from "./ui/meteors";
import transform from "../../public/transform.jpg";
const TransformSection: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-secondary  shadow-lg">
      {/* Left Text Section */}
      <div className="md:w-1/2 p-6">
        <span className="text-sm uppercase tracking-wide flex items-center gap-2 text-gray-600">
          🌟 Early Access
        </span>
        <h2 className="text-5xl font-light text-gray-700 leading-tight">
          Sign up for <span className="font-bold text-black">Dev Early Access</span>
        </h2>
        <p className="text-lg text-gray-700 mt-4">
          Be among the first to explore Synergy Verve’s powerful tools and resources 
          for building, deploying, and monetizing your business.
        </p>

        {/* Highlight Section */}
        <div className="mt-8 bg-yellow-200 p-6 rounded-lg">
          <p className="font-semibold text-black">Gain exclusive access to:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <p className="text-gray-800">🚀 End-to-end developer tools</p>
            <p className="text-gray-800">📊 High-quality datasets and models</p>
            <p className="text-gray-800">💰 New blockchain-based revenue streams</p>
          </div>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="md:w-1/2 p-6 flex justify-center">
        <div className="relative">
          <Image
            src={transform}
            width={400}
            height={300}
            alt="Synergy Verve"
            className="w-full max-w-sm md:max-w-md rounded-lg shadow-lg"
          />
          <span className="absolute top-4 left-4 bg-yellow-300 text-black text-xs px-3 py-1 rounded-full">
            Dev Early Access
          </span>
        </div>
      </div>
      
    </section>
  );
};

export default TransformSection;
