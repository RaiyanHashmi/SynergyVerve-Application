"use client";

import React from "react";
import { HoverBorderGradient } from "./ui/HoverBorderGradient";
import '@/styles/globals.css';

interface NavBarProps {
  text: string;
  href?: string;
  className?: string;
}

export default function NavBar({ 
  text = "Get Started", 
  href = "/get-started",
  className = ""
}: NavBarProps) {
  return (
    <a
      href={href}
      className={`px-4 py-2 bg-primary text-text rounded-lg font-medium text-lg col_text ${className}`}
    >
      <div className="flex justify-center text-center">
        <HoverBorderGradient>
          <span>{text}</span>
        </HoverBorderGradient>
      </div>
    </a>
  );
}