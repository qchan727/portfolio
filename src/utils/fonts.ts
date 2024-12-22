import { Inter, Lora } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
export const inter = Inter({
   subsets: ["latin"],
   variable: "--font-inter",
   display: "swap",
   weight: ["400", "500", "600", "700"],
});

export const lora = Lora({
   subsets: ["latin"],
   variable: "--font-lora",
   display: "swap",
   weight: ["400", "500", "600", "700"],
});
