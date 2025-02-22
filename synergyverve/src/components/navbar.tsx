"use client";

import { useState } from "react";
import Image from "next/image";
import Logo from "../../assets/img/white-synergy3.png";
import { Geist, Geist_Mono } from "next/font/google";
import { Menu, X, ChevronDown } from "lucide-react";
import Button from "./button";


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
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header>
      <div className="bg-primary col-text text-sm py-2 px-4 md:px-8 text-center">
        NEWS: Simplify your group’s finances with a platform →
      </div>
      <nav className="flex items-center justify-between px-4 md:px-8 py-4 bg-text shadow-md">
        <div className="flex items-center space-x-4">
          <Image src={Logo} alt="Logo" width={250} height={250} />
        </div>
        <ul className="hidden md:flex space-x-6 relative">
          <li
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <a
              href="#"
              className="text-lg font-medium text-white hover:text-blue-600 flex items-center space-x-1 hover:text-blue-600"
            >
              <span>Features</span>
              <ChevronDown size={16} />
            </a>
            {dropdownOpen && (
              <div className="absolute left-0 mt-2 bg-text text-white shadow-lg rounded-lg w-48">
                <a
                  href="/feature1"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Feature 1
                </a>
                <a
                  href="/feature2"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Feature 2
                </a>
                <a
                  href="/feature3"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Feature 3
                </a>
              </div>
            )}
          </li>
          <li>
            <a
              href="/use-cases"
              className="text-lg font-medium text-white hover:text-blue-600"
            >
              Use Cases
            </a>
          </li>
          <li>
            <a
              href="/prices"
              className="text-lg font-medium text-white hover:text-blue-600"
            >
              Prices
            </a>
          </li>
          <li>
            <a
              href="/customers"
              className="text-lg font-medium text-white hover:text-blue-600"
            >
              Customers
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="text-lg font-medium text-white hover:text-blue-600"
            >
              About
            </a>
          </li>
        </ul>
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="/login"
            className="text-lg font-medium text-white hover:text-blue-600"
          >
            Log In
          </a>
          <a
            href="/get-started"
            className="px-4 py-2 bg-primary text-text rounded-lg hover:bg-blue-700 font-medium text-lg"
          >
            Get Started
          </a>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-text shadow-md absolute left-0 w-full p-4 space-y-4">
          <a href="/" className="block text-lg text-white hover:text-blue-600">
            Features
          </a>
          <a
            href="/use-cases"
            className="block text-lg text-white hover:text-blue-600"
          >
            Use Cases
          </a>
          <a
            href="/prices"
            className="block text-lg text-white hover:text-blue-600"
          >
            Prices
          </a>
          <a
            href="/customers"
            className="block text-lg text-white hover:text-blue-600"
          >
            Customers
          </a>
          <a
            href="/about"
            className="block text-lg text-white hover:text-blue-600"
          >
            About
          </a>
          <hr />
          <a
            href="/login"
            className="block text-lg text-white hover:text-blue-600"
          >
            Log In
          </a>
          
         <Button/>
        </div>
      )}
    </header>
  );
}
