import Button from "@/components/button/Button";
import Heading from "@/components/heading/Heading";
import SecondaryHeading from "@/components/heading/SecondaryHeading";
import Image from "next/image";

export default function About() {
   return (
      <div className="flex items-center justify-center w-full font-sans flex-col px-2.4 sm:px-17.4 gap-5.4 pt-9.6">
         <Heading title="about." color="text-darkBlue" className="self-start" />
         <div className="flex flex-col sm:flex-row justify-center items-center gap-3.6 sm:gap-10.2 text-darkBlue">
            <Image
               src="/portrait-rounded.png"
               alt="profile"
               width={400}
               height={400}
            />
            <div className="flex flex-col justify-center items-start gap-2.4 text-1.8">
               <SecondaryHeading title="Lorem ipsum" />
               <div>
                  <p className="text-1.8">
                     Lorem ipsum odor amet, consectetuer adipiscing elit. Congu
                     eenim sodales egestas molestie dapibus parturient.
                     Habitasse ligula purus duis venenatis ac vitae.
                     Pellentesque velit dui velit accumsan nam semper commodo.
                     Pharetra semper sollicitudin sollicitudin ante semismli
                     erat magnis.
                  </p>
               </div>

               <Button text="Get in touch!" />
            </div>
         </div>
      </div>
   );
}
