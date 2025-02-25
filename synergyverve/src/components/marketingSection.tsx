import React from 'react';
import img from '../Group 2.png';

const marketingSection = () => {
  return (
    
    <div className="bg-gradient-to-br from-gray-900  to-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500 uppercase tracking-wide">
          Our Marketing Agency Provides:
        </h2>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
 
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-500/20">
          
            <h3 className="text-xl font-semibold text-teal-400 mb-2">
              Actionable Insights at Your Fingertips
            </h3>
            <p className="text-gray-300">
              Get real-time data and insights to make informed decisions.
            </p>
          </div>

      
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-500/20">
            
            <h3 className="text-xl font-semibold text-teal-400 mb-2">
              Valuable Content that Generates Revenue
            </h3>
            <p className="text-gray-300">
              Create content that drives engagement and boosts your bottom line.
            </p>
          </div>

         
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-500/20">
           
            <h3 className="text-xl font-semibold text-teal-400 mb-2">
              Performance Tracking in Real Time
            </h3>
            <p className="text-gray-300">
              Monitor your campaigns and adjust strategies on the fly.
            </p>
          </div>

         
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-500/20">
            
            <h3 className="text-xl font-semibold text-teal-400 mb-2">
              Successful Content Marketing Strategies
            </h3>
            <p className="text-gray-300">
              Develop and execute strategies that deliver measurable results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default marketingSection;