import React from "react";

const RevenueDrive = () => {
  return (
    <div className="bg-text min-h-screen p-8 flex items-center justify-center">
      <div className="max-w-6xl mx-auto">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            How We Drive Revenue
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Looking to grow your business? Our personalized marketing strategies
            are built by experts and powered by data to help you reach your
            revenue goals. Say goodbye to the hassle of working with multiple
            agencies. Let's get you the results you deserve.
          </p>
        </div>

        {/* Cards Container with improved layout */}
        <div className="relative mt-12 h-screen">
          {/* Card 1 - Website Visitors */}
          <div
            className="bg-white-500  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 border border-gray-100
            rounded-lg p-8 shadow-lg border border-gray-600 w-full md:w-92 absolute  left-[-30%] z-40"
          >
            <h3 className="text-accent text-4xl font-bold mb-4">
              Bring More Visitors to Your Website
            </h3>

            <ul className="text-white text-lg mb-8 space-y-2">
              <li>SEO that gets you noticed online</li>
              <li>Local SEO to attract nearby customers</li>
              <li>Ecommerce SEO to boost product sales</li>
              <li>Content that engages and converts</li>
            </ul>
          </div>

          <div
            className="bg-white-500  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 border border-gray-100
            rounded-lg p-8 shadow-lg border border-gray-600 w-full md:w-92 absolute top-[200px] left-[30%] z-40"
          >
            <h3 className="text-accent text-4xl font-bold mb-4 text-right">
              Drive Targeted Traffic
            </h3>

            <ul className="text-gray-400 text-lg mb-4 space-y-2 text-right">
              <li>PPC campaigns that convert</li>
              <li>Social media advertising</li>
              <li>Retargeting to capture lost leads</li>
              <li>Display advertising that performs</li>
            </ul>
          </div>

          <div
            className="bg-white-500  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 border border-gray-100
            rounded-lg p-8 shadow-lg border border-gray-600 w-full md:w-92 absolute  top-[420px] left-[-30%] z-40"
          >
            <h3 className="text-accent text-4xl font-bold mb-4 ">
              Convert Visitors to Customers
            </h3>

            <ul className="text-gray-400 text-lg mb-4 space-y-2">
              <li>UX optimization for higher conversions</li>
              <li>A/B testing that reveals what works</li>
              <li>Landing pages that sell</li>
              <li>Email marketing that nurtures leads</li>
            </ul>
          </div>

          <div
            className=" bg-white-500  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 border border-gray-100
            rounded-lg p-8 shadow-lg border border-gray-600 w-full md:w-92 absolute top-[620px] left-[30%] z-40"
          >
            <h3 className="text-accent text-4xl font-bold mb-4  text-right">
              Measure & Optimize Results
            </h3>

            <ul className="text-gray-200 text-xl mb-8 space-y-2 text-right">
              <li> Website designs that leave a lasting impression</li>
              <li>CRO to turn visitors into loyal customers</li>
              <li>Landing pages that drive action</li>
              <li>Social media management to build brand loyalty</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueDrive;
