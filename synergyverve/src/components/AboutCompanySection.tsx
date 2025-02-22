import React from "react";
import { InView } from "react-intersection-observer";
import CountUp from "react-countup";

const AboutCompanySect = () => {
  return (
    <section className="bg-text text-white py-16 text-center">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="md:text-6xl  mt-2 font-inter font-extrabold">About <span className="from-primary to-accent bg-clip-text text-transparent bg-gradient-to-r ">
                
              </span>Synergy Verve</h2>
        <p className="text-gray-400 mt-4">
          Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-10 justify-center">
          {[
            { number: 100, label: "Ready to deliver results" },
            { number: 20, label: "Average boost in revenue growth" },
            
          ].map((item, index) => (
            <InView triggerOnce key={index}>
              {({ inView, ref }) => (
                <div ref={ref} className="flex flex-col items-center">
                  <h3 className="text-5xl font-bold">
                    <CountUp
                      start={0}
                      end={inView ? item.number : 0}
                      duration={2}
                      separator=","
                    />
                    <span className="text-primary">%</span>
                  </h3>
                  <p className="text-gray-400 mt-2 max-w-[200px]">
                    {item.label}
                  </p>
                </div>
              )}
            </InView>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-10 justify-center">
          {[
            
            { number:  500, label: "Built-in value to maximize ROI" },
            { number:  900, label: " Worth of data points driving strategic choices" },
            
          ].map((item, index) => (
            <InView triggerOnce key={index}>
              {({ inView, ref }) => (
                <div ref={ref} className="flex flex-col items-center">
                  <h3 className="text-5xl font-bold">
                  <span className="text-primary">$</span>
                    <CountUp
                      start={0}
                      end={inView ? item.number : 0}
                      duration={2}
                      separator=","
                    />
                    <span className="text-primary">K</span>
                  </h3>
                  <p className="text-gray-400 mt-2 max-w-[200px]">
                    {item.label}
                  </p>
                </div>
              )}
            </InView>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default AboutCompanySect;
