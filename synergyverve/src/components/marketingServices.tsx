import React from "react";

type Service = {
  id: number;
  title: string;
  description: string;
};

interface MarketingServicesProps {
  services: Service[];
}

const MarketingServices: React.FC<MarketingServicesProps> = ({ services }) => {
  return (
    <section className="bg-text  py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-medium mb-4">Comprehensive Marketing Services to Drive Your Business Forward</p>
        <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-primary mb-12">
          Unlock Your Brand’s Full Potential with 
          Tailored Marketing Solutions Designed to 
          Connect, Engage, and Deliver Results
        </h2>

        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-widest">Core Services</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {services.map((service) => (
            <div key={service.id} className="">
              <div className="text-sm font-bold mb-2">0{service.id}</div>
              <h3 className="text-3xl text-white font-semibold mb-2">{service.title}</h3>
              <p className="text-secondary">{service.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MarketingServices;
