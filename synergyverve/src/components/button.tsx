"use client";
import React, { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

interface NavBarProps {
  text: string;
  href?: string;
  className?: string;
}

export default function NavBar({ text }: NavBarProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      className="flex mt-4 items-center gap-2 bg-text text-white font-bold border-none rounded-full px-4 py-3 text-sm cursor-pointer uppercase transition-all duration-300 ease-in-out hover:bg-accent"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {text}
      <span className="flex justify-center items-center bg-accent text-white w-7 h-7 rounded-full transition-all duration-300 ease-in-out hover:bg-white hover:text-accent">
        {hovered ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
      </span>
    </button>
  );
}
