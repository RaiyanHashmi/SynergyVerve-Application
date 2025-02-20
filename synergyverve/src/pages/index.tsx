
import NavBar from "../components/navbar";
import Hero  from "../components/hero";
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'], 
  variable: '--font-inter',
  weight: ['400', '700'], 
});



export default function Home() {
  return (
  <>
  <NavBar/>
  <Hero/>
  
  </>
  );
}
