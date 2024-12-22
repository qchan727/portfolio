import Button from "@/components/button/Button";
import SecondaryHeading from "../heading/SecondaryHeading";
import Image from "next/image";

interface ProjectProps {
   title: string;
   description: string;
   technologies: { src: string; alt: string }[];
   githubLink: string;
   index: number;
   hasArrow?: boolean;
}

export default function Project({
   title,
   description,
   technologies,
   githubLink,
   index,
   hasArrow = false,
}: ProjectProps) {
   const isEven = index % 2 === 0;

   return (
      <div
         className={`flex flex-col sm:flex-row justify-center items-center text-1.8 ${
            isEven ? "" : "sm:flex-row-reverse"
         } gap-4.8`}
      >
         <div className="flex flex-col gap-1.8 justify-center items-start sm:w-1/2 text-darkBlue">
            <SecondaryHeading title={title} hasLink={hasArrow} />
            <p>{description}</p>
            <div className="flex gap-1.2 items-center justify-center">
               {technologies.map((tech, index) => (
                  <Image
                     key={index}
                     src={tech.src}
                     alt={tech.alt}
                     width={24}
                     height={24}
                  />
               ))}
            </div>
            <Button text="View github" />
         </div>
         <div className="w-full sm:w-1/2 h-28 bg-lightBlue"></div>
      </div>
   );
}
