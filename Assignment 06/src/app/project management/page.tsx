import Image from "next/image";

export default function Project() {
	return (
   <div>
   	   <section>
       <div className="container mx-auto flex px-5 py-40 md:flex-row flex-col items-center">
       <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
       <h1 className="font-serif lg:text-6xl md:text-6xl text-2xl font-bold text-black">
                               Project
       <br className="hidden lg:inline-block" />
                               Management
       </h1>
       <p className="mb-8 leading-relaxed text-black font-serif text-justify text-xl mt-20 lg:mt-10">
                               Images , Video , PDFs and audio files are supported.
       <br className="hidden lg:inline-block" />
                               Create maths expressions and diagrams directly from
       <br className="hidden lg:inline-block" />
                               the app.Take photos with the mobile app and save
       <br className="hidden lg:inline-block" />
                               them to a note.
       </p>
       <div className="flex justify-center">
       <button className="inline-flex text-sm items-center bg-sky-500 border-0 py-4 px-6 focus:outline-none  rounded-lg text-white mt-4 md:mt-0 font-bold font-serif">
                               Get Started
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
       </div>
       </div>
       <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
       <Image
        className="object-cover object-center rounded-xl"
        alt="project_image"
        src="/images/project_img.JPG"
        width = "600"
        height = "300"
       />
       </div>
       </div>
       </section>
   </div>
 );
}