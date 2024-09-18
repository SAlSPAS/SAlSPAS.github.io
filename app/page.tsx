import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full h-screen">
      <Image
        src="/saispas.jpg"
        alt="In Development"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="absolute bottom-4 right-4 font-['Helvetica',_sans-serif] text-[3vw] text-white font-bold">
        IN DEVELOPMENT
      </div>
    </div>
  );
}
