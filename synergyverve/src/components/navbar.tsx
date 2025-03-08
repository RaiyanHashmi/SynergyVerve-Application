// // "use client";

// // import { useState } from "react";
// // import Image from "next/image";
// // import Logo from "../../assets/img/white-synergy3.png";
// // import { Menu, X, ChevronDown } from "lucide-react";

// // export default function NavBar() {
// //   const [isOpen, setIsOpen] = useState(false);

// //   const services = [
// //     {
// //       category: "Data Engineering",
// //       subcategories: [
// //         { name: "Data Pipeline Development", link: "/services/data-pipeline-development" },
// //         { name: "Cloud Data Solutions", link: "/services/cloud-data-solutions" },
// //         { name: "Data Warehousing & Lakes", link: "/services/data-warehousingAndLakes" },
// //         { name: "ETL & Real-Time Streaming", link: "/services/etl-real-time-streaming" },
// //         { name: "Data Migration", link: "/services/dataMigration" },
// //         { name: "Data Governance", link: "/services/dataGovernance" },
// //         { name: "Real-Time Data Streaming", link: "/services/realTimeDataStreaming" },
// //         { name: "Data Integration", link: "/services/dataIntegration" },
// //         { name: "Data Governance & Compliance", link: "/services/dataGovernanceAndCompliance" },
// //       ],
// //     },
// //     {
// //       category: "Advanced Analytics & Business Intelligence",
// //       subcategories: [
// //         { name: "Business Intelligence (BI)", link: "/services/BI" },
// //         { name: "Predictive & Statistical Modeling", link: "/services/predictiveAndStatisticalModeling" },
// //         { name: " Customer Insights", link: "/services/customerInsights" },
// //         { name: " Anomaly Detection", link: "/services/anomalyDetection" },
// //         { name: " Big Data Analytics", link: "/services/bigDataAnalytics" },
// //       ],
// //     },
// //     {
// //       category: "Artificial Intelligence & Machine Learning",
// //       subcategories: [
// //         { name: "Custom AI/ML Development", link: "/services/customAI-MLDevelopment" },
// //         { name: "Industry-Specific AI", link: "/services/industrySpecificAI" },
// //         { name: "MLOps & Deployment", link: "/services/MLOpsAndDeployment" },
// //         { name: "AI Chatbots & Virtual Assistants", link: "/services/AIchatbotsAndVirtualAssistants" },
// //         { name: "Ethical AI", link: "/services/ethicalAI" },
// //       ],
// //     },
// //     {
// //       category: "Software Engineering & Development",
// //       subcategories: [
// //         { name: "API Development", link: "/services/APIDevelopment" },
// //         { name: "Web Development", link: "/services/webDevelopment" },
// //         { name: "Mobile Apps", link: "/services/mobiileApps" },
// //         { name: "CMS & E-Commerce", link: "/services/CMSandE-Commerce" },
// //       ],
// //     },
// //     {
// //       category: "Cloud Services & DevOps",
// //       subcategories: [
// //         { name: "Cloud Infrastructure", link: "/services/cloudInfrastructure" },
// //         { name: "DevOps Automation", link: "/services/DevOpsAutomation" },
// //         { name: "Infrastructure as Code (IaC)", link: "/services/IAC" },
// //         { name: "Serverless Solutions", link: "/services/serverlessSolutions" },
// //       ],
// //     },
// //     {
// //       category: "IoT development",
// //       subcategories: [
// //         { name: "IoT Data Processing", link: "/services/IoTDataProcessing" },
// //         { name: "Edge AI", link: "/services/EdgeAI" },
// //         { name: "Quantum ML", link: "/services/quantumML" },
// //       ],
// //     },
// //     {
// //       category: "E-Commerce & CRM Solutions",
// //       subcategories: [
// //         { name: "Platform Development", link: "/services/platformDevelopment" },
// //         { name: "CRM Integration", link: "/services/CRMIntegration" },
// //         { name: "Payment Gateways", link: "/services/paymentGateways" },
// //       ],
// //     },
// //     {
// //       category: "Cybersecurity & Compliance",
// //       subcategories: [
// //         { name: "Data Encryption", link: "/services/dataEncryption" },
// //         { name: "Access Controls", link: "/services/accessControls" },
// //         { name: "Compliance Audits", link: "/services/complianceAudits" },
// //       ],
// //     },
// //     {
// //       category: "Consulting & Strategy",
// //       subcategories: [
// //         { name: "Data Monetization", link: "/services/dataMonetization" },
// //         { name: "Digital Transformation Roadmaps", link: "/services/digitalTransformationRoadmaps" },
// //         { name: "Training & Workshops", link: "/services/trainingAndWorkshops" },
// //       ],
// //     },
// //   ];

