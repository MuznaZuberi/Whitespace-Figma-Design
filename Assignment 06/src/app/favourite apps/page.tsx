import Image from "next/image";

export default function FavouriteApps() {
	return (
     
     <div>
        <section className = "my-24">
        <div className="apps-container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <Image
        className="object-cover object-center rounded"
        alt="team_image"
        src="/images/Apps.png"
        width= "600"
        height = "300"
        />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="font-serif lg:text-6xl md:text-2xl text-xl mb-4 font-bold text-white">
                                     Work with Your
        <br className="hidden lg:inline-block" />
                                     Favourite Apps
        <br className="hidden lg:inline-block" />
                                     Using
        <br className="hidden lg:inline-block" />
                                     whitespace
        </h1>
        <p className="mb-8 leading-relaxed text-black font-serif text-justify text-xl text-white">
                                     Whitespace teams up with your favourite software. 
        <br className="hidden lg:inline-block" />
                                     Integrate with over 1000+ apps with Zapier to have all
        <br className="hidden lg:inline-block" />
                                     the tools your need for your project success.
        </p>
        <div className="flex justify-center">
        <button className="inline-flex text-sm items-center bg-sky-500 border-0 py-4 px-6 focus:outline-none  rounded-lg text-white mt-4 md:mt-0 font-bold font-serif">
                                     Read more
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
        </div>
        </section>
     </div>
);
}