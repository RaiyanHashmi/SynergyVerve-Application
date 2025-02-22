"use client";

import { useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { Menu, X } from "lucide-react";
import { HoverBorderGradient } from "./ui/HoverBorderGradient";
import '@/styles/globals.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
  const [isOpen, setIsOpen] = useState(false);

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