// //   return (
// //     <header className="relative">
// //       <nav className="flex items-center justify-between px-6 md:px-12 py-5 bg-text text-white">
// //         <div className="flex items-center space-x-6">
// //           <Image src={Logo} alt="Logo" width={150} height={50} />
// //         </div>

// //         {/* Desktop Navigation */}
// //         <div className="hidden md:block relative">
// //           <ul className="flex space-x-6">
// //             <li className="relative group">
// //               <button className="flex items-center text-white hover:text-gray-400">
// //                 Services <ChevronDown size={16} className="ml-1" />
// //               </button>
              
// //               <div className="absolute left-0 top-0 mt-6 w-full bg-black text-white shadow-lg rounded-md p-6 grid grid-cols-3 gap-6 opacity-0  group-hover:opacity-100 group-hover:visible transition-all duration-300">
// //                 {services.map((service, index) => (
// //                   <div key={index} className="min-w-60">
// //                     <h3 className="font-bold text-primary mb-2">{service.category}</h3>
// //                     <ul className="space-y-1">
// //                       {service.subcategories.map((sub, subIndex) => (
// //                         <li key={subIndex}>
// //                           <a href={sub.link} className="block text-gray-400 hover:text-white transition">
// //                             {sub.name}
// //                           </a>
// //                         </li>
// //                       ))}
// //                     </ul>
// //                   </div>
// //                 ))}
// //               </div>
// //             </li>
// //             {['Technologies', 'Company', 'Case Studies', 'Resources', 'Contact Us'].map((item, index) => (
// //               <li key={index}>
// //                 <a href="#" className="text-white hover:text-gray-400">{item}</a>
// //               </li>
// //             ))}
// //           </ul>
// //         </div>

// //         {/* Mobile Menu */}
// //         <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
// //           {isOpen ? <X size={28} /> : <Menu size={28} />}
// //         </button>
// //       </nav>

// //       {/* Mobile Dropdown Menu */}
// //       {isOpen && (
// //         <div className="md:hidden absolute left-0 mt-2 w-64 bg-black text-white shadow-lg z-50 bg-black text-white w-full absolute top-full left-0 shadow-lg p-5">
// //           <ul className="space-y-4">
// //             {services.map((service, index) => (
// //               <li key={index}>
// //                 <span className="font-bold text-primary">{service.category}</span>
// //                 <ul className="pl-4 mt-2 space-y-1">
// //                   {service.subcategories.map((sub, subIndex) => (
// //                     <li key={subIndex}>
// //                       <a href={sub.link} className="block text-gray-400 hover:text-white transition">{sub.name}</a>
// //                     </li>
// //                   ))}
// //                 </ul>
// //               </li>
// //             ))}
// //             {['Technologies', 'Company', 'Case Studies', 'Resources', 'Contact Us'].map((item, index) => (
// //               <li key={index}>
// //                 <a href="#" className="block text-white hover:text-gray-400">{item}</a>
// //               </li>
// //             ))}
// //           </ul>
// //         </div>
// //       )}
// //     </header>
// //   );
// // }


// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Logo from "../../assets/img/white-synergy3.png";
// import { Menu, X, ChevronDown } from "lucide-react";

// export default function NavBar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   interface Subcategory {
//     name: string;
//     link: string;
//   }

//   interface Service {
//     category: string;
//     subcategories: Subcategory[];
//   }

//   const services: Service[] = [
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
//               <button
//                 onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                 className="flex items-center text-white hover:text-gray-400"
//               >
//                 Services <ChevronDown size={16} className="ml-1" />
//               </button>

