import Image from "next/image";
import { useState, useEffect } from "react";

export default function LandingSection() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const pstTime = new Date(now.toLocaleString("en-US", {timeZone: "America/Los_Angeles"}));
      const timeString = pstTime.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
      setCurrentTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen">
      <Image
        src='/landing-1.jpg'
        alt="Landing Background"
        layout="fill"
        objectFit="cover"
        priority
      />
      
      {/* Logo - Top Left */}
      <div className="absolute top-2 left-2">
        <Image src="/logo-landing.png" alt="Logo" width={200} height={200} />
      </div>

      {/* Center Image - 3/4 Aspect Ratio */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <a href="https://www.hollywoodfringe.org/projects/11780?tab=tickets" className="block hover:opacity-80 transition-opacity duration-200">
          <div className="relative w-48 h-64 md:w-60 md:h-80 lg:w-72 lg:h-96">
            <Image
              src="/flyer.jpg"
              alt="Happy Birthday Flyer"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        </a>
      </div>

      {/* Clock - Top Right */}
      <div className="absolute top-4 right-4 font-['Helvetica',_sans-serif] text-2xl md:text-3xl text-white font-bold">
        {currentTime} PST
      </div>

      {/* Text Blurb - Bottom Right */}
      <div className="absolute bottom-4 right-4 font-['Helvetica',_sans-serif] text-white font-bold max-w-xs md:max-w-sm lg:max-w-md text-xs md:text-sm leading-relaxed">
        Oftentimes, as people, we can ruin or not even start something because we are too busy thinking "what is the correct way to do it" or "what will happen if…". Instead, we should just give our best for love and curiosity we have to explore uncharted territory. We are at our best when we act in the present and not fret about the past or future. Not knowing is part of the beautiful process of discovery and is what makes life, life. Stay curious and continue to search and create the new; it's okay not to have the answer. 
        <br /><br />
        <span className="font-bold">SAIS PAS / I DON'T KNOW</span>
      </div>

      {/* Instagram Icon - Bottom Left */}
      <div className="absolute bottom-4 left-4">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center hover:opacity-80 transition-opacity duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 md:w-10 md:h-10 text-white" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
}