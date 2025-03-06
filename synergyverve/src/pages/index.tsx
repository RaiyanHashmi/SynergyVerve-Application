import NavBar from "../components/navbar";
import Hero from "../components/hero";
import AboutSec from "../components/AboutCompanySection";
// import MarketingSection from "../components/marketingSection";
// import Testimonial from "../components/ui/animated-testimonials";
// import OurPartners from "@/components/ourPartners";
import { RevenueDrive } from "../components/RevenueDrive";
import {CareersSection} from "../components/CareersSection";
import { Inter } from "next/font/google";
import { HeroParallax } from "../components/ui/HeroParallax";
import MarketingSection from "@/components/MarketingSection";


const testimonials = [
  {
    name: "John Doe",
    feedback: "Great service!",
    avatar: "/john.jpg",
  },
  {
    name: "Jane Smith",
    feedback: "Highly recommend!",
    avatar: "/jane.jpg",
  },
  // Add more testimonials as needed
];

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "700"],
});
const items = [
  {
    title: "Item 1",
    link: "/item-1",
    thumbnail: "/one.jpg",
  },
  {
    title: "Item 2",
    link: "/item-2",
    thumbnail: "/two.jpg",
  },
  {
    title: "Item 3",
    link: "/item-3",
    thumbnail: "/three.jpg",
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
  // Add more products as needed
];
      // <Testimonial testimonials={testimonials} />
export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <RevenueDrive />
      <AboutSec />

      <HeroParallax products={products} />

      <MarketingSection />
      {/* <OurPartners /> */}
      <CareersSection/>
   
      {/* <Testimonial testimonials={testimonial} /> */}
    </>
  );
}
