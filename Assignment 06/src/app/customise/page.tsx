import Image from "next/image";

export default function Customise() {
	return (
     
     <div>
        <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <Image
        className="object-cover object-center rounded-xl"
        alt="customise_image"
        src="/images/customise_img.JPG"
        width= "600"
        height = "300"
        />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="font-serif lg:text-6xl md:text-6xl text-3xl mb-4 font-bold text-gray-900">
                                        Work together
        </h1>
        <p className="mb-8 leading-relaxed text-black font-serif text-justify text-xl">
                                        With whitespace , share your notes with your colleagues and 
        <br className="hidden lg:inline-block" />
                                        collaborate on them. You can also publish a note to the internet
        <br className="hidden lg:inline-block" />
                                        and share the URL with others.
        </p>
        <div className="flex justify-center">
        <button className="inline-flex text-sm items-center bg-sky-500 border-0 py-4 px-6 focus:outline-none  rounded-lg text-white mt-4 md:mt-0 font-bold font-serif">
                                        Try it now
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