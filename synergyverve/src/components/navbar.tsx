// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Logo from "../../assets/img/white-synergy3.png";
// import { Menu, X, ChevronDown } from "lucide-react";

// export default function NavBar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const services = [
//     {
//       category: "Data Engineering",
//       subcategories: [
//         { name: "Data Pipeline Development", link: "/services/data-pipeline-development" },
//         { name: "Cloud Data Solutions", link: "/services/cloud-data-solutions" },
//         { name: "Data Warehousing & Lakes", link: "/services/data-warehousingAndLakes" },
//         { name: "ETL & Real-Time Streaming", link: "/services/etl-real-time-streaming" },
//         { name: "Data Migration", link: "/services/dataMigration" },
//         { name: "Data Governance", link: "/services/dataGovernance" },
//         { name: "Real-Time Data Streaming", link: "/services/realTimeDataStreaming" },
//         { name: "Data Integration", link: "/services/dataIntegration" },
//         { name: "Data Governance & Compliance", link: "/services/dataGovernanceAndCompliance" },
//       ],
//     },
//     {
//       category: "Advanced Analytics & Business Intelligence",
//       subcategories: [
//         { name: "Business Intelligence (BI)", link: "/services/BI" },
//         { name: "Predictive & Statistical Modeling", link: "/services/predictiveAndStatisticalModeling" },
//         { name: " Customer Insights", link: "/services/customerInsights" },
//         { name: " Anomaly Detection", link: "/services/anomalyDetection" },
//         { name: " Big Data Analytics", link: "/services/bigDataAnalytics" },
//       ],
//     },
//     {
//       category: "Artificial Intelligence & Machine Learning",
//       subcategories: [
//         { name: "Custom AI/ML Development", link: "/services/customAI-MLDevelopment" },
//         { name: "Industry-Specific AI", link: "/services/industrySpecificAI" },
//         { name: "MLOps & Deployment", link: "/services/MLOpsAndDeployment" },
//         { name: "AI Chatbots & Virtual Assistants", link: "/services/AIchatbotsAndVirtualAssistants" },
//         { name: "Ethical AI", link: "/services/ethicalAI" },
//       ],
//     },
//     {
//       category: "Software Engineering & Development",
//       subcategories: [
//         { name: "API Development", link: "/services/APIDevelopment" },
//         { name: "Web Development", link: "/services/webDevelopment" },
//         { name: "Mobile Apps", link: "/services/mobiileApps" },
//         { name: "CMS & E-Commerce", link: "/services/CMSandE-Commerce" },
//       ],
//     },
//     {
//       category: "Cloud Services & DevOps",
//       subcategories: [
//         { name: "Cloud Infrastructure", link: "/services/cloudInfrastructure" },
//         { name: "DevOps Automation", link: "/services/DevOpsAutomation" },
//         { name: "Infrastructure as Code (IaC)", link: "/services/IAC" },
//         { name: "Serverless Solutions", link: "/services/serverlessSolutions" },
//       ],
//     },
//     {
//       category: "IoT development",
//       subcategories: [
//         { name: "IoT Data Processing", link: "/services/IoTDataProcessing" },
//         { name: "Edge AI", link: "/services/EdgeAI" },
//         { name: "Quantum ML", link: "/services/quantumML" },
//       ],
//     },
//     {
//       category: "E-Commerce & CRM Solutions",
//       subcategories: [
//         { name: "Platform Development", link: "/services/platformDevelopment" },
//         { name: "CRM Integration", link: "/services/CRMIntegration" },
//         { name: "Payment Gateways", link: "/services/paymentGateways" },
//       ],
//     },
//     {
//       category: "Cybersecurity & Compliance",
//       subcategories: [
//         { name: "Data Encryption", link: "/services/dataEncryption" },
//         { name: "Access Controls", link: "/services/accessControls" },
//         { name: "Compliance Audits", link: "/services/complianceAudits" },
//       ],
//     },
//     {
//       category: "Consulting & Strategy",
//       subcategories: [
//         { name: "Data Monetization", link: "/services/dataMonetization" },
//         { name: "Digital Transformation Roadmaps", link: "/services/digitalTransformationRoadmaps" },
//         { name: "Training & Workshops", link: "/services/trainingAndWorkshops" },
//       ],
//     },
//   ];

//   return (
//     <header className="relative">
//       <nav className="flex items-center justify-between px-6 md:px-12 py-5 bg-text text-white">
//         <div className="flex items-center space-x-6">
//           <Image src={Logo} alt="Logo" width={150} height={50} />
//         </div>

//         {/* Desktop Navigation */}
//         <div className="hidden md:block relative">
//           <ul className="flex space-x-6">
//             <li className="relative group">
//               <button className="flex items-center text-white hover:text-gray-400">
//                 Services <ChevronDown size={16} className="ml-1" />
//               </button>
              
//               <div className="absolute left-0 top-0 mt-6 w-full bg-black text-white shadow-lg rounded-md p-6 grid grid-cols-3 gap-6 opacity-0  group-hover:opacity-100 group-hover:visible transition-all duration-300">
//                 {services.map((service, index) => (
//                   <div key={index} className="min-w-60">
//                     <h3 className="font-bold text-primary mb-2">{service.category}</h3>
//                     <ul className="space-y-1">
//                       {service.subcategories.map((sub, subIndex) => (
//                         <li key={subIndex}>
//                           <a href={sub.link} className="block text-gray-400 hover:text-white transition">
//                             {sub.name}
//                           </a>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 ))}
//               </div>
//             </li>
//             {['Technologies', 'Company', 'Case Studies', 'Resources', 'Contact Us'].map((item, index) => (
//               <li key={index}>
//                 <a href="#" className="text-white hover:text-gray-400">{item}</a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Mobile Menu */}
//         <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </nav>