//               {isDropdownOpen && (
//                 <div className="absolute left-0 top-0 mt-6 w-full bg-black text-white shadow-lg rounded-md p-6 grid grid-cols-3 gap-6">
//                   {services.map((service, index) => (
//                     <div key={index} className="min-w-60">
//                       <h3 className="font-bold text-primary mb-2">{service.category}</h3>
//                       <ul className="space-y-1">
//                         {service.subcategories.map((sub, subIndex) => (
//                           <li key={subIndex}>
//                             <a href={sub.link} className="block text-gray-400 hover:text-white transition">
//                               {sub.name}
//                             </a>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   ))}
//                 </div>
//               )}
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
//         <div className="md:hidden absolute left-0 mt-2 w-64 bg-black text-white shadow-lg z-50 p-5">
//           <ul className="space-y-4">
//             <li>
//               <button
//                 onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                 className="flex justify-between w-full text-left font-bold text-primary"
//               >
//                 Services <ChevronDown size={16} />
//               </button>
//               {isDropdownOpen && (
//                 <ul className="pl-4 mt-2 space-y-1">
//                   {services.map((service, index) => (
//                     <li key={index}>
//                       <span className="font-bold">{service.category}</span>
//                       <ul className="pl-4 mt-2 space-y-1">
//                         {service.subcategories.map((sub, subIndex) => (
//                           <li key={subIndex}>
//                             <a href={sub.link} className="block text-gray-400 hover:text-white transition">{sub.name}</a>
//                           </li>
//                         ))}
//                       </ul>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
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




import {
  IconBook,
  IconChartPie3,
  IconChevronDown,
  IconCode,
  IconCoin,
  IconFingerprint,
  IconNotification,
} from '@tabler/icons-react';
import {
  Anchor,
  Box,
  Burger,
  Button,
  Center,
  Collapse,
  Divider,
  Drawer,
  Group,
  HoverCard,
  ScrollArea,
  SimpleGrid,
  Text,
  ThemeIcon,
  UnstyledButton,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import MantineLogo from '../../assets/img/white-synergy3.png';
import Image from 'next/image';
import classes from '../../styles/HeaderMegaMenu.module.css';

const mockdata = [
  {
    icon: IconCode,
    title: 'Open source',
    description: 'This Pokémon’s cry is very loud and distracting',
  },
  {
    icon: IconCoin,
    title: 'Free for everyone',
    description: 'The fluid of Smeargle’s tail secretions changes',
  },
  {
    icon: IconBook,
    title: 'Documentation',
    description: 'Yanma is capable of seeing 360 degrees without',
  },
  {
    icon: IconFingerprint,
    title: 'Security',
    description: 'The shell’s rounded shape and the grooves on its.',
  },
  {
    icon: IconChartPie3,
    title: 'Analytics',
    description: 'This Pokémon uses its flying ability to quickly chase',
  },
  {
    icon: IconNotification,
    title: 'Notifications',
    description: 'Combusken battles with the intensely hot flames it spews',
  },
];

export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon size={22} color={theme.colors.blue[6]} />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <Box pb={120}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Image src={MantineLogo} alt="Logo" width={30} height={30} />

          <Group h="100%" gap={0} visibleFrom="sm">
            <a href="#" className={classes.link}>
              Home
            </a>
            <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Features
                    </Box>
                    <IconChevronDown size={16} color={theme.colors.blue[6]} />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                <Group justify="space-between" px="md">
                  <Text fw={500}>Features</Text>
                  <Anchor href="#" fz="xs">
                    View all
                  </Anchor>
                </Group>

                <Divider my="sm" />

                <SimpleGrid cols={2} spacing={0}>
                  {links}
                </SimpleGrid>

                <div className={classes.dropdownFooter}>
                  <Group justify="space-between">
                    <div>
                      <Text fw={500} fz="sm">
                        Get started
                      </Text>
                      <Text size="xs" c="dimmed">
                        Their food sources have decreased, and their numbers
                      </Text>
                    </div>
                    <Button variant="default">Get started</Button>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>
            <a href="#" className={classes.link}>
              Learn
            </a>
            <a href="#" className={classes.link}>
              Academy
            </a>
          </Group>

          <Group visibleFrom="sm">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h="calc(100vh - 80px" mx="-md">
          <Divider my="sm" />

          <a href="#" className={classes.link}>
            Home
          </a>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Features
              </Box>
              <IconChevronDown size={16} color={theme.colors.blue[6]} />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>
          <a href="#" className={classes.link}>
            Learn
          </a>
          <a href="#" className={classes.link}>
            Academy
          </a>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}