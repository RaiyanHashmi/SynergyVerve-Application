import Image from "next/image";
import logo from "../../assets/img/white-synergy3.png";
import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";


const services = [
  {
    category: "Data Engineering",
    subcategories: [
      {
        name: "Data Pipeline Development",
        link: "/services/DataEngineering/data-pipeline-development",
      },
      { name: "Cloud Data Solutions", link: "/services/DataEngineering/cloud-data-solutions" },
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
    category: "IoT development",
    subcategories: [
      { name: "IoT Data Processing", link: "/services/IoTDataProcessing" },
      { name: "Edge AI", link: "/services/EdgeAI" },
      { name: "Quantum ML", link: "/services/quantumML" },
    ],
  },
  {
    category: "SEO" ,link: "/services/Seo",
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
      { name: "Training & Workshops", link: "/services/trainingAndWorkshops" },
    ],
  },
];

const MegaMenu = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const servicesTriggerRef = useRef<HTMLDivElement>(null);

  // Handle clicks outside the mega menu to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        megaMenuRef.current &&
        !megaMenuRef.current.contains(event.target as Node) &&
        servicesTriggerRef.current &&
        !servicesTriggerRef.current.contains(event.target as Node)
      ) {
        setMegaMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleMobileServices = () => setServicesOpen(!servicesOpen);

  const handleServicesMouseEnter = () => setMegaMenuOpen(true);

  // We don't close on mouse leave anymore, we rely on clicking outside
  // or clicking another navigation item

  return (
    <div className="relative">
      {/* Main Header */}
      <header className="h-24 px-6 backdrop-blur-sm bg-white/15 shadow-lg rounded-xl border border-white/20 flex items-center justify-between">
        {/* Logo */}
        <Image src={logo} width={250} height={50} alt="Synergy Verve" />

        {/* Desktop Navigation */}
        <div className="hidden lg:flex h-full ">
          <a
            href="#"
            className="hover:text-accent h-full px-6 no-underline text-xl font-bold flex items-center hover:bg-gray-100/10"
          >
            HOME
          </a>
          <a
            href="#"
            className="hover:text-accent h-full px-6 no-underline text-xl font-bold flex items-center hover:bg-gray-100/10"
          >
            ABOUT
          </a>
          <div
            className="h-full relative hover:text-accent"
            ref={servicesTriggerRef}
            onMouseEnter={handleServicesMouseEnter}
          >
            <a
              href="#"
              className="hover:text-accent h-full px-6 no-underline text-xl font-bold flex items-center hover:bg-gray-100/10"
            >
              <span className="mr-1">SERVICES</span>
              <ChevronDown size={16} />
            </a>
          </div>

          <a
            href="#"
            className="hover:text-accent h-full px-6 no-underline text-xl font-bold flex items-center hover:bg-gray-100/10"
            onClick={() => setMegaMenuOpen(false)}
          >
            BLOG
          </a>
          <a
            href="#"
            className="hover:text-accent h-full px-6 no-underline text-xl font-bold flex items-center hover:bg-gray-100/10"
            onClick={() => setMegaMenuOpen(false)}
          >
            CONTACT
          </a>
        </div>

        {/* Contact Button */}
        <div className="hidden lg:block">
          <button
            className="flex items-center gap-2 bg-text text-white font-bold border-none rounded-full px-4 py-3 text-sm cursor-pointer uppercase"
            onClick={() => setMegaMenuOpen(false)}
          >
            CONTACT US NOW
            <span className="flex justify-center items-center bg-accent text-white w-7 h-7 rounded-full">
              <ArrowRight size={16} />
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden p-2" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mega Menu Dropdown  */}
      {megaMenuOpen && (
        <div
          ref={megaMenuRef}
          className="fixed top-24 left-0 w-full bg-white/95 dark:bg-text/95 backdrop-blur-md shadow-lg overflow-hidden z-50 max-h-[90vh] overflow-y-auto"
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between px-6 pt-4">
              <p className="font-medium">Our Services</p>
              <a href="#" className="text-xs text-blue-500">
                View all
              </a>
            </div>

            <hr className="my-4 border-gray-200 dark:border-gray-700" />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-6 pb-6">
              {services.map((service) => (
                <div key={service.category} className="mb-4">
                  <a
                          href={service.link}
                          className="block w-full py-1 px-2 rounded-md hover:bg-gray-100/20  font-bold text-lg"
                        >
                          {service.category}
                        </a>
                  <div className="space-y-1">
                    {service.subcategories.map((sub) => (
                      <div key={sub.name}>
                        <a
                          href={sub.link}
                          className="block w-full py-1 px-2 rounded-md hover:bg-gray-100/20 no-underline font-normal text-sm"
                        >
                          {sub.name}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white dark:bg-text z-50 lg:hidden pt-24 overflow-y-auto">
          <div className="px-4 py-2">
            <a
              href="#"
              className="block px-4 py-3 text-xl font-bold hover:bg-gray-100/10 dark:hover:bg-gray-800/50 rounded-lg"
            >
              HOME
            </a>
            <a
              href="#"
              className="block px-4 py-3 text-xl font-bold hover:bg-gray-100/10 dark:hover:bg-gray-800/50 rounded-lg"
            >
              ABOUT
            </a>

            <button
              className="flex items-center justify-between w-full px-4 py-3 text-xl font-bold hover:bg-gray-100/10 dark:hover:bg-gray-800/50 rounded-lg"
              onClick={toggleMobileServices}
            >
              <span>SERVICES</span>
              <ChevronDown size={16} />
            </button>

            {servicesOpen && (
              <div className="pl-4 max-h-96 overflow-y-auto">
                {services.map((service) => (
                  <div key={service.category} className="mt-4">
                    <p className="font-bold text-lg px-4">{service.category}</p>
                    {service.subcategories.map((sub) => (
                      <a
                        key={sub.name}
                        href={sub.link}
                        className="block px-4 py-2 hover:bg-gray-100/10 dark:hover:bg-gray-800/50 rounded-lg mt-1"
                      >
                        {sub.name}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            )}

            <a
              href="#"
              className="block px-4 py-3 text-xl font-bold hover:bg-gray-100/10 dark:hover:bg-gray-800/50 rounded-lg"
            >
              BLOG
            </a>
            <a
              href="#"
              className="block px-4 py-3 text-xl font-bold hover:bg-gray-100/10 dark:hover:bg-gray-800/50 rounded-lg"
            >
              CONTACT
            </a>

            <div className="mt-6 px-4 py-4">
              <button className="flex items-center justify-center gap-2 bg-text text-white font-bold border-none rounded-full px-6 py-3 text-sm cursor-pointer uppercase w-full">
                CONTACT US NOW
                <span className="flex justify-center items-center bg-accent text-black w-7 h-7 rounded-full">
                  <ArrowRight size={16} />
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MegaMenu;
