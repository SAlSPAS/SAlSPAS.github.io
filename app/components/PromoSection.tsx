import React from 'react';

const PromoSection = () => {
  return (
    <div className="w-full min-h-screen bg-black flex flex-col items-center justify-center p-8 gap-8">
      <h1 className="text-white font-['Helvetica',_sans-serif] text-6xl font-bold">
        happy birthday
      </h1>
      
      {/* Indiegogo Campaign Embed */}
      <div className="w-full max-w-3xl bg-white rounded-lg overflow-hidden">
        <iframe 
          className="w-full aspect-video"
          src="https://www.indiegogo.com/projects/saint-helens-short-film#/embedded" // Replace with your campaign URL
          frameBorder="0" 
          scrolling="no" 
          title="Indiegogo Campaign"
        />
      </div>
      
      {/* Alternative Direct Donation Button */}
      <div className="flex flex-col items-center gap-4">
        <p className="text-white text-xl">Or make a direct donation</p>
        <button 
          onClick={() => window.open('YOUR_PAYMENT_LINK', '_blank')}
          className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 transition-colors"
        >
          Donate Now
        </button>
      </div>
    </div>
  );
};

export default PromoSection;