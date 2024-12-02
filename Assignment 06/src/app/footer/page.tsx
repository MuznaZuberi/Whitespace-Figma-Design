import Image from "next/image";
import Link from "next/link";

export default function Footer() {
   return (
     <div>
     <footer className="footer-container">
     <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
     <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
     <a className="flex title-font font-medium items-center md:justify-start justify-center">
     <Image
         src = "/images/Logo_Icon.png"
         width = "30"
         height = "30"
         alt = "logo"
     />
     <span className="ml-3 text-2xl font-bold font-serif text-white">whitespace</span>
     </a>
     <p className="mt-2 text-sm text-white">
              whitespace was created for
     <br className="hidden lg:inline-block" />

              the new ways was live and 
     <br className="hidden lg:inline-block" />

               work. We make a better
     <br className="hidden lg:inline-block" />

              workspace around the world.
     </p>
     </div>
     <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
     <div className="lg:w-1/4 md:w-1/2 w-full px-4">
     <h2 className="font-serif font-bold text-white tracking-widest text-sm mb-3">
              Product
     </h2>
     <nav className="list-none mb-10">
     <li>
     <a className="text-white font-serif">Overview</a>
     </li>
     <li>
     <a className="text-white font-serif">Pricing</a>
     </li>
     <li>
     <a className="text-white font-serif">Customers Stories</a>
     </li>
     </nav>
     </div>
     <div className="lg:w-1/4 md:w-1/2 w-full px-4">
     <h2 className="font-serif font-bold text-white tracking-widest text-sm mb-3">
               Resources
     </h2>
     <nav className="list-none mb-10">
     <li>
     <a className="text-white font-serif">Blog</a>
     </li>
     <li>
     <a className="text-white font-serif">Guides & tutorials</a>
     </li>
     <li>
     <a className="text-white font-serif">Help center</a>
     </li>
     </nav>
     </div>
     <div className="lg:w-1/4 md:w-1/2 w-full px-4">
     <h2 className="font-serif font-bold text-white tracking-widest text-sm mb-3">
                  Company
     </h2>
     <nav className="list-none mb-10">
     <li>
     <a className="text-white font-serif">About us</a>
     </li>
     <li>
     <a className="text-white font-serif">Careers</a>
     </li>
     <li>
     <a className="text-white font-serif">Media kit</a>
     </li>
     </nav>
     </div>
     <div className="lg:w-1/4 md:w-1/2 w-full px-4">
     <h2 className="font-serif font-bold text-white tracking-widest text-sm mb-3">
                 Try it Today
     </h2>
     <p className="mt-2 text-sm text-white font-serif">
                 Get started for free. Add your whole team as your needs grow.
     </p>
     </div>
     </div>
     </div>
     <div className="footer-container">
     <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row gap-20">
     <p className="text-white text-sm text-center sm:text-left font-serif">
       
             English
     </p>
     <p className="text-white text-sm text-center sm:text-left font-serif">
       
             Terms & privacy
     </p>
     <p className="text-white text-sm text-center sm:text-left font-serif">
       
              Security
     </p>
     <p className="text-white text-sm text-center sm:text-left font-serif">
       
              Status
     </p>
     <p className="text-white text-sm text-center sm:text-left font-serif">
              © 2020 whitespace LLC
     </p>
     <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
     <Link href = "#" className="text-white cursor-pointer mr-3">
     <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
     >
     <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
     </svg>
     </Link>
     <Link href = "#" className="text-white cursor-pointer mr-3">
     <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
      >
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
      </svg>
      </Link>
      <Link href = "https://www.linkedin.com/in/muzna-amir-zubairi-280135264/" target = "blank" className="text-white cursor-pointer">
      <svg
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={0}
            className="w-5 h-5"
            viewBox="0 0 24 24"
       >
       <path
              stroke="none"
              d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
       />
       <circle cx={4} cy={4} r={2} stroke="none" />
       </svg>
       </Link>
       </span>
       </div>
       </div>
       </footer>
     </div>

   );	
}