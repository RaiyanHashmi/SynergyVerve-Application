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
  const [dropdownOpen, setDropdownOpen] = useState(null);

  return (
    <header>
      <div className="bg-primary col-text text-sm py-2 px-4 md:px-8 text-center">
        NEWS: Simplify your group’s finances with a platform →
      </div>
      <nav className="flex items-center justify-between px-6 md:px-12 py-5 bg-text shadow-lg">
        <div className="flex items-center space-x-6">
          <Image src={Logo} alt="Logo" width={200} height={200} />
        </div>
        <ul className="hidden md:flex space-x-8 relative">
          {[ 
            { name: "Data Engineering", link: "/data-engineering", sub: ["Data Pipeline Development", "Cloud Data Solutions", "Data Warehousing & Lakes", "ETL/ELT & Real-Time Streaming", "Data Migration", "Data Governance"] },
            { name: "Advanced Analytics & BI", link: "/analytics-bi", sub: ["Business Intelligence", "Predictive & Statistical Modeling", "Customer Insights", "Anomaly Detection", "Big Data Analytics"] },
            { name: "AI & Machine Learning", link: "/ai-ml", sub: ["Custom AI/ML Development", "Industry-Specific AI", "MLOps & Deployment", "AI Chatbots & Virtual Assistants", "Ethical AI"] },
            { name: "Software Development", link: "/software-development", sub: ["API Development", "Web Development", "Mobile Apps", "CMS & E-Commerce"] },
            { name: "Cloud & DevOps", link: "/cloud-devops", sub: ["Cloud Infrastructure", "DevOps Automation", "Serverless Solutions", "Infrastructure as Code"] },
            { name: "IoT Development", link: "/iot", sub: ["IoT Data Processing", "Edge AI", "Quantum ML"] },
            { name: "E-Commerce & CRM", link: "/ecommerce-crm", sub: ["Platform Development", "CRM Integration", "Payment Gateways"] },
            { name: "Cybersecurity", link: "/cybersecurity", sub: ["Data Encryption", "Access Controls", "Compliance Audits"] },
            { name: "Consulting & Strategy", link: "/consulting-strategy", sub: ["Data Monetization", "Digital Transformation Roadmaps", "Training & Workshops"] }
          ].map((item, index) => (
            <li
              key={index}
              className="relative group"
            >
              <a href={item.link} className="text-lg font-medium text-white hover:text-primary transition flex items-center space-x-1">
                <span>{item.name}</span>
                <ChevronDown size={16} />
              </a>
              <div className="absolute left-0 mt-2 bg-white text-black shadow-xl rounded-lg w-64 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {item.sub.map((subItem, subIndex) => (
                  <a key={subIndex} href={`${item.link}#${subItem.toLowerCase().replace(/ /g, "-")}`} className="block px-4 py-3 hover:bg-gray-200">
                    {subItem}
                  </a>
                ))}
              </div>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex items-center space-x-5">
          <a href="/login" className="text-lg font-medium text-white hover:text-primary transition">
            Log In
          </a>
          <a href="/get-started" className="px-5 py-3 bg-primary text-text rounded-xl shadow-md hover:bg-blue-700 transition font-medium text-lg">
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
    </header>
  );
}
