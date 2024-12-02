import Image from "next/image";

export default function Slide() {
	return (
   <div>

         {/* Slide_01 */}
   	     <section className  = "my-24">
         <div className="slide-container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
         <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
         <h1 className="font-serif lg:text-6xl md:text-6xl text-2xl mb-6 font-bold text-white">
                                         Your work,
         <br className="hidden lg:inline-block" />
                                         everywhere you are
         </h1>
         <p className="mb-8 leading-relaxed text-white font-serif text-justify text-xl">
                  Access your notesfrom your computer, phone or tablet by syncronising with
         <br className="hidden lg:inline-block" />
                  various services, including whitespace,Dropbox and OneDrive.The app is
         <br className="hidden lg:inline-block" />
                  Encryption (E2EE) to secure your notes and ensure no-one but
         <br className="hidden lg:inline-block" />
                  available on Windows , macOS , Linux , Android and iOS.A terminal app is also
         <br className="hidden lg:inline-block" />
                  available!.
         </p>
         <div className="flex justify-center">
         <button className="inline-flex text-sm items-center bg-sky-500 border-0 py-4 px-6 focus:outline-none  rounded-lg text-white mt-4 md:mt-0 font-bold font-serif">
                                      Try Taskey
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







          {/* Slide_02 */}
          <section>
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="font-serif lg:text-6xl md:text-6xl text-2xl mb-6 font-bold text-black">
                                        100% your data
          </h1>
          <p className="mb-8 leading-relaxed text-black font-serif text-justify text-xl">
                  The app is open source and your notes are saved to an open
          <br className="hidden lg:inline-block" />
                  format, so you'll always have access to them. Uses End-To-End
          <br className="hidden lg:inline-block" />
                  Encryption (E2EE) to secure your notes and ensure no-one but
          <br className="hidden lg:inline-block" />
                  your self can access them.
          </p>
          <div className="flex justify-center">
          <button className="inline-flex text-sm items-center bg-sky-500 border-0 py-4 px-6 focus:outline-none  rounded-lg text-white mt-4 md:mt-0 font-bold font-serif">
                                         Read More
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
                src="/images/another_slide.JPG"
                width = "600"
                height = "300"
          />
          </div>
          </div>
          </section>




 
          {/* Slide_03 */}
          <section className="text-gray-600 body-font">
          <h1 className="font-serif lg:text-6xl md:text-6xl text-2xl mb-6 font-bold text-black text-center">
                                          Our sponsors
          </h1>
          <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a className="block relative rounded overflow-hidden">
          <Image
            alt="ecommerce"
            className="mx-auto"
            src="/images/apple_img.JPG"
            width = "200"
            height = "200"
          />
          </a>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a className="block relative  rounded overflow-hidden">
          <Image
            alt="ecommerce"
            className="mx-auto"
            src="/images/microsoft_img.JPG"
            width = "200"
            height = "200"
          />
          </a>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a className="block relative  rounded overflow-hidden">
          <Image
            alt="ecommerce"
            className="mx-auto"
            src="/images/slack_img.JPG"
            width = "200"
            height = "200"
          />
          </a>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a className="block relative rounded overflow-hidden mt-3">
          <Image
            alt="ecommerce"
            className="mx-auto"
            src="/images/google_img.JPG"
            width = "200"
            height = "200"
          />
          </a>
          </div>
          </div>
          </div>
          </section>
   </div>
 );
}