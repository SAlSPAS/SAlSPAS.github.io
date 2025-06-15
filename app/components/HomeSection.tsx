export default function HomeSection() {
    return (
      <div className="w-full h-screen bg-white flex items-center justify-center relative">
        <h1 className="text-black font-['Helvetica',_sans-serif] text-6xl font-bold">
          "HOME"
        </h1>
        <div className="absolute top-4 left-4 font-['Helvetica',_sans-serif] text-[1.5vh] text-black font-bold w-full max-w-sm">
        Oftentimes, as people, we can ruin or not even start something because we are too busy thinking “what is the correct way to do it” or “what will happen if…”.Instead, we should just give our best for love and curiosity we have to explore uncharted territory. We are at our best when we act in the present and not fret about the past or future. Not knowing is part of the beautiful process of discovery and is what makes life, life. Stay curious and continue to search and create the new; it’s okay not to have the answer. SAIS PAS /  I DON’T KNOW
        </div>
        
        <div className="absolute bottom-8 right-4 text-black font-bold text-lg md:text-xl">SAIS PAS</div> 
        <div className="absolute bottom-4 left-4">
          <img src="/tempcrest.png" alt="Description" className="w-16 h-16 md:w-20 md:h-20" /> 
        </div>
      </div>
    );
  }