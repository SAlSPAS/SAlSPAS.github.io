
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function SceneSection() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    function updateDimensions() {
      const aspectRatio = 1061 / 939; // Original aspect ratio of the frame
      const maxWidth = window.innerWidth * 0.9; // 90% of viewport width
      const maxHeight = window.innerHeight * 0.9; // 90% of viewport height

      let newWidth = maxWidth;
      let newHeight = newWidth / aspectRatio;

      if (newHeight > maxHeight) {
        newHeight = maxHeight;
        newWidth = newHeight * aspectRatio;
      }

      setDimensions({ width: newWidth, height: newHeight });
    }

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      <div className="relative" style={{ width: dimensions.width, height: dimensions.height }}>
        <Image
          src="/frame.png"
          alt="Baroque Frame"
          layout="fill"
          objectFit="contain"
          className="z-2"
        />
        
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <iframe
            width={dimensions.width * 0.6}
            height={dimensions.height * 0.55}
            src="https://www.youtube.com/embed/qKuAl1QvuI8"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

// import Image from 'next/image';

// export default function SceneSection() {
//   return (
//     <div className="w-full h-screen bg-black flex items-center justify-center">
//       <div className="relative">
       
//         <Image
//           src="/frame.png"
//           alt="Baroque Frame"
//           width={1061}
//           height={939}
//           className="z-10"
//         />
        
//         {/* YouTube video embed */}
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
//           <iframe
//             width="800"
//             height="700"
//             src="https://www.youtube.com/embed/qKuAl1QvuI8"
//             title="YouTube video player"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           ></iframe>
//         </div>
//       </div>
//     </div>
//   );
// }