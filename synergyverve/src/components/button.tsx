"use client";
import React from "react";
  
import { ArrowRight } from "lucide-react";

interface NavBarProps {
  text: string;
  href?: string;
  className?: string;
}

export default function NavBar({ text }: NavBarProps) {
  return (
    <button className="flex mt-4 items-center gap-2 bg-text text-white font-bold border-none rounded-full px-4 py-3 text-sm cursor-pointer uppercase">
           {text}
            <span className="flex justify-center items-center bg-accent text-white w-7 h-7 rounded-full">
              <ArrowRight size={16} />
            </span>
          </button>
  );
}