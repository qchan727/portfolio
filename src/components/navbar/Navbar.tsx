"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [menuState, setMenuState] = useState(""); // Track menu animation state

   const handleLinkClick = () => {
      setIsMenuOpen(false);
      setMenuState("menu-exit");
   };
   const toggleMenu = () => {
      if (isMenuOpen) {
         setMenuState("menu-exit");
         setTimeout(() => setIsMenuOpen(false), 300); // Allow animation to finish
      } else {
         setIsMenuOpen(true);
         setMenuState("menu-enter");
      }
   };

   return (
      <nav className="fixed top-0 left-0 right-0 bg-darkBlue z-50 text-light">
         <div className="relative px-3.6 sm:px-10.2 py-1.8 flex justify-between items-center font-semibold text-1.8">
            <Link
               className=" hover:text-accent transition-colors duration-300 ease-in-out z-50"
               href="#hero"
            >
               Queenie Chan
            </Link>
            <div className="hidden sm:flex justify-center items-center gap-10.2">
               <Link
                  href="#about"
                  className="hover:text-accent transition-colors duration-300 ease-in-out"
               >
                  about
               </Link>
               <Link
                  href="#projects"
                  className="hover:text-accent transition-colors duration-300 ease-in-out"
               >
                  projects{" "}
               </Link>
               <Link
                  href="#contact"
                  className="hover:text-accent transition-colors duration-300 ease-in-out"
               >
                  contact
               </Link>
            </div>
            <div className="sm:hidden">
               <button
                  onClick={toggleMenu}
                  className="focus:outline-none flex items-center justify-center"
                  aria-label="Open navigation menu"
               >
                  <svg
                     width="24"
                     height="24"
                     viewBox="0 0 15 15"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                     ></path>
                  </svg>
               </button>
            </div>

            {isMenuOpen && (
               <div className={`menu ${menuState} text-2.4`}>
                  <Link
                     href="#about"
                     className="hover:text-accent transition-colors duration-300 ease-in-out "
                     onClick={handleLinkClick}
                  >
                     about
                  </Link>
                  <Link
                     href="#projects"
                     className="hover:text-accent transition-colors duration-300 ease-in-out"
                     onClick={handleLinkClick}
                  >
                     projects
                  </Link>
                  <Link
                     href="#contact"
                     className="hover:text-accent transition-colors duration-300 ease-in-out"
                     onClick={handleLinkClick}
                  >
                     contact
                  </Link>
               </div>
            )}
         </div>
      </nav>
   );
}
