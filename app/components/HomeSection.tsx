export default function HomeSection() {
    return (
      <div className="w-full h-screen bg-white flex items-center justify-center relative">
        <h1 className="text-black font-['Helvetica',_sans-serif] text-6xl font-bold">
          "HOME"
        </h1>
        <div className="absolute top-4 left-4 font-['Helvetica',_sans-serif] text-[1.5vh] text-black font-bold w-full max-w-sm">
        We ruin or don’t even start so many things thinking about what the reason is , how to do it , if I’m doing it right or wrong , what will happen, instead of just giving our all. We should act in the moment and not fully know what is going to happen , this is part of the beauty and ugliness of the thing that we call life, which is the most potent art piece ever created. This is why it is “I don’t know, aka, SAIS PAS
        </div>
        
        <div className="absolute bottom-8 right-4 text-black font-bold text-lg md:text-xl">SAIS PAS</div> 
        <div className="absolute bottom-4 left-4">
          <img src="/tempcrest.png" alt="Description" className="w-16 h-16 md:w-20 md:h-20" /> 
        </div>
      </div>
    );
  }