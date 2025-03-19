import Image from "next/image";
import logo from "../../assets/img/white-synergy3.png";
import React from "react";
import {
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import EmailBar from "./emailBar";

const Footer = () => {
  

  const services = [
    {
      category: "Data Engineering",
      subcategories: [
        {
          name: "Data Pipeline Development",
          link: "/services/DataEngineering/data-pipeline-development",
        },
        {
          name: "Cloud Data Solutions",
          link: "/services/cloud-data-solutions",
        },
        {
          name: "Data Warehousing & Lakes",
          link: "/services/data-warehousingAndLakes",
        },
        {
          name: "ETL & Real-Time Streaming",
          link: "/services/etl-real-time-streaming",
        },
        { name: "Data Migration", link: "/services/dataMigration" },
        { name: "Data Governance", link: "/services/dataGovernance" },
        {
          name: "Real-Time Data Streaming",
          link: "/services/realTimeDataStreaming",
        },
        { name: "Data Integration", link: "/services/dataIntegration" },
        {
          name: "Data Governance & Compliance",
          link: "/services/dataGovernanceAndCompliance",
        },
      ],
    },
    {
      category: "Advanced Analytics & Business Intelligence",
      subcategories: [
        { name: "Business Intelligence (BI)", link: "/services/BI" },
        {
          name: "Predictive & Statistical Modeling",
          link: "/services/predictiveAndStatisticalModeling",
        },
        { name: " Customer Insights", link: "/services/customerInsights" },
        { name: " Anomaly Detection", link: "/services/anomalyDetection" },
        { name: " Big Data Analytics", link: "/services/bigDataAnalytics" },
      ],
    },
    {
      category: "Artificial Intelligence & Machine Learning",
      subcategories: [
        {
          name: "Custom AI/ML Development",
          link: "/services/customAI-MLDevelopment",
        },
        { name: "Industry-Specific AI", link: "/services/industrySpecificAI" },
        { name: "MLOps & Deployment", link: "/services/MLOpsAndDeployment" },
        {
          name: "AI Chatbots & Virtual Assistants",
          link: "/services/AIchatbotsAndVirtualAssistants",
        },
        { name: "Ethical AI", link: "/services/ethicalAI" },
      ],
    },
    {
      category: "Software Engineering & Development",
      subcategories: [
        { name: "API Development", link: "/services/APIDevelopment" },
        { name: "Web Development", link: "/services/webDevelopment" },
        { name: "Mobile Apps", link: "/services/mobiileApps" },
        { name: "CMS & E-Commerce", link: "/services/CMSandE-Commerce" },
      ],
    },
    {
      category: "Cloud Services & DevOps",
      subcategories: [
        { name: "Cloud Infrastructure", link: "/services/cloudInfrastructure" },
        { name: "DevOps Automation", link: "/services/DevOpsAutomation" },
        { name: "Infrastructure as Code (IaC)", link: "/services/IAC" },
        { name: "Serverless Solutions", link: "/services/serverlessSolutions" },
      ],
    },
    {
      category: "SEO",
      subcategories: [
        { name: "Digital Strategy", link: "/services/Seo/DigitalStrategy" },
        {
          name: "Social Media Management",
          link: "/services/Seo/SocialMediaManagement",
        },
        { name: "Branding", link: "/services/Seo/Branding" },
        { name: "Content Production", link: "/services/Seo/ContentProduction" },
      ],
    },
    {
      category: "IoT development",
      subcategories: [
        { name: "IoT Data Processing", link: "/services/IoTDataProcessing" },
        { name: "Edge AI", link: "/services/EdgeAI" },
        { name: "Quantum ML", link: "/services/quantumML" },
      ],
    },
    {
      category: "E-Commerce & CRM Solutions",
      subcategories: [
        { name: "Platform Development", link: "/services/platformDevelopment" },
        { name: "CRM Integration", link: "/services/CRMIntegration" },
        { name: "Payment Gateways", link: "/services/paymentGateways" },
      ],
    },
    {
      category: "Cybersecurity & Compliance",
      subcategories: [
        { name: "Data Encryption", link: "/services/dataEncryption" },
        { name: "Access Controls", link: "/services/accessControls" },
        { name: "Compliance Audits", link: "/services/complianceAudits" },
      ],
    },
    {
      category: "Consulting & Strategy",
      subcategories: [
        { name: "Data Monetization", link: "/services/dataMonetization" },
        {
          name: "Digital Transformation Roadmaps",
          link: "/services/digitalTransformationRoadmaps",
        },
        {
          name: "Training & Workshops",
          link: "/services/trainingAndWorkshops",
        },
      ],
    },
   
  ];

  return (
    <footer className="backdrop-blur-sm bg-white/15 shadow-lg rounded-xl border border-white/20 mt-12">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and About */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Image src={logo} width={250} height={50} alt="Synergy Verve" />
            </div>
            <p className="text-sm mb-6">
              Your world-class, tech-powered digital marketing agency with over
              3 million hours of combined expertise. Our team is dedicated to
              delivering personalized strategies that provide measurable results
              so your business grows digitally.
            </p>
            <EmailBar />
            <div className="flex mt-5 space-x-4">
              <a
                href="#"
                className="p-2 bg-gray-100/10 rounded-full hover:bg-gray-100/20"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-100/10 rounded-full hover:bg-gray-100/20"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-100/10 rounded-full hover:bg-gray-100/20"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-100/10 rounded-full hover:bg-gray-100/20"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Column 2-4: Services (similar to mega menu) */}
          {services.map((service) => (
            <div key={service.category} className="lg:col-span-1">
              <h3 className="font-bold text-lg mb-4">{service.category}</h3>
              <ul className="space-y-2">
                {service.subcategories.map((sub) => (
                  <li key={sub.name}>
                    <a href={sub.link} className="text-sm hover:underline">
                      {sub.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 py-8 border-t border-white/20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="flex items-center">
              <Mail size={20} className="mr-3" />
              <span className="text-sm">info@synergyverve.com</span>
            </div>
            <div className="flex items-center">
              <Phone size={20} className="mr-3" />
              <span className="text-sm">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <MapPin size={20} className="mr-3" />
              <span className="text-sm">123 Tech Plaza, San Francisco, CA</span>
            </div>
          </div>
        </div>

        {/* Bottom bar with CTA - similar to header */}
        <div className="mt-8 flex flex-col lg:flex-row justify-between items-center">
          <p className="text-sm mb-4 lg:mb-0">
            © 2025 Synergy Verve. All rights reserved.
          </p>
          <button className="flex items-center gap-2 bg-text text-white font-bold border-none rounded-full px-4 py-3 text-sm cursor-pointer uppercase">
            CONTACT US NOW
            <span className="flex justify-center items-center bg-accent text-white w-7 h-7 rounded-full">
              <ArrowRight size={16} />
            </span>
          </button>
        </div>
      </div>

      {/* Bottom navigation - simplified version of header nav */}
      <div className="bg-gray-100/10 border-t border-gray-200/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-wrap justify-center lg:justify-between items-center">
            <div className="flex flex-wrap justify-center space-x-4 mb-4 lg:mb-0">
              <a
                href="#"
                className="px-3 py-2 text-sm font-bold hover:bg-gray-100/10 rounded-md"
              >
                HOME
              </a>
              <a
                href="#"
                className="px-3 py-2 text-sm font-bold hover:bg-gray-100/10 rounded-md"
              >
                ABOUT
              </a>
              <a
                href="#"
                className="px-3 py-2 text-sm font-bold hover:bg-gray-100/10 rounded-md"
              >
                SERVICES
              </a>
              <a
                href="#"
                className="px-3 py-2 text-sm font-bold hover:bg-gray-100/10 rounded-md"
              >
                BLOG
              </a>
              <a
                href="#"
                className="px-3 py-2 text-sm font-bold hover:bg-gray-100/10 rounded-md"
              >
                CONTACT
              </a>
            </div>
            <div className="text-xs text-center lg:text-right">
              <a href="#" className="mr-4 hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="hover:underline">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
