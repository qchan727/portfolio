// import Image from "next/image";
// import Link from "next/link";
import Hero from "./hero/Hero";
import About from "./about/About";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";

export default function Home() {
   return (
      <div className="bg-light flex flex-col gap-7.2 sm:gap-9.6">
         <section id="hero">
            <Hero />
         </section>
         <section id="about" className="sm:mt-4.5">
            <About />
         </section>
         <section id="projects" className="sm:mt-4.5">
            <Projects />
         </section>
         <section id="contact" className="sm:mt-4.5">
            <Contact />
         </section>
      </div>
   );
}
