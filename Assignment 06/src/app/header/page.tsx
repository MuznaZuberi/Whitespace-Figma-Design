import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react';



export default function Header() {
  return (
    <div>
         <header>
         <div className="nav-container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
         <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
         <Image
         src = "/images/Logo_Icon.png"
         width = "30"
         height = "30"
         alt = "logo"
         />
         <span className="ml-3 text-2xl font-bold font-serif text-white">whitespace</span>
         </a>
         <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
         </nav>
         <button className=" login-btn inline-flex items-center border-0 py-3 px-6 mr-4 focus:outline-none  rounded-lg mt-4 md:mt-0 font-bold font-serif lg:flex md:flex hidden">
                                                     Login
         </button>
         <button className="inline-flex text-sm items-center bg-sky-500 border-0 py-3 px-3 focus:outline-none  rounded-lg text-white mt-4 md:mt-0 font-bold font-serif lg:flex md:flex hidden mr-10">
                                                     Try Whitespace free
         <svg
             fill="none"
             stroke="currentColor"
             strokeLinecap="round"
             strokeLinejoin="round"
             strokeWidth={2}
             className="w-4 h-4 ml-1"
             viewBox="0 0 24 24"
         >
         <path d="M5 12h14M12 5l7 7-7 7" />
         </svg>
         </button>
         <Sheet>
         <SheetTrigger  className = "text-white mt-2 ml-[-20]"><Menu/></SheetTrigger>
         <SheetContent>
               <SheetHeader>
               <a className="mr-5 text-black font-bold font-serif cursor-pointer">Products</a>
               <a className="mr-5 text-black font-bold font-serif cursor-pointer">Solutions</a>
               <a className="mr-5 text-black font-bold font-serif cursor-pointer">Resources</a>
               <a className="mr-5 text-black font-bold font-serif cursor-pointer">Pricing</a>
               </SheetHeader>
          </SheetContent>
         </Sheet>
        </div>
        </header>
    </div>
    );
}