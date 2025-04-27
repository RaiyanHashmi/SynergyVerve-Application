import React from "react";
import  Telescope  from "../../assets/img/Telescope.png"; 
import  Rocket  from "../../assets/img/rocket.png";



import Image from 'next/image';




const AboutCompanySect = () => {
  return (
        <section className="relative bg-secondary text-text py-20 bg-secondary rounded-3xl p-10 m-6 mx-20 md:p-16">
         
          <Image
          alt=""
          src={Telescope}
          className="absolute  right-0 bottom-0"
          placeholder="blur"
          quality={100}
        />
          <Image
          alt=""
          src={Rocket}
              className="absolute  -top-40 left-0"
          placeholder="blur"
          quality={100}
        />
          {/* Content */}
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <h2 className="md:text-6xl  m-5  font-bold">About Synergy Verve</h2>
    
            
    
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto m-8">
              {stats.map((item, index) => (
                <div
                  key={index}
                  className="bg-white text-black rounded-lg p-6 shadow-lg text-center"
                >
                  <h3 className="text-4xl font-bold">{item.value}</h3>
                  <p className="text-xl">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
    
          {/* Bottom Right Icon */}
          <div className="absolute bottom-5 right-5">
            <span className="w-10 h-10 bg-purple-500 rounded-full shadow-md"></span>
          </div>
        </section>
      );
    }
    
    const stats = [
      { value: "100", description: "Ready to deliver results" },
      { value: "20", description: "Average boost in revenue growth" },
      { value: "900", description: "Worth of data points driving strategic choices" },
      { value: "500", description: "Built-in value to maximize ROI" },
    ];
    
 ;

export default AboutCompanySect;
