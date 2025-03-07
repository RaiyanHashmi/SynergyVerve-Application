import NavBar from "../components/navbar";
import Hero from "../components/hero";
import AboutSec from "../components/AboutCompanySection";
import { RevenueDrive } from "../components/RevenueDrive";
import {CareersSection} from "../components/CareersSection";
import { Inter } from "next/font/google";
import { HeroParallax } from "../components/ui/HeroParallax";
import MarketingSection from "@/components/marketingSection";
import { BoostTheMetrics as BTM } from "@/components/BoostTheMetricsSection";
import { TabsDemo } from "@/components/tabsDemo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "700"],
});

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
  }
];

export default function Home() {
  return (
    <div className={`${inter.variable} font-sans`}>
      <NavBar />
      <Hero />
      <RevenueDrive />
      <AboutSec />
      <HeroParallax products={products} />
      <MarketingSection />
      <CareersSection/>
      <BTM/>
      <TabsDemo/>
    </div>
  );
}
