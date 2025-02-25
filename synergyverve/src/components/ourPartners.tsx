import React from "react";
import Head from "next/head";
import Image from "next/image";
import HeroImage from "../../assets/img/aunty.png";
import HeroBG from "../../assets/img/Group 2.png";
import EmailBar from "./emailBar";
import '@/styles/globals.css';

const OurPartners: React.FC = () => {
  return (
    <>
      <Head>
        <title>Digital Marketing That Fuels Growth | Synergy Verve</title>
        <meta
          name="description"
          content="Ready to see your business grow? Synergy Verve's data-driven strategies and innovative technology make digital marketing a powerful revenue engine."
        />
        <meta
          name="keywords"
          content="digital marketing, growth, Synergy Verve, maximize ROI, business growth, revenue acceleration"
        />
      </Head>

      <section className="relative bg-cover bg-no-repeat bg-center min-h-screen flex items-center justify-center px-8">
        <Image
          alt="Synergy Verve Hero Background"
          src={HeroBG}
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-5 md:space-y-0 md:space-x-8">
          <div className="max-w-2xl text-left">
            <h2 className="text-xl font-semibold ">
              Digital Marketing That Fuels Growth
            </h2>
            <h1 className=" md:text-7xl  mt-2 font-inter font-extrabold">
              Accelerate Your Revenue with{" "}
              <span className="from-primary to-accent bg-clip-text text-transparent bg-gradient-to-r col_text">
                Synergy Verve
              </span>
            </h1>
            <p className="text-lg md:text-xl mt-6 text-text leading-relaxed mb-6">
              Ready to see your business grow? Our data-driven strategies and
              innovative technology make digital marketing a powerful revenue
              engine. Let’s create a customized strategy that provides real
              results. Request your proposal today and start maximizing your
              ROI!
            </p>
            <EmailBar className="mt-8" />

          </div>

          <div className="relative w-full md:w-1/2 h-full">
            <Image
              src={HeroImage}
              alt="Synergy Verve Team"
              width={500}
              height={700}
              className="drop-shadow-xl"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default OurPartners;