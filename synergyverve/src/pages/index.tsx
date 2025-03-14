
import Hero from "../components/hero";
import AboutSec from "../components/AboutCompanySection";
import { RevenueDrive } from "../components/RevenueDrive";
import { HeroParallax } from "../components/ui/HeroParallax";
import MarketingSection from "@/components/marketingSection";
import { BoostTheMetrics as BTM } from "@/components/BoostTheMetricsSection";
import { TabsDemo } from "../components/tabsDemo";
import HeaderMegaMenu from "@/components/HeaderMegaMenu";
import TransformSection from "@/components/TransformSection";
import Footer from "@/components/Footer";
import transform from "../../public/transform.jpg";

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
    <>
      <HeaderMegaMenu />
      <Hero />
      <RevenueDrive />
      <AboutSec />
      <HeroParallax products={products} />
      <MarketingSection />
      <TransformSection 
        image={transform}
        imageAlt="Synergy Verve"
        tagText="Transformation"
        title="Transform Your Marketing into Revenue with Synergy Verve"
        description1="The expert team of Synergy Verve, believes in the power of data to drive smarter, more profitable decisions. With our innovative tools and strategies, you'll get clear insights that help you make confident moves and grow your business."
        description2="Our platform, Synergy Verve, connects the dots between your marketing activities and actual sales. By understanding which efforts bring in the revenue, you can confidently reinvest in what works and adjust the rest. With Synergy Verve, you'll always know exactly where to focus to drive growth."
      />
      <BTM/>
      <TabsDemo/>
      <Footer/>

    </>
  );
}
