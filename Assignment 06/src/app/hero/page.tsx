import Image from "next/image";

export default function Hero() {
	return (
   <div>
   	  <section>
      <div className="about-container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="font-serif lg:text-6xl md:text-6xl text-3xl mb-6 font-bold text-white">
                                              Get More Done
      <br className="hidden lg:inline-block" />
                                              with whitespace
      </h1>
      <p className="mb-8 leading-relaxed text-white font-serif text-justify">
                                              Project management software that enables your teams to 
      <br className="hidden lg:inline-block" />
                                              collaborate , plan , analyze and manage everyday tasks.
      </p>
      <div className="flex justify-center">
      <button className="inline-flex text-sm items-center bg-sky-500 border-0 py-4 px-6 focus:outline-none  rounded-lg text-white mt-4 md:mt-0 font-bold font-serif">
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
      </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        className="object-cover object-center rounded-xl"
        alt="hero_img"
        src="/images/hero_img.JPG"
        width = "600"
        height = "300"
      />
      </div>
      </div>
      </section>
   </div>
 );
}