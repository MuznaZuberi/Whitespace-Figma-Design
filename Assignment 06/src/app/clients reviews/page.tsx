import Image from "next/image";

export default function ClientsReviews() {
	return (
       <div>
       {/* Section 01*/}
   	   <section>
       <div className="container px-5 py-24 mx-auto">
       <h1 className="lg:text-6xl md:text-6xl text-3xl font-bold text-black font-serif mb-12 text-center">
                                What Are Clients SaYs
       </h1>
       <div className="flex flex-wrap -m-4">
       <div className="p-4 lg:w-1/3 md:w-1/1 xl:w-1/3 w-full rounded-xl">
       <div className="h-full bg-white p-8 rounded-xl border border-2 text-black">
       <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="clients-icons  h-10 mb-4"
            viewBox="0 0 975.036 975.036"
       >
       <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
       </svg>
       <p className="leading-relaxed mb-6 font-serif text-justify">
                             Whitespace is designed as a collaboration tool for bussinesses that is a full project management solution.
       </p>
       <div className="h-1 rounded overflow-hidden">
       <div className="w-full h-full bg-gray-200" />
       </div>
       <a className="inline-flex items-center mt-10">
       <img
              alt="client_img"
              src="/images/client_01.png"
              className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
       />
       <span className="flex-grow flex flex-col pl-4">
       <span className="font-serif font-bold text-black">
                                            Oberon Shaw,
       <br className="hidden lg:inline-block" />
                                            MCH
       </span>
       <span className="text-black text-sm text-left">Head of Talent
       <br className="hidden lg:inline-block" />
                                           Acquistion, North 
       <br className="hidden lg:inline-block" />
                                           America
       </span>
       </span>
       </a>
       </div>
       </div>
       <div className="p-4 lg:w-1/3 md:w-1/1 xl:w-1/3 w-full text-white">
       <div className="h-full bg-sky-500 p-8 rounded-xl">
       <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="clients-container text-white h-10 mb-4"
            viewBox="0 0 975.036 975.036"
        >
       <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
       </svg>
       <p className="leading-relaxed mb-6 font-serif text-justify">
                       Whitespace is designed as a collaboration tool for bussinesses that is a full project management solution.
       </p>
       <div className="h-1 rounded overflow-hidden">
       <div className="w-full h-full bg-white" />
       </div>
       <a className="inline-flex items-center mt-10">
       <img
              alt="client_img"
              src="/images/client_02.png"
              className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
       />
       <span className="flex-grow flex flex-col pl-4">
       <span className="client_h2 font-serif font-bold">
                                           Oberon Shaw,
       <br className="hidden lg:inline-block" />
                                           MCH
       </span>  
       <span className="text-white text-sm text-left">Head of Talent
       <br className="hidden lg:inline-block" />
                                           Acquistion, North 
       <br className="hidden lg:inline-block" />
                                           America
       </span>
       </span>  
       </a>
       </div>
       </div>
       <div className="p-4 lg:w-1/3 md:w-1/1 xl:w-1/3 w-full text-white">
       <div className="h-full p-8 bg-sky-500 rounded-xl">
       <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="clients-container text-white h-10 mb-4"
            viewBox="0 0 975.036 975.036"
       >
       <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
       </svg>
       <p className="leading-relaxed mb-6 font-serif text-justify">
                       Whitespace is designed as a collaboration tool for bussinesses that is a full project management solution.
       </p>
       <div className="h-1  rounded overflow-hidden">
       <div className="w-full h-full bg-white" />
       </div>
       <a className="inline-flex items-center mt-10">
       <img
              alt="client_img"
              src="/images/client_03.png"
              className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
       />
       <span className="flex-grow flex flex-col pl-4">
       <span className="client_h2 font-serif font-bold">
                                          Oberon Shaw,
       <br className="hidden lg:inline-block" />
                                          MCH
       </span>  
       <span className="text-white text-sm text-left">Head of Talent
       <br className="hidden lg:inline-block" />
                                          Acquistion, North 
       <br className="hidden lg:inline-block" />
                                          America
       </span>
       </span> 
       </a>
       </div>
       </div>
       </div>
       </div>
       </section>







       {/* Section 02*/}
       <section className = 'mt-24'>
       <div className="contact-container px-5 py-24 mx-auto">
       <div className="flex flex-col text-center w-full mb-12">
       <h1 className="md:text-6xl lg:text-6xl xl:text-6xl text-xl font-bold font-serif mb-4 text-white">
                                          Try Whitespace
       <br className="hidden lg:inline-block" />
                                          today
       </h1>
       <p className="lg:w-2/3 mx-auto leading-relaxed text-center text-white font-serif mt-10">
                                          Get Started For Free.
       <br className="hidden lg:inline-block" />
                                          Add your whole team as your need grow.
       </p>
       </div>
       <div className="flex justify-center">
       <button className="inline-flex text-sm items-center bg-sky-500 border-0 py-4 px-6 focus:outline-none  rounded-lg text-white mt-4 md:mt-0 font-bold font-serif">
                                          Try Taskey Free
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
       <p className="lg:w-2/3 mx-auto leading-relaxed text-center text-white font-serif mt-10 mb-20 text-xl">
                                           On a big team? Contact sales.
       </p>
       <div className="flex flex-wrap -m-4 text-center">
       <div className="lg:w-1/3 md:w-1/1 w-1/1 p-4 mx-auto">
       <a className=" relative rounded overflow-hidden">
       <Image
            alt="ecommerce"
            className="mx-auto"
            src="/images/iphone_logo.png"
            width = "50"
            height = "50"
       />
       </a>
       </div>
       <div className="lg:w-1/3 md:w-1/1 w-1/1 p-4 mx-auto">
       <a className=" relative rounded overflow-hidden">
       <Image
            alt="ecommerce"
            className="mx-auto"
            src="/images/microsoft_logo.png"
             width = "50"
            height = "50"
       />
       </a>
       </div>
       <div className="lg:w-1/3 md:w-1/1 w-1/1 p-4 mx-auto">
       <a className=" relative rounded overflow-hidden">
       <Image
            alt="ecommerce"
            className="mx-auto"
            src="/images/android-logo .png"
             width = "50"
            height = "50"
       />
       </a>
       </div>
       </div>
       <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
       </div>
       </div>
       </section>
       </div>
 );
}