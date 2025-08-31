import React from 'react';

const ROIIntelligence = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-blue-700 flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(255,255,255,0.1) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.1) 75%),
            linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.1) 75%)
          `,
          backgroundSize: '100px 100px',
          backgroundPosition: '0 0, 0 50px, 50px -50px, -50px 0px'
        }}></div>
      </div>
      
      <div className="max-w-6xl w-full relative z-10">
        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-light text-white text-center mb-16 tracking-tight">
          The ROI of Intelligence
        </h1>
        
        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          
          {/* Efficiency Card */}
          <div className="bg-white rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-transform duration-300">
            <div className="mb-6">
              <span className="inline-flex items-center bg-black text-white px-4 py-2 rounded-full text-sm font-medium">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                </svg>
                EFFICIENCY
              </span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Automate Processes
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Cut operational costs by up to <span className="font-semibold">30%</span> with AI-driven workflow automation.
            </p>
          </div>
          
          {/* Growth Card */}
          <div className="bg-white rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-transform duration-300">
            <div className="mb-6">
              <span className="inline-flex items-center bg-black text-white px-4 py-2 rounded-full text-sm font-medium">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                GROWTH
              </span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Personalize Experiences
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Increase customer LTV (lifetime value) by <span className="font-semibold">25%</span> through ML-powered personalization.
            </p>
          </div>
          
          {/* Innovation Card */}
          <div className="bg-white rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-transform duration-300 md:col-span-2 lg:col-span-1">
            <div className="mb-6">
              <span className="inline-flex items-center bg-black text-white px-4 py-2 rounded-full text-sm font-medium">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                INNOVATION
              </span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Accelerate Discovery
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Reduce R&D cycles by <span className="font-semibold">50%</span> using Generative AI for prototyping and simulation.
            </p>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="text-center">
          <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:bg-gray-50">
            Talk to our Expert
          </button>
        </div>
      </div>
    </div>
  );
};

export default ROIIntelligence;