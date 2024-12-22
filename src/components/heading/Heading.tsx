interface HeadingProps {
   title: string;
   color: string;
   className?: string;
}

export default function Heading({ title, color, className }: HeadingProps) {
   return (
      <header className={`${color} ${className} relative`}>
         <h1 className="font-serif font-medium text-6.0 sm:text-8.4 leading-none relative z-20 ">
            {title}
         </h1>
         <div className="absolute z-0 bottom-0 left-0 w-15 h-.4 translate-x-.6 translate-y-full bg-accent"></div>
      </header>
   );
}
