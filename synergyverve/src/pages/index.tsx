import Image from "next/image";
import Hero from "../components/hero";
import AboutSec from "../components/AboutCompanySection";
import { RevenueDrive } from "../components/RevenueDrive";
import { HeroParallax } from "../components/ui/HeroParallax";
import MarketingServices from "@/components/marketingServices";
import { TabsDemo } from "../components/tabsDemo";
import HeaderMegaMenu from "@/components/HeaderMegaMenu";
import TransformSection from "@/components/TransformSection";
import Footer from "@/components/Footer";
import transform from "../../public/transform.jpg";
import FAQ from "@/components/Faq";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../../src/components/ui/infinite-moving-cards";
import { Timeline } from "@/components/ui/timeline";
import CPL from "../../public/cplimg.webp";
import Data from "../../public/data.webp";
import Revenue from "../../public/revenue.webp";
import CenteredText from "@/components/ui/centeredText";
// Removed duplicate import and corrected the named import
import {
  Search,
  Megaphone,
  Target,
  LineChart,
  Network,
  Mail,
  Database,
  BarChart,
  Link,
  DollarSign,
  Users,
  ArrowRightCircle,
  MonitorSmartphone,
} from "lucide-react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"; // Correct named import
const faqData = [
  {
    question: "Are there parking spaces nearby?",
    answer: "Yes, there are several parking spots around the venue.",
  },
  {
    question: "Can I bring guests to this part of the evening?",
    answer: "Yes, guests are allowed but require prior registration.",
  },
  {
    question: "How do I access the event app?",
    answer: "You can download the event app from the official website.",
  },
];
const servicesData = [
  {
    id: 1,
    title: "Brand Strategy",
    description:
      "Develop a unique brand voice and visual identity that resonates with your audience and sets you apart from competitors.",
  },
  {
    id: 2,
    title: "Social Media Marketing",
    description:
      "Create impactful campaigns to grow your presence, build connections, and drive conversions across social platforms.",
  },

  {
    id: 3,
    title: "SEO & Content Marketing",
    description:
      "Boost your visibility with optimized content and strategies that attract, engage, and convert your target audience.",
  },
  {
    id: 4,
    title: "Email Marketing",
    description:
      "Design personalized email campaigns that nurture leads, build loyalty, and drive consistent engagement.",
  },
];
const data = [
  {
    title: "Traffic",
    content: (
      <div className="p-6 bg-secondary dark:bg-gray-900 rounded-lg shadow-lg">
        <span className="bg-accent text-white text-md px-4 py-2 rounded-full inline-block">
          Traffic
        </span>

        <h5 className="text-4xl font-bold mt-4 text-gray-900 dark:text-white">
          Drive More Visitors and Visibility
        </h5>

        <p className="text-gray-700 dark:text-gray-300 text-lg font-normal mt-2">
          Without consistent website traffic, you&apos;re missing out on
          potential leads and sales. Our tailored SEO strategies can help
          improve your rankings, making it easier for people to find you and
          explore what you offer
        </p>

        <div className="mt-6">
          <Image
            src={Revenue}
            alt="SEO optimization"
            width={500}
            height={500}
            className="rounded-lg object-cover h-32 md:h-48 lg:h-60 w-full shadow-lg"
          />
        </div>

        <ul className="mt-6 space-y-4 text-gray-800 dark:text-gray-200 text-lg">
          <li className="flex items-center gap-3">
            <Search className="w-6 h-6 text-accent" />
            <span>Improve organic visibility in search results</span>
          </li>
          <li className="flex items-center gap-3">
            <Megaphone className="w-6 h-6 text-accent" />
            <span>Engage your audience through targeted paid ads</span>
          </li>
          <li className="flex items-center gap-3">
            <Users className="w-6 h-6 text-accent" />
            <span>Connect with the right audience through social media.</span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Leads",
    content: (
      <div className="p-6 bg-secondary dark:bg-gray-900 rounded-lg shadow-lg">
        <span className="bg-accent text-white text-md px-4 py-2 rounded-full inline-block">
          Leads
        </span>

        <h5 className="text-4xl font-bold mt-4 text-gray-900 dark:text-white">
          Supercharge Your Lead Generation
        </h5>

        <p className="text-gray-700 dark:text-gray-300 text-lg font-normal mt-2">
          Tired of low-quality leads? We’ll help fill your pipeline with
          qualified prospects by creating a digital marketing strategy that
          matches your goals and budget.
        </p>

        <div className="mt-6">
          <Image
            src={CPL}
            alt="SEO optimization"
            width={500}
            height={500}
            className="rounded-lg object-cover h-32 md:h-48 lg:h-60 w-full shadow-lg"
          />
        </div>

        <ul className="mt-6 space-y-4 text-gray-800 dark:text-gray-200 text-lg">
          <li className="flex items-center gap-3">
            <Users className="w-6 h-6 text-accent" />
            <span>Bring in high-value leads to your business</span>
          </li>
          <li className="flex items-center gap-3">
            <ArrowRightCircle className="w-6 h-6 text-accent" />
            <span>Enhance your website’s conversion flow</span>
          </li>
          <li className="flex items-center gap-3">
            <MonitorSmartphone className="w-6 h-6 text-accent" />
            <span>Create a new, personalized website for your brand</span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "CPL",
    content: (
      <div className="p-6 bg-secondary dark:bg-gray-900 rounded-lg shadow-lg">
        <span className="bg-accent text-white text-md px-4 py-2 rounded-full inline-block">
          CPL
        </span>

        <h5 className="text-4xl font-bold mt-4 text-gray-900 dark:text-white">
          Optimize Your Ads for Better Results
        </h5>

        <p className="text-gray-700 dark:text-gray-300 text-lg font-normal mt-2">
          Struggling with high ad costs? Let our experts streamline your paid
          campaigns, refine targeting, and optimize your budget to ensure every
          dollar counts.
        </p>

        <div className="mt-6">
          <Image
            src={CPL}
            alt="SEO optimization"
            width={500}
            height={500}
            className="rounded-lg object-cover h-32 md:h-48 lg:h-60 w-full shadow-lg"
          />
        </div>

        <ul className="mt-6 space-y-4 text-gray-800 dark:text-gray-200 text-lg">
          <li className="flex items-center gap-3">
            <Target className="w-6 h-6 text-accent" />
            <span>Fine-tune your ad targeting</span>
          </li>
          <li className="flex items-center gap-3">
            <Network className="w-6 h-6 text-accent" />
            <span>Engage potential customers across multiple platforms</span>
          </li>
          <li className="flex items-center gap-3">
            <DollarSign className="w-6 h-6 text-accent" />
            <span>Get the most out of your paid ads budget.</span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Data",
    content: (
      <div className="p-6 bg-secondary dark:bg-gray-900 rounded-lg shadow-lg">
        <span className="bg-accent text-white text-md px-4 py-2 rounded-full inline-block">
          Data
        </span>

        <h5 className="text-4xl font-bold mt-4 text-gray-900 dark:text-white">
          Unify Your Marketing and Sales Insights
        </h5>

        <p className="text-gray-700 dark:text-gray-300 text-lg font-normal mt-2">
          Stop losing track of valuable leads. With our powerful tools, we can
          integrate your sales and marketing data to give you clear, actionable
          insights.
        </p>

        <div className="mt-6">
          <Image
            src={Data}
            alt="SEO optimization"
            width={500}
            height={500}
            className="rounded-lg object-cover h-32 md:h-48 lg:h-60 w-full shadow-lg"
          />
        </div>

        <ul className="mt-6 space-y-4 text-gray-800 dark:text-gray-200 text-lg">
          <li className="flex items-center gap-3">
            <Link className="w-6 h-6 text-accent" />
            <span>Sync sales and marketing efforts</span>
          </li>
          <li className="flex items-center gap-3">
            <BarChart className="w-6 h-6 text-accent" />
            <span>Make data-driven decisions to target the right audience</span>
          </li>
          <li className="flex items-center gap-3">
            <Database className="w-6 h-6 text-accent" />
            <span>Keep track of customer data and use it effectively</span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Revenue",
    content: (
      <div className="p-6 bg-secondary dark:bg-gray-900 rounded-lg shadow-lg">
        <span className="bg-accent text-white text-md px-4 py-2 rounded-full inline-block">
          Revenue
        </span>

        <h5 className="text-4xl font-bold mt-4 text-gray-900 dark:text-white">
          Surpass Your Revenue Goals
        </h5>

        <p className="text-gray-700 dark:text-gray-300 text-lg font-normal mt-2">
          Not happy with your current sales numbers? We’ll help you attract and
          close more SQLs (Sales Qualified Leads) and turn those opportunities
          into long-term revenue growth.
        </p>

        <div className="mt-6">
          <Image
            src={Revenue}
            alt="SEO optimization"
            width={500}
            height={500}
            className="rounded-lg object-cover h-32 md:h-48 lg:h-60 w-full shadow-lg"
          />
        </div>

        <ul className="mt-6 space-y-4 text-gray-800 dark:text-gray-200 text-lg">
          <li className="flex items-center gap-3">
            <LineChart className="w-6 h-6 text-accent" />
            <span>
              Build a strategy that ties revenue directly to marketing
            </span>
          </li>
          <li className="flex items-center gap-3">
            <Network className="w-6 h-6 text-accent" />
            <span>Boost sales with an omnichannel approach</span>
          </li>
          <li className="flex items-center gap-3">
            <Mail className="w-6 h-6 text-accent" />
            <span>Use personalized email campaigns to drive revenue</span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Campaign Management",
    content: (
      <div className="p-6 bg-secondary dark:bg-gray-900 rounded-lg shadow-lg">
        <span className="bg-accent text-white text-md px-4 py-2 rounded-full inline-block">
          Campaigns
        </span>

        <h5 className="text-4xl font-bold mt-4 text-gray-900 dark:text-white">
          Simplify and Optimize Your Campaigns
        </h5>

        <p className="text-gray-700 dark:text-gray-300 text-lg font-normal mt-2">
          Managing campaigns can be time-consuming and overwhelming. Our
          comprehensive services handle the heavy lifting, freeing you so you
          can focus on growing your business.
        </p>

        <div className="mt-6">
          <Image
            src={CPL}
            alt="SEO optimization"
            width={500}
            height={500}
            className="rounded-lg object-cover h-32 md:h-48 lg:h-60 w-full shadow-lg"
          />
        </div>

        <ul className="mt-6 space-y-4 text-gray-800 dark:text-gray-200 text-lg">
          <li className="flex items-center gap-3">
            <Search className="w-6 h-6 text-accent" />
            <span>Save time and reduce stress</span>
          </li>
          <li className="flex items-center gap-3">
            <Megaphone className="w-6 h-6 text-accent" />
            <span>
              Automate and optimize your campaigns for effective marketing
            </span>
          </li>
          <li className="flex items-center gap-3">
            <Target className="w-6 h-6 text-accent" />
            <span>Trust us as your full-service digital marketing partner</span>
          </li>
        </ul>
      </div>
    ),
  },
];
const products = [
  {
    title: "Product 3",
    link: "/product-3",
    thumbnail: "/three.jpg",
  },
  {
    title: "Product 1",
    link: "/product-1",
    thumbnail: "/one.jpg",
  },
  {
    title: "Product 2",
    link: "/product-2",
    thumbnail: "/two.jpg",
  },
  {
    title: "Product 3",
    link: "/product-3",
    thumbnail: "/three.jpg",
  },
  {
    title: "Product 1",
    link: "/product-1",
    thumbnail: "/one.jpg",
  },
  {
    title: "Product 2",
    link: "/product-2",
    thumbnail: "/two.jpg",
  },
  {
    title: "Product 3",
    link: "/product-3",
    thumbnail: "/three.jpg",
  },
  {
    title: "Product 1",
    link: "/product-1",
    thumbnail: "/one.jpg",
  },
  {
    title: "Product 2",
    link: "/product-2",
    thumbnail: "/two.jpg",
  },
];
// const testimonials = [
//   {

//     quote:
//       "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
//     name: "Charles Dickens",
//     title: "A Tale of Two Cities",
//   },

//   {
//     quote:
//       "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
//     name: "Herman Melville",
//     title: "Moby-Dick",
//   },
// ];
const testimonials = [
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Sarah Chen",
    designation: "Product Manager at TechFlow",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    name: "Michael Rodriguez",
    designation: "CTO at InnovateSphere",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: "Emily Watson",
    designation: "Operations Director at CloudScale",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    name: "James Kim",
    designation: "Engineering Lead at DataPro",
    src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "Lisa Thompson",
    designation: "VP of Technology at FutureNet",
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
export default function Home() {
  return (
    <>
      <HeaderMegaMenu />
      <Hero />
      <div className=" rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={[
            { image: "/logoipsum-344.svg", alt: "Apple" },
            { image: "/logoipsum-354.svg", alt: "Apple" },
            { image: "/logoipsum-360.svg", alt: "Apple" },
            { image: "/logoipsum-364.svg", alt: "Apple" },
            { image: "/logoipsum-367.svg", alt: "Apple" },
            { image: "/logoipsum-369.svg", alt: "Apple" },
          ]}
          imageOnly
          pauseOnHover={false}
          speed="fast"
          direction="right"
        />
      </div>
      <RevenueDrive />
      <CenteredText />
      <AboutSec />
      <HeroParallax products={products} />

      <MarketingServices services={servicesData} />
      <TransformSection
        image={transform}
        imageAlt="Synergy Verve"
        tagText="Transformation"
        title="Transform Your Marketing into Revenue with Synergy Verve"
        description1="The expert team of Synergy Verve, believes in the power of data to drive smarter, more profitable decisions. With our innovative tools and strategies, you'll get clear insights that help you make confident moves and grow your business."
        description2="Our platform, Synergy Verve, connects the dots between your marketing activities and actual sales. By understanding which efforts bring in the revenue, you can confidently reinvest in what works and adjust the rest. With Synergy Verve, you'll always know exactly where to focus to drive growth."
      />
      <Timeline
        heading="Boost the Metrics That Matter Most to Your Business"
        data={data}
      />
      <TabsDemo />
      <FAQ title="FAQ's" faqs={faqData} />
      
      <AnimatedTestimonials testimonials={testimonials}/>

      <Footer />
    </>
  );
}
