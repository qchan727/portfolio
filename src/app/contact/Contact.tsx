"use client";
import { useState, useEffect } from "react";
import Footer from "@/components/footer/Footer";
import Heading from "@/components/heading/Heading";
import Image from "next/image";

export default function Contact() {
   const [isSmallScreen, setIsSmallScreen] = useState(false);

   useEffect(() => {
      const mediaQuery = window.matchMedia("(min-width: 640px)");
      setIsSmallScreen(mediaQuery.matches);

      const handleResize = () => setIsSmallScreen(mediaQuery.matches);
      mediaQuery.addEventListener("change", handleResize);

      return () => mediaQuery.removeEventListener("change", handleResize);
   }, []);

   return (
      <div className="flex flex-col justify-between items-center">
         <div className="flex items-center justify-center w-full font-sans flex-col px-2.4 sm:px-12 gap-2.4 py-9.6">
            <div className="bg-darkBlue w-85 sm:h-90p text-light rounded-1.2 flex flex-col sm:flex-row justify-center items-center gap-3.6 sm:gap-8.4 px-3.6 py-7.2">
               <div className="flex flex-col gap-2.4">
                  <Heading title="contact." color="text-light" />
                  <div className="mt-1.2 sm:mt-2.4">
                     <p>
                        Send me an email at{" "}
                        <span className="text-accent font-semibold">
                           queeniechan3018@gmail.com
                        </span>
                     </p>
                     {isSmallScreen ? (
                        <>
                           <p>Feeling social? Find me on these online</p>
                           <p>spaces too!</p>
                        </>
                     ) : (
                        <p>
                           Feeling social? Find me on these online spaces too!
                        </p>
                     )}
                  </div>
                  <div className="flex gap-1.2">
                     <Image
                        src="/github.png"
                        alt="github icon"
                        width={24}
                        height={24}
                     />
                     <Image
                        src="/linkedin.png"
                        alt="linkedin icon"
                        width={24}
                        height={24}
                     />
                  </div>
               </div>
               <img
                  src="/b4.png"
                  alt="character drawing"
                  className="w-full sm:w-40p"
               />
            </div>
         </div>
         <Footer />
      </div>
   );
}
