import Image from "next/image";
import React from "react";
 import { Timeline } from "@/components/ui/timeline";


export function Footer(): React.JSX.Element {
  
  return (
    <footer className="bg-gray-100 py-10 text-gray-700">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row justify-between">
        {/* Left Section */}
        <div className="mb-6 md:mb-0">
          <div className="flex items-center space-x-2">
            <div className="bg-blue-500 text-white p-2 rounded-full">
              <span className="text-xl">📌</span>
            </div>
            <h2 className="text-xl font-semibold">Mantine</h2>
          </div>
          <p className="mt-2 text-sm max-w-xs">
            Build fully functional accessible web applications faster than ever
          </p>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-2">About</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:underline">Features</a></li>
              <li><a href="#" className="hover:underline">Pricing</a></li>
              <li><a href="#" className="hover:underline">Support</a></li>
              <li><a href="#" className="hover:underline">Forums</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Project</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:underline">Contribute</a></li>
              <li><a href="#" className="hover:underline">Media assets</a></li>
              <li><a href="#" className="hover:underline">Changelog</a></li>
              <li><a href="#" className="hover:underline">Releases</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Community</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:underline">Join Discord</a></li>
              <li><a href="#" className="hover:underline">Follow on Twitter</a></li>
              <li><a href="#" className="hover:underline">Email newsletter</a></li>
              <li><a href="#" className="hover:underline">GitHub discussions</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 text-center text-sm text-gray-500">
        <p>&copy; 2020 mantine.dev. All rights reserved.</p>
        <div className="mt-2 flex justify-center space-x-4 text-gray-600">
          <a href="#" className="hover:text-gray-900">🐦</a>
          <a href="#" className="hover:text-gray-900">📺</a>
          <a href="#" className="hover:text-gray-900">📸</a>
        </div>
      </div>
    </footer>
  );
}
