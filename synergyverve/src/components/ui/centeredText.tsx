import React from "react";
import Button from "../button";

const centeredText: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-10 min-h-screen bg-white overflow-hidden p-6">
      {/* Floating Images */}
      <img
        src="/4.jpg"
        alt="Coffee"
        className="absolute top-10 left-0 transform -translate-x-1/2 w-28 h-28 object-cover rotate-6 animate-float"
      />
      <img
        src="/3.jpg"
        alt="Dog"
        className="absolute top-0 right-10 w-32 h-32 object-cover rotate-12 animate-bounce-slow delay-100"
      />
      <img
        src="/2.jpg"
        alt="Headphones Girl"
        className=" absolute bottom-28 left-10 w-32 h-32 object-cover -rotate-12 animate-bounce-slow delay-200"
      />
      <img
        src="/1.jpg"
        alt="Sneakers"
        className=" absolute bottom-10 right-20 w-32 h-32 object-cover rotate-3 animate-bounce-slow  delay-300"
      />

      {/* Main Text */}
      <h1 className="text-7xl md:text-7xl font-bold leading-snug">
        We drive long-term growth by <br />
        <span>
          🔍 attracting, 💬 engaging, 🛒 converting,
        </span> <br />
        and delighting your audience.
      </h1>

      {/* Button */}
      <div className="  mt-8 flex flex-col items-center gap-4">
              <Button text="Contact Us Now"/>
              </div>
    </section>
  );
};

export default centeredText;
