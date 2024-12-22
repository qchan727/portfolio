"use client";
import { useState, useEffect } from "react";

/* eslint-disable @next/next/no-img-element */
export default function Hero() {
   const [isSmallScreen, setIsSmallScreen] = useState(false);

   useEffect(() => {
      const mediaQuery = window.matchMedia("(min-width: 640px)");
      setIsSmallScreen(mediaQuery.matches);

      const handleResize = () => setIsSmallScreen(mediaQuery.matches);
      mediaQuery.addEventListener("change", handleResize);

      return () => mediaQuery.removeEventListener("change", handleResize);
   }, []);

   return (
      <div className="relative flex flex-col sm:flex-row items-center justify-center sm:justify-start w-full h-screen text-darkBlue font-serif px-2.4 sm:px-12 pb-4.8 ">
         {!isSmallScreen && (
            <>
               <img
                  src="/hex-pattern.png"
                  alt="hex pattern"
                  className="w-full mt-65p"
               />
               <img
                  src="/c1.png"
                  alt="character drawing"
                  className="absolute top-0 left-0 translate-x-30p translate-y-45p z-10 w-60p"
               />
            </>
         )}

         {isSmallScreen ? (
            <div className="z-20">
               <div className="text-7.2 flex flex-col text-stroke">
                  <span className="sm:-mb-2.4">Hi, my</span>
                  <span>
                     name is <span className="font-bold">Queenie.</span>
                  </span>
               </div>
               <p className="text-2.0">Lorem ipsum dolor sit ame loy</p>
               <p className="text-2.0">consifhn aduhj elit.</p>
            </div>
         ) : (
            <div className="z-20 text-center mt-9.6">
               <span className="text-3.6">
                  Hi, my name is <span className="font-bold">Queenie.</span>
               </span>
            </div>
         )}

         {isSmallScreen ? (
            <>
               <img
                  src="/hex-pattern.png"
                  alt="hex pattern"
                  className="absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/4 z-0 w-55p"
               />
               <img
                  src="/c1.png"
                  alt="character drawing"
                  className="absolute top-1/2 left-1/2  -translate-y-45p z-10 w-1/3"
               />
               <div className="absolute bottom-0 translate-x-2/1 translate-y-1/2 flex flex-col gap-2.4 items-center h-1/2 text-1.8">
                  <span className="font-sans tracking-widest">scroll </span>
                  <div className="bg-darkBlue w-.1 h-65p"></div>
               </div>
            </>
         ) : (
            <div className="flex flex-col gap-1.8 items-center h-1/2 mt-2.4 ">
               <span className="font-sans tracking-widest text-1.8">
                  scroll{" "}
               </span>
               <div className="bg-darkBlue w-.1 h-3/4"></div>
            </div>
         )}
      </div>
   );
}
