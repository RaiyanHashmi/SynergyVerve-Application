
import NavBar from "../components/navbar";
import Hero  from "../components/hero";
import { Inter } from 'next/font/google';
import {HeroParallax} from "../components/ui/HeroParallax";
import firtsImg from "../assets/img/portfolio_img/one.jpg";
const inter = Inter({
  subsets: ['latin'], 
  variable: '--font-inter',
  weight: ['400', '700'], 
});
const products = [

  {
    title: "Product 3",
    link: "/product-3",
    thumbnail: "/three.jpg"
    ,
  },
  {
    title: "Product 1",
    link: "/product-1",
    thumbnail: "/one.jpg"
    ,
  },
  {
    title: "Product 2",
    link: "/product-2",
    thumbnail: "/two.jpg"
    ,
  },
  // Add more products as needed
];


export default function Home() {
  return (
  <>
  <NavBar/>
  <Hero/>
  <HeroParallax products={products} />
  
  </>
  );
}
