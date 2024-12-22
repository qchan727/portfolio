import Heading from "@/components/heading/Heading";
import Project from "@/components/project/Project";

export default function Projects() {
   const projects = [
      {
         title: "project 1",
         description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congu eenim sodales egestas molestie dapibus parturient. Habitasse ligula cond imentum pur us duis venenatis ac eget vitae. ",
         technologies: [
            { src: "/javascript.png", alt: "javascript icon" },
            { src: "/html.png", alt: "html icon" },
            { src: "/css.png", alt: "css icon" },
         ],
         githubLink: "https://github.com",
         hasArrow: true,
      },
      {
         title: "project 2",
         description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congu eenim sodales egestas molestie dapibus parturient. Habitasse ligula cond imentum pur us duis venenatis ac eget vitae. ",
         technologies: [
            { src: "/javascript.png", alt: "javascript icon" },
            { src: "/html.png", alt: "html icon" },
            { src: "/css.png", alt: "css icon" },
            { src: "/mongodb.png", alt: "mongodb icon" },
         ],
         githubLink: "https://github.com",
         hasArrow: false,
      },
      {
         title: "project 3",
         description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congu eenim sodales egestas molestie dapibus parturient. Habitasse ligula cond imentum pur us duis venenatis ac eget vitae. ",
         technologies: [
            { src: "/nextjs.png", alt: "nextjs icon" },
            { src: "/html.png", alt: "html icon" },
            { src: "/css.png", alt: "css icon" },
         ],
         githubLink: "https://github.com",
         hasArrow: true,
      },
   ];

   return (
      <div className="flex items-center justify-center w-full font-sans flex-col px-2.4 sm:px-17.4 gap-5.4 pt-9.6">
         <Heading
            title="projects."
            color="text-darkBlue"
            className="self-start "
         />
         <div className="flex flex-col gap-8.4 w-full">
            {projects.map((project, index) => (
               <Project
                  key={index}
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  githubLink={project.githubLink}
                  index={index}
                  hasArrow={project.hasArrow}
               />
            ))}
         </div>
      </div>
   );
}
