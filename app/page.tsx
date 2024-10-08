"use client";

import { useRef } from "react";
import Head from "next/head";
import LandingSection from "./components/LandingSection";
import HomeSection from "./components/HomeSection";
import PromoSection from "./components/PromoSection";
import IpodSection from "./components/IpodSection";
import NavigationPreviews from "./components/NavigationPreviews";
import SceneSection from "./components/SceneSection";

export default function Home() {
  const sectionsRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <title>SAISPAS</title>
      </Head>
      <div ref={sectionsRef} className="relative w-full">
        <LandingSection />
        <HomeSection />
        <PromoSection />
        <IpodSection />
        <SceneSection />
        <NavigationPreviews />

      </div>
    </>
  );
}