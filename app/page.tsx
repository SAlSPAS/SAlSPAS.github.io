"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Head from "next/head"; // Import Head from next/head

export default function Home() {
  const images = ["/landing-1.jpg", "/landing-2.jpg", "/landing-3.jpg", "/landing-4.jpg"];
  const [currentImage, setCurrentImage] = useState(images[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => {
        const currentIndex = images.indexOf(prev);
        return images[(currentIndex + 1) % images.length];
      });
    }, 10000); // Change image every 10 seconds

    return () => clearInterval(interval);
  }, [images]);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <title>SAISPAS</title> 
      </Head>
      <div className="relative w-full h-screen">
        <Image
          src={currentImage}
          alt="In Development"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute bottom-4 right-4 font-['Helvetica',_sans-serif] text-[3vw] text-white font-bold">
          IN DEVELOPMENT
        </div>
        <div className="absolute top-2 left-2">
          <Image src="/logo-landing.png" alt="Logo" width={200} height={200} /> {/* Logo icon */}
        </div>
      </div>
    </>
  );
}
