export default function Footer() {
   const currentYear = new Date().getFullYear();

   return (
      <footer className="bg-light text-darkBlue ">
         <p className="pb-1.8 sm:pb-2.4 ">&copy; {currentYear} Queenie Chan</p>

         <div className="fixed bottom-0 left-0 right-0 h-1.2 sm:h-1.8 bg-white z-50"></div>
      </footer>
   );
}
