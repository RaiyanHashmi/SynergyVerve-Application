"use client";
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
import classes from '../styles/HeaderMegaMenu.module.css'

type Service = {
  category: string;
  subcategories: { name: string; link: string }[];
};

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
          <Text size="lg" fw={800}>
            {item.title}
          </Text>
          <Text size="lg" >
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <Box >
      <header className={classes.header } >
        <Group justify="space-between" h="100%">
          <Image src={MantineLogo} alt="Logo" width={250} height={150} />

          <Group h="100%"  justify="space-between"  visibleFrom="md" px="lg">
            <a href="#"  className={classes.link}>
              Home
            </a>
            <a href="#" className={classes.link}>
            About
            </a>
            <HoverCard width={1000} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Services
                    </Box>
                    <IconChevronDown size={16} color={theme.colors.blue[6]} />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                <Group justify="space-between" px="lg">
                  <Text fw={500}>Services</Text>
                  <Anchor href="#" fz="xs">
                    View all
                  </Anchor>
                </Group>

                <Divider my="lg" />
                <SimpleGrid cols={9} spacing={10}>
                  {services.map((service) => (
                    <Box key={service.category} px="md">
                      <Text fw={700} size="lg">{service.category}</Text>
                      {service.subcategories.map((sub) => (
                        <UnstyledButton key={sub.name} className={classes.subLink} >
                          <Text size="md" >
                            <a href={sub.link}>{sub.name}</a>
                          </Text>
                        </UnstyledButton>
                      ))}
                    </Box>
                  ))}
                </SimpleGrid>
               

                <div className={classes.dropdownFooter}>
                  <Group justify="space-between">
                    <div>
                      <Text fw={500} fz="sm">
                        Contact us
                      </Text>
                      
                    </div>
                    <Button variant="default">Get started</Button>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>
           
            <a href="#" className={classes.link}>
             Blogs
            </a>
          </Group>

          <Group visibleFrom="lg">
            
            <Button className={classes.primaryButton}>Contact us</Button>
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
          
            <Button className={classes.primaryButton}>Contact us</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}





