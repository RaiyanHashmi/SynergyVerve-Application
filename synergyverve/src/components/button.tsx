"use client";

import { useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { Menu, X } from "lucide-react"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <a
    href="/get-started"
    className="px-4 py-2 bg-primary text-text rounded-lg hover:bg-blue-700 font-medium text-lg"
  >
    Get Started
  </a>
  );
}