//       {/* Mobile Dropdown Menu */}
//       {isOpen && (
//         <div className="md:hidden absolute left-0 mt-2 w-64 bg-black text-white shadow-lg z-50 bg-black text-white w-full absolute top-full left-0 shadow-lg p-5">
//           <ul className="space-y-4">
//             {services.map((service, index) => (
//               <li key={index}>
//                 <span className="font-bold text-primary">{service.category}</span>
//                 <ul className="pl-4 mt-2 space-y-1">
//                   {service.subcategories.map((sub, subIndex) => (
//                     <li key={subIndex}>
//                       <a href={sub.link} className="block text-gray-400 hover:text-white transition">{sub.name}</a>
//                     </li>
//                   ))}
//                 </ul>
//               </li>
//             ))}
//             {['Technologies', 'Company', 'Case Studies', 'Resources', 'Contact Us'].map((item, index) => (
//               <li key={index}>
//                 <a href="#" className="block text-white hover:text-gray-400">{item}</a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </header>
//   );
// }


"use client";

import { useState } from "react";
import Image from "next/image";
import Logo from "../../assets/img/white-synergy3.png";
import { Menu, X, ChevronDown } from "lucide-react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  interface Subcategory {
    name: string;
    link: string;
  }

  interface Service {
    category: string;
    subcategories: Subcategory[];
  }

  const services: Service[] = [
    {
      category: "Data Engineering",
      subcategories: [
        { name: "Data Pipeline Development", link: "/services/data-pipeline-development" },
        { name: "Cloud Data Solutions", link: "/services/cloud-data-solutions" },
        { name: "Data Warehousing & Lakes", link: "/services/data-warehousingAndLakes" },
        { name: "ETL & Real-Time Streaming", link: "/services/etl-real-time-streaming" },
        { name: "Data Migration", link: "/services/dataMigration" },
        { name: "Data Governance", link: "/services/dataGovernance" },
        { name: "Real-Time Data Streaming", link: "/services/realTimeDataStreaming" },
        { name: "Data Integration", link: "/services/dataIntegration" },
        { name: "Data Governance & Compliance", link: "/services/dataGovernanceAndCompliance" },
      ],
    },
    {
      category: "Advanced Analytics & Business Intelligence",
      subcategories: [
        { name: "Business Intelligence (BI)", link: "/services/BI" },
        { name: "Predictive & Statistical Modeling", link: "/services/predictiveAndStatisticalModeling" },
        { name: " Customer Insights", link: "/services/customerInsights" },
        { name: " Anomaly Detection", link: "/services/anomalyDetection" },
        { name: " Big Data Analytics", link: "/services/bigDataAnalytics" },
      ],
    },
    {
      category: "Artificial Intelligence & Machine Learning",
      subcategories: [
        { name: "Custom AI/ML Development", link: "/services/customAI-MLDevelopment" },
        { name: "Industry-Specific AI", link: "/services/industrySpecificAI" },
        { name: "MLOps & Deployment", link: "/services/MLOpsAndDeployment" },
        { name: "AI Chatbots & Virtual Assistants", link: "/services/AIchatbotsAndVirtualAssistants" },
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
        { name: "Digital Transformation Roadmaps", link: "/services/digitalTransformationRoadmaps" },
        { name: "Training & Workshops", link: "/services/trainingAndWorkshops" },
      ],
    },
  ];
    

  return (
    <header className="relative">
      <nav className="flex items-center justify-between px-6 md:px-12 py-5 bg-text text-white">
        <div className="flex items-center space-x-6">
          <Image src={Logo} alt="Logo" width={150} height={50} />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block relative">
          <ul className="flex space-x-6">
            <li className="relative group">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center text-white hover:text-gray-400"
              >
                Services <ChevronDown size={16} className="ml-1" />
              </button>

              {isDropdownOpen && (
                <div className="absolute left-0 top-0 mt-6 w-full bg-black text-white shadow-lg rounded-md p-6 grid grid-cols-3 gap-6">
                  {services.map((service, index) => (
                    <div key={index} className="min-w-60">
                      <h3 className="font-bold text-primary mb-2">{service.category}</h3>
                      <ul className="space-y-1">
                        {service.subcategories.map((sub, subIndex) => (
                          <li key={subIndex}>
                            <a href={sub.link} className="block text-gray-400 hover:text-white transition">
                              {sub.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </li>
            {['Technologies', 'Company', 'Case Studies', 'Resources', 'Contact Us'].map((item, index) => (
              <li key={index}>
                <a href="#" className="text-white hover:text-gray-400">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute left-0 mt-2 w-64 bg-black text-white shadow-lg z-50 p-5">
          <ul className="space-y-4">
            <li>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex justify-between w-full text-left font-bold text-primary"
              >
                Services <ChevronDown size={16} />
              </button>
              {isDropdownOpen && (
                <ul className="pl-4 mt-2 space-y-1">
                  {services.map((service, index) => (
                    <li key={index}>
                      <span className="font-bold">{service.category}</span>
                      <ul className="pl-4 mt-2 space-y-1">
                        {service.subcategories.map((sub, subIndex) => (
                          <li key={subIndex}>
                            <a href={sub.link} className="block text-gray-400 hover:text-white transition">{sub.name}</a>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            {['Technologies', 'Company', 'Case Studies', 'Resources', 'Contact Us'].map((item, index) => (
              <li key={index}>
                <a href="#" className="block text-white hover:text-gray-400">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}