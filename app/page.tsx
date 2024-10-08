'use client'

import { useEffect } from "react";
import { useRouter } from 'next/navigation';
import Image from "next/image";

export default function Home() { 
  const router = useRouter();
  
  useEffect(() => {
    const timer = setTimeout(() => {  
      router.push('/moon');  
    }, 1000);  

    return () => clearTimeout(timer);  
  },[router])

  return (  
    <div className="relative h-screen flex flex-col items-center justify-center max-w-sm mx-auto">
      <div className="flex flex-col items-center justify-center mb-20 bg-center text-white px-5">  
        <div className="mb-12 image-with-shadow">
          <Image
              src="/images/avatar.png"
              width={150}
              height={150}
              alt="Yello Moon"
          />
        </div>
        <h1 className="text-5xl font-bold text-transparent" style={{translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0%)", opacity: "1", backgroundImage: "linear-gradient(to top, #FFFFFF 25%, rgb(255, 255, 130) 73%)", fontFamily: "'Brush Script MT', cursive", backgroundClip: "text", fontWeight:"700", lineHeight: "100%"}}>Moon Moverz</h1>  
        <p className="text-lg font-bold sm:text-xl mt-2 shadow-lg text-yellow-200 text-center" style={{fontFamily: "'Brush Script MT', cursive"}}>The First Memecoin Built With  Classic NFT  on Movement Network</p>  
      </div>  
      <div className="absolute bottom-5">
        <p className="text-base font-bold sm:text-lg text-yellow-200" style={{fontFamily: "'Brush Script MT', cursive"}}>Moonmoverz.co - v1.0</p>  
      </div>
    </div>
  );    
}