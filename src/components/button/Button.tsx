interface ButtonProps {
   text: string;
}

export default function Button({ text }: ButtonProps) {
   return (
      <button className="bg-accent text-darkBlue py-1.2 px-3.6 rounded-1.2 text-1.8 font-medium ">
         {text}
      </button>
   );
}